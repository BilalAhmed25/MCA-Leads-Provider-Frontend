import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
    FiLayers, 
    FiList, 
    FiHash, 
    FiDollarSign, 
    FiFileText, 
    FiTag, 
    FiSliders, 
    FiUser, 
    FiCreditCard, 
    FiBriefcase, 
    FiMail, 
    FiUploadCloud, 
    FiArrowRight, 
    FiCheck, 
    FiX, 
    FiFile, 
    FiLoader,
    FiDatabase,
    FiTrash2,
    FiEye,
    FiArrowLeft
} from 'react-icons/fi';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import { useNoIndex } from '../hooks/useNoIndex';
import { API_BASE_URL } from '../config';
import './AddLeads.css';

const AddLeads = () => {
    useNoIndex();
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = Boolean(id);

    // Form state
    const [category, setCategory] = useState('');
    const [listName, setListName] = useState('');
    const [availableQuantity, setAvailableQuantity] = useState('');
    const [pricePerLead, setPricePerLead] = useState('');
    const [description, setDescription] = useState('');
    
    // Tags state
    const [tags, setTags] = useState(['Phone', 'Email', 'Company', 'Revenue', 'State']);
    const [tagInput, setTagInput] = useState('');

    // Column Mapping state
    const [columnMapping, setColumnMapping] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        revenue: '',
        state: '',
        price: ''
    });

    // Excel Upload State
    const [selectedFile, setSelectedFile] = useState(null);
    const [excelColumns, setExcelColumns] = useState([]);
    const [previewRowCount, setPreviewRowCount] = useState(0);
    const [isDragActive, setIsDragActive] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [isQuickSaving, setIsQuickSaving] = useState(false);
    const [loadingInitial, setLoadingInitial] = useState(false);

    // Existing Lead Lists state (for bottom management table)
    const [leadLists, setLeadLists] = useState([]);
    const [loadingLists, setLoadingLists] = useState(false);
    const [activeDetailLead, setActiveDetailLead] = useState(null);

    const fileInputRef = useRef(null);

    // Fetch single lead for Edit mode
    useEffect(() => {
        if (isEditMode) {
            const fetchSingleLead = async () => {
                setLoadingInitial(true);
                try {
                    const res = await fetch(`${API_BASE_URL}/noAuth/mca-leads/${id}`);
                    const data = await res.json();
                    if (data.success && data.lead_list) {
                        const item = data.lead_list;
                        setCategory(item.category || '');
                        setListName(item.list_name || '');
                        setAvailableQuantity(item.quantity ? String(item.quantity) : '');
                        setPricePerLead(item.price_per_lead ? String(item.price_per_lead) : '');
                        setDescription(item.description || '');

                        // Parse tags
                        if (item.tags) {
                            try {
                                const parsed = typeof item.tags === 'string' ? JSON.parse(item.tags) : item.tags;
                                if (Array.isArray(parsed) && parsed.length > 0) {
                                    setTags(parsed);
                                }
                            } catch (e) {
                                // Keep default tags
                            }
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Lead Listing Not Found',
                            text: 'The requested lead listing could not be found.'
                        }).then(() => navigate('/pricing/'));
                    }
                } catch (err) {
                    console.error("Error loading lead for edit:", err);
                } finally {
                    setLoadingInitial(false);
                }
            };

            fetchSingleLead();
        }
    }, [id, isEditMode, navigate]);

    // Fetch existing lead lists
    const fetchLeadLists = async () => {
        setLoadingLists(true);
        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-leads`);
            const data = await res.json();
            if (data.success) {
                setLeadLists(data.leads || []);
            }
        } catch (err) {
            console.error("Error fetching lead lists:", err);
        } finally {
            setLoadingLists(false);
        }
    };

    useEffect(() => {
        fetchLeadLists();
    }, []);

    // Handle Tag Add
    const handleTagKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const trimmed = tagInput.trim();
            if (trimmed && !tags.includes(trimmed)) {
                setTags([...tags, trimmed]);
                setTagInput('');
            }
        }
    };

    const handleRemoveTag = (indexToRemove) => {
        setTags(tags.filter((_, idx) => idx !== indexToRemove));
    };

    // Auto-detect column mappings from Excel headers
    const autoDetectMappings = (headers) => {
        const mapping = { ...columnMapping };
        headers.forEach(header => {
            const h = header.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (!mapping.firstName && (h.includes('firstname') || h === 'first' || h === 'fname' || h.includes('ownerfirst'))) {
                mapping.firstName = header;
            } else if (!mapping.lastName && (h.includes('lastname') || h === 'last' || h === 'lname' || h.includes('ownerlast'))) {
                mapping.lastName = header;
            } else if (!mapping.company && (h.includes('company') || h.includes('business') || h === 'dba')) {
                mapping.company = header;
            } else if (!mapping.email && (h.includes('email') || h === 'mail')) {
                mapping.email = header;
            } else if (!mapping.phone && (h.includes('phone') || h.includes('cell') || h.includes('mobile') || h.includes('tel'))) {
                mapping.phone = header;
            } else if (!mapping.revenue && (h.includes('revenue') || h.includes('sales') || h.includes('gross'))) {
                mapping.revenue = header;
            } else if (!mapping.state && (h.includes('state') || h === 'st' || h === 'region')) {
                mapping.state = header;
            } else if (!mapping.price && (h.includes('price') || h.includes('cost'))) {
                mapping.price = header;
            }
        });
        setColumnMapping(mapping);
    };

    // Process selected Excel/CSV file
    const processExcelFile = (file) => {
        if (!file) return;
        const validExtensions = ['.xlsx', '.xls', '.csv'];
        const isExcel = validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
        
        if (!isExcel) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid File',
                text: 'Please select a valid Excel (.xlsx, .xls) or CSV file.'
            });
            return;
        }

        setSelectedFile(file);

        // Client-side quick parse for headers & row count
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonRows = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

                if (jsonRows.length > 0) {
                    const headers = Object.keys(jsonRows[0]);
                    setExcelColumns(headers);
                    setPreviewRowCount(jsonRows.length);
                    setAvailableQuantity(jsonRows.length.toLocaleString());
                    autoDetectMappings(headers);

                    // If List Name is empty, default to file name without extension
                    if (!listName) {
                        const nameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
                        setListName(nameWithoutExt);
                    }
                } else {
                    setPreviewRowCount(0);
                    setExcelColumns([]);
                }
            } catch (err) {
                console.error("Error previewing Excel file:", err);
            }
        };
        reader.readAsArrayBuffer(file);
    };

    // File Drop Handlers
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            processExcelFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            processExcelFile(e.target.files[0]);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setExcelColumns([]);
        setPreviewRowCount(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Reset Form
    const resetForm = () => {
        setCategory('');
        setListName('');
        setAvailableQuantity('');
        setPricePerLead('');
        setDescription('');
        setTags(['Phone', 'Email', 'Company', 'Revenue', 'State']);
        setColumnMapping({
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phone: '',
            revenue: '',
            state: '',
            price: ''
        });
        handleRemoveFile();
    };

    // 1. Quick Save / Save Changes Action
    const handleQuickSave = async () => {
        if (!listName.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'List Name Required',
                text: 'Please provide a List Name to save this lead listing.'
            });
            return;
        }

        setIsQuickSaving(true);
        try {
            const cleanQuantity = parseInt(String(availableQuantity).replace(/,/g, '')) || 0;
            const cleanPrice = parseFloat(String(pricePerLead).replace(/[^0-9.]/g, '')) || 0.00;

            const payload = {
                category,
                list_name: listName,
                quantity: cleanQuantity,
                available_quantity: cleanQuantity,
                price_per_lead: cleanPrice,
                description,
                tags
            };

            const endpoint = isEditMode 
                ? `${API_BASE_URL}/noAuth/mca-leads/${id}`
                : `${API_BASE_URL}/noAuth/mca-leads/quick-save`;

            const method = isEditMode ? 'PUT' : 'POST';

            const res = await fetch(endpoint, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: isEditMode ? 'Listing Updated!' : 'Lead Listing Saved!',
                    text: isEditMode 
                        ? 'The lead listing details have been updated successfully.'
                        : 'The lead listing was created successfully without file.',
                    timer: 2000,
                    showConfirmButton: false
                });

                if (isEditMode) {
                    navigate('/pricing/');
                } else {
                    resetForm();
                    fetchLeadLists();
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Save Failed',
                    text: data.message || 'Could not save lead listing.'
                });
            }
        } catch (error) {
            console.error("Save error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Network Error',
                text: 'Failed to communicate with server.'
            });
        } finally {
            setIsQuickSaving(false);
        }
    };

    // 2. Upload & Sync Leads (With or without Excel File)
    const handleUploadAndSync = async () => {
        if (!listName.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'List Name Required',
                text: 'Please provide a List Name for this lead dataset.'
            });
            return;
        }

        // If in create mode and no file is chosen, prompt
        if (!isEditMode && !selectedFile) {
            Swal.fire({
                icon: 'warning',
                title: 'No Excel File Selected',
                text: 'Please choose or drag an Excel file (.xlsx, .xls, .csv) to extract records, or use Quick Save (No File) above.'
            });
            return;
        }

        setIsUploading(true);
        try {
            const formData = new FormData();
            if (selectedFile) {
                formData.append('file', selectedFile);
            }
            formData.append('category', category);
            formData.append('list_name', listName);
            formData.append('quantity', parseInt(String(availableQuantity).replace(/,/g, '')) || previewRowCount);
            formData.append('available_quantity', parseInt(String(availableQuantity).replace(/,/g, '')) || previewRowCount);
            formData.append('price_per_lead', parseFloat(String(pricePerLead).replace(/[^0-9.]/g, '')) || 0.00);
            formData.append('description', description);
            formData.append('tags', JSON.stringify(tags));
            formData.append('column_mapping', JSON.stringify(columnMapping));

            const endpoint = isEditMode
                ? `${API_BASE_URL}/noAuth/mca-leads/${id}`
                : `${API_BASE_URL}/noAuth/mca-leads/upload`;

            const method = isEditMode ? 'PUT' : 'POST';

            const res = await fetch(endpoint, {
                method,
                body: formData
            });

            const data = await res.json();
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: isEditMode ? 'Lead Listing Updated!' : 'Leads Uploaded & Synced!',
                    html: isEditMode
                        ? `Lead listing <b>${listName}</b> updated successfully!`
                        : `<b>${data.total_records || previewRowCount}</b> lead records were extracted and saved into the database successfully!`,
                    confirmButtonColor: '#601FEA'
                });

                if (isEditMode) {
                    navigate('/pricing/');
                } else {
                    resetForm();
                    fetchLeadLists();
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Sync Failed',
                    text: data.message || 'Failed to extract and sync leads.'
                });
            }
        } catch (error) {
            console.error("Upload error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || 'Server error occurred during Excel sync.'
            });
        } finally {
            setIsUploading(false);
        }
    };

    // Delete a lead list
    const handleDeleteLead = async (delId, name) => {
        const result = await Swal.fire({
            title: 'Delete Lead List?',
            text: `Are you sure you want to delete "${name}" and all its extracted records?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Yes, delete it'
        });

        if (result.isConfirmed) {
            try {
                const res = await fetch(`${API_BASE_URL}/noAuth/mca-leads/${delId}`, {
                    method: 'DELETE'
                });
                const data = await res.json();
                if (data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted',
                        text: 'Lead list and records removed.',
                        timer: 1500,
                        showConfirmButton: false
                    });
                    fetchLeadLists();
                    if (activeDetailLead && activeDetailLead.lead_list.id === delId) {
                        setActiveDetailLead(null);
                    }
                }
            } catch (err) {
                console.error("Delete error:", err);
            }
        }
    };

    // View lead list details
    const handleViewLeadDetails = async (viewId) => {
        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-leads/${viewId}`);
            const data = await res.json();
            if (data.success) {
                setActiveDetailLead(data);
            }
        } catch (err) {
            console.error("Fetch detail error:", err);
        }
    };

    if (loadingInitial) {
        return (
            <div className="add-leads-page flex items-center justify-center p-20">
                <div className="text-center text-slate-500 flex flex-col items-center gap-3">
                    <FiLoader className="spinner-icon text-3xl text-purple-600" />
                    <span className="font-semibold text-base">Loading lead dataset details...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="add-leads-page">
            <div className="container-custom">
                {/* Header Bar */}
                <div className="add-leads-header">
                    <div>
                        {isEditMode && (
                            <Link to="/pricing/" className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-800 mb-2">
                                <FiArrowLeft />
                                <span>Back to Pricing</span>
                            </Link>
                        )}
                        <h1 className="add-leads-title">
                            {isEditMode ? 'Edit Lead Listing' : 'Lead Entry Management'}
                        </h1>
                        <p className="add-leads-subtitle">
                            {isEditMode 
                                ? 'Modify lead dataset specifications or upload a replacement file'
                                : 'Create new lead listings or bulk upload datasets'}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        {isEditMode && (
                            <Link 
                                to="/pricing/"
                                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-colors"
                            >
                                Cancel
                            </Link>
                        )}
                        <button 
                            type="button"
                            className="btn-quick-save"
                            onClick={handleQuickSave}
                            disabled={isQuickSaving || isUploading}
                        >
                            {isQuickSaving ? (
                                <>
                                    <FiLoader className="spinner-icon" />
                                    <span>Saving...</span>
                                </>
                            ) : (
                                <>
                                    <FiCheck />
                                    <span>{isEditMode ? 'Save Changes' : 'Quick Save (No File)'}</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Upload Guide & Format Banner */}
                <div className="format-guide-banner">
                    <div className="guide-icon-box">
                        <FiList />
                    </div>
                    <div>
                        <h3 className="guide-title">Upload Guide & Format</h3>
                        <p className="guide-text">
                            <strong>Required Excel Columns:</strong> Phone Number, First Name, Last Name, Email, Company, Revenue, State, Additional Data, Price.
                        </p>
                        <p className="guide-subtext">
                            System supports processing up to 50K+ records simultaneously with automated batch synchronization.
                        </p>
                    </div>
                </div>

                {/* Main 2-Column Form Grid */}
                <div className="leads-form-grid">
                    {/* LEFT COLUMN */}
                    <div className="form-column-left">
                        {/* 1. General Information Card */}
                        <div className="lead-card">
                            <div className="card-header-flex">
                                <div className="card-icon-box">
                                    <FiLayers />
                                </div>
                                <h2 className="card-title">General Information</h2>
                            </div>

                            <div className="inputs-grid-2x2">
                                <div className="form-group">
                                    <label className="form-label">Category</label>
                                    <div className="input-with-icon">
                                        <FiLayers className="field-icon" />
                                        <input
                                            type="text"
                                            className="form-control-input"
                                            placeholder="e.g. Real Estate"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            list="category-suggestions"
                                        />
                                        <datalist id="category-suggestions">
                                            <option value="MCA Live Transfer Leads" />
                                            <option value="MCA Callback Leads" />
                                            <option value="Aged MCA Leads" />
                                            <option value="Business Loan Leads" />
                                            <option value="Digital Marketing Leads" />
                                            <option value="B2B Email Lists" />
                                            <option value="Real Estate" />
                                            <option value="Solar Leads" />
                                            <option value="Insurance Leads" />
                                        </datalist>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">List Name</label>
                                    <div className="input-with-icon">
                                        <FiList className="field-icon" />
                                        <input
                                            type="text"
                                            className="form-control-input"
                                            placeholder="e.g. Premium New York Leads"
                                            value={listName}
                                            onChange={(e) => setListName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Available Quantity</label>
                                    <div className="input-with-icon">
                                        <FiHash className="field-icon" />
                                        <input
                                            type="text"
                                            className="form-control-input"
                                            placeholder="e.g. 50,000"
                                            value={availableQuantity}
                                            onChange={(e) => setAvailableQuantity(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Price per Lead</label>
                                    <div className="input-with-icon">
                                        <FiDollarSign className="field-icon" />
                                        <input
                                            type="text"
                                            className="form-control-input"
                                            placeholder="0.00"
                                            value={pricePerLead}
                                            onChange={(e) => setPricePerLead(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Metadata & Fields Card */}
                        <div className="lead-card">
                            <div className="card-header-flex">
                                <div className="card-icon-box">
                                    <FiTag />
                                </div>
                                <h2 className="card-title">Metadata & Fields</h2>
                            </div>

                            <div className="form-group mb-4">
                                <label className="form-label flex items-center gap-1.5">
                                    <FiFileText className="text-slate-400" />
                                    <span>Description</span>
                                </label>
                                <div className="textarea-wrapper">
                                    <textarea
                                        className="form-control-textarea"
                                        placeholder="Detailed description of the lead list..."
                                        rows={3}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label flex items-center gap-1.5">
                                    <FiTag className="text-slate-400" />
                                    <span>Data Fields (Tags)</span>
                                </label>
                                <div className="tags-input-wrapper">
                                    {tags.map((tag, index) => (
                                        <span key={index} className="tag-chip">
                                            {tag}
                                            <button
                                                type="button"
                                                className="tag-remove-btn"
                                                onClick={() => handleRemoveTag(index)}
                                                aria-label="Remove tag"
                                            >
                                                <FiX />
                                            </button>
                                        </span>
                                    ))}
                                    <input
                                        type="text"
                                        className="tag-field-input"
                                        placeholder="Add new field (e.g. Phone, Email)..."
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyDown={handleTagKeyDown}
                                    />
                                </div>
                                <p className="tag-helper-text">
                                    Press <strong>Enter</strong> to add a new data field mapping.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="form-column-right">
                        {/* 1. Column Mapping Card */}
                        <div className="lead-card">
                            <div className="card-header-flex">
                                <div className="card-icon-box">
                                    <FiSliders />
                                </div>
                                <h2 className="card-title">Column Mapping</h2>
                            </div>

                            <div className="mapping-fields-stack">
                                <div className="form-group">
                                    <label className="form-label">First Name Mapping</label>
                                    <div className="input-with-icon">
                                        <FiUser className="field-icon" />
                                        <input
                                            type="text"
                                            className="form-control-input"
                                            placeholder="Column Name..."
                                            value={columnMapping.firstName}
                                            onChange={(e) => setColumnMapping({ ...columnMapping, firstName: e.target.value })}
                                            list={excelColumns.length > 0 ? "excel-columns-list" : undefined}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Last Name Mapping</label>
                                    <div className="input-with-icon">
                                        <FiCreditCard className="field-icon" />
                                        <input
                                            type="text"
                                            className="form-control-input"
                                            placeholder="Column Name..."
                                            value={columnMapping.lastName}
                                            onChange={(e) => setColumnMapping({ ...columnMapping, lastName: e.target.value })}
                                            list={excelColumns.length > 0 ? "excel-columns-list" : undefined}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Company Mapping</label>
                                    <div className="input-with-icon">
                                        <FiBriefcase className="field-icon" />
                                        <input
                                            type="text"
                                            className="form-control-input"
                                            placeholder="Column Name..."
                                            value={columnMapping.company}
                                            onChange={(e) => setColumnMapping({ ...columnMapping, company: e.target.value })}
                                            list={excelColumns.length > 0 ? "excel-columns-list" : undefined}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Email Mapping</label>
                                    <div className="input-with-icon">
                                        <FiMail className="field-icon" />
                                        <input
                                            type="text"
                                            className="form-control-input"
                                            placeholder="Column Name..."
                                            value={columnMapping.email}
                                            onChange={(e) => setColumnMapping({ ...columnMapping, email: e.target.value })}
                                            list={excelColumns.length > 0 ? "excel-columns-list" : undefined}
                                        />
                                    </div>
                                </div>

                                {excelColumns.length > 0 && (
                                    <datalist id="excel-columns-list">
                                        {excelColumns.map((col, idx) => (
                                            <option key={idx} value={col} />
                                        ))}
                                    </datalist>
                                )}
                            </div>
                        </div>

                        {/* 2. Upload Excel Card */}
                        <div className="upload-card-wrapper">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                                accept=".xlsx,.xls,.csv"
                                style={{ display: 'none' }}
                            />

                            {!selectedFile ? (
                                <div
                                    className={`excel-dropzone ${isDragActive ? 'drag-active' : ''}`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                                >
                                    <div className="upload-cloud-icon-box">
                                        <FiUploadCloud />
                                    </div>
                                    <h4 className="dropzone-main-text">
                                        {isEditMode ? 'Replace dataset file (optional)' : 'Browse Excel file to upload'}
                                    </h4>
                                    <p className="dropzone-sub-text">
                                        {isEditMode ? 'Drop new file to overwrite records' : 'Click or drag to upload Excel file'}
                                    </p>
                                </div>
                            ) : (
                                <div className="selected-file-banner">
                                    <div className="file-info-group">
                                        <div className="file-icon-square">
                                            <FiFile />
                                        </div>
                                        <div>
                                            <div className="file-name-text" title={selectedFile.name}>
                                                {selectedFile.name}
                                            </div>
                                            <div className="file-meta-badge">
                                                {previewRowCount.toLocaleString()} replacement rows
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn-remove-file"
                                        onClick={handleRemoveFile}
                                        title="Remove file"
                                    >
                                        <FiX />
                                    </button>
                                </div>
                            )}

                            <button
                                type="button"
                                className="btn-upload-sync"
                                onClick={handleUploadAndSync}
                                disabled={isUploading || isQuickSaving}
                            >
                                {isUploading ? (
                                    <>
                                        <FiLoader className="spinner-icon" />
                                        <span>Syncing Data...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{isEditMode ? 'Update & Sync Leads' : 'Upload & Sync Leads'}</span>
                                        <FiArrowRight />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* EXISTING LEAD LISTS & DB SYNCED RECORDS SECTION (Visible in create mode or overview) */}
                {!isEditMode && (
                    <div className="lead-listings-section">
                        <div className="lead-listings-header">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-lg font-bold">
                                    <FiDatabase />
                                </div>
                                <h2 className="lead-listings-title">Synced Lead Listings</h2>
                            </div>
                            <span className="lead-badge">
                                {leadLists.length} Lists in Database
                            </span>
                        </div>

                        <div className="table-card-wrapper bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                            {loadingLists ? (
                                <div className="p-12 text-center text-slate-400 flex items-center justify-center gap-2">
                                    <FiLoader className="spinner-icon text-xl text-purple-600" />
                                    <span>Loading lead records from database...</span>
                                </div>
                            ) : leadLists.length === 0 ? (
                                <div className="p-12 text-center text-slate-400">
                                    No lead datasets created yet. Upload an Excel file or use Quick Save above!
                                </div>
                            ) : (
                                <div className="table-overflow-container">
                                    <table className="users-table w-full">
                                        <thead>
                                            <tr>
                                                <th>LIST NAME</th>
                                                <th>CATEGORY</th>
                                                <th>QUANTITY / EXTRACTED</th>
                                                <th>PRICE / LEAD</th>
                                                <th>SOURCE FILE</th>
                                                <th>DATE CREATED</th>
                                                <th className="text-right">ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {leadLists.map((lead) => (
                                                <tr key={lead.id} className="user-row">
                                                    <td>
                                                        <div className="font-bold text-slate-900">{lead.list_name}</div>
                                                        {lead.description && (
                                                            <div className="text-xs text-slate-400 truncate max-w-xs">{lead.description}</div>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <span className="inline-block bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                                                            {lead.category || 'General'}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="font-bold text-slate-800">
                                                            {lead.extracted_records_count > 0 
                                                                ? `${Number(lead.extracted_records_count).toLocaleString()} Extracted`
                                                                : `${Number(lead.quantity).toLocaleString()} (Manual)`}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="font-bold text-emerald-600">
                                                            ${Number(lead.price_per_lead).toFixed(2)}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs text-slate-500 font-medium">
                                                            {lead.file_name || 'Direct Entry'}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs text-slate-400">
                                                            {new Date(lead.created_at).toLocaleDateString()}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="action-buttons-group justify-end">
                                                            <Link
                                                                to={`/edit-lead/${lead.id}/`}
                                                                className="action-btn text-blue-600 hover:text-blue-800"
                                                                title="Edit Lead List"
                                                            >
                                                                <FiSliders />
                                                            </Link>
                                                            <button
                                                                type="button"
                                                                className="action-btn text-purple-600 hover:text-purple-800"
                                                                onClick={() => handleViewLeadDetails(lead.id)}
                                                                title="View Extracted Records Preview"
                                                            >
                                                                <FiEye />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="action-btn delete-btn"
                                                                onClick={() => handleDeleteLead(lead.id, lead.list_name)}
                                                                title="Delete Lead List"
                                                            >
                                                                <FiTrash2 />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* MODAL / PREVIEW FOR EXTRACTED LEAD RECORDS */}
                {activeDetailLead && (
                    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden">
                            {/* Modal Header */}
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-black text-slate-900">
                                        {activeDetailLead.lead_list.list_name}
                                    </h3>
                                    <p className="text-xs text-slate-400 font-medium mt-1">
                                        {activeDetailLead.total_records} total database records extracted • Category: {activeDetailLead.lead_list.category || 'General'}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setActiveDetailLead(null)}
                                    className="w-9 h-9 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center"
                                >
                                    <FiX />
                                </button>
                            </div>

                            {/* Modal Records Table */}
                            <div className="p-6 overflow-y-auto flex-1">
                                {activeDetailLead.records.length === 0 ? (
                                    <div className="p-8 text-center text-slate-400 font-medium">
                                        No individual lead rows attached to this listing (Direct Entry).
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                                        <table className="w-full text-left text-xs border-collapse">
                                            <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                                                <tr>
                                                    <th className="p-3">#</th>
                                                    <th className="p-3">First Name</th>
                                                    <th className="p-3">Last Name</th>
                                                    <th className="p-3">Company</th>
                                                    <th className="p-3">Email</th>
                                                    <th className="p-3">Phone</th>
                                                    <th className="p-3">State</th>
                                                    <th className="p-3">Revenue</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 text-slate-800">
                                                {activeDetailLead.records.map((rec, index) => (
                                                    <tr key={rec.id || index} className="hover:bg-slate-50">
                                                        <td className="p-3 text-slate-400 font-mono">{index + 1}</td>
                                                        <td className="p-3 font-semibold">{rec.first_name || '-'}</td>
                                                        <td className="p-3 font-semibold">{rec.last_name || '-'}</td>
                                                        <td className="p-3">{rec.company || '-'}</td>
                                                        <td className="p-3 text-blue-600">{rec.email || '-'}</td>
                                                        <td className="p-3 font-mono">{rec.phone_number || '-'}</td>
                                                        <td className="p-3">{rec.state || '-'}</td>
                                                        <td className="p-3 text-emerald-600 font-semibold">{rec.revenue || '-'}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setActiveDetailLead(null)}
                                    className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-bold text-sm"
                                >
                                    Close Preview
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddLeads;
