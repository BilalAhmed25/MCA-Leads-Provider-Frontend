import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNoIndex } from '../hooks/useNoIndex';
import { API_BASE_URL } from '../config';
import { FiSearch, FiUser, FiCheckCircle, FiSlash, FiTrash2, FiUserCheck, FiShield } from 'react-icons/fi';
import './ManageUsers.css';

const ManageUsers = () => {
    useNoIndex();
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const isAdmin = user && user.email === 'zunairkhan742@gmail.com';

    useEffect(() => {
        if (isAdmin) {
            fetchUsers();
        } else {
            setLoading(false);
        }
    }, [isAdmin]);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-users`);
            const data = await res.json();
            if (data.success && data.users) {
                setUsers(data.users);
            } else {
                setError('Failed to load users');
            }
        } catch (err) {
            console.error('Error fetching users:', err);
            setError('Error connecting to server');
        } finally {
            setLoading(false);
        }
    };

    const handleToggleRole = async (userId, currentRole) => {
        const newRole = currentRole === 'admin' ? 'user' : 'admin';
        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-users/${userId}/role`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ role: newRole })
            });
            const data = await res.json();
            if (data.success) {
                setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u));
            }
        } catch (err) {
            console.error('Error updating role:', err);
        }
    };

    const handleToggleStatus = async (userId, currentStatus) => {
        const newStatus = currentStatus === 'active' ? 'suspended' : 'active';
        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-users/${userId}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            const data = await res.json();
            if (data.success) {
                setUsers(prev => prev.map(u => u.id === userId ? { ...u, status: newStatus } : u));
            }
        } catch (err) {
            console.error('Error updating status:', err);
        }
    };

    const handleDeleteUser = async (userId) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-users/${userId}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            if (data.success) {
                setUsers(prev => prev.filter(u => u.id !== userId));
            }
        } catch (err) {
            console.error('Error deleting user:', err);
        }
    };

    const getUserInitial = (name) => {
        if (!name) return 'U';
        return name.trim().charAt(0).toUpperCase();
    };

    const filteredUsers = users.filter(u =>
        u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isAdmin) {
        return (
            <main className="manage-users-page py-24 min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="bg-white p-10 rounded-3xl border border-slate-200 text-center max-w-md shadow-xl">
                    <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                        <FiShield />
                    </div>
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Access Denied</h2>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        Only Admin Zunair Khan has authorization to access the Manage Users dashboard.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="manage-users-page py-20 min-h-screen bg-slate-50">
            <div className="container-custom max-w-7xl mx-auto">
                {/* Search Bar Container */}
                <div className="search-bar-wrapper mb-8">
                    <div className="search-input-box">
                        <FiSearch className="search-icon text-slate-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Search users by name or email..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>

                {/* Users Table Card */}
                <div className="table-card-wrapper shadow-2xl">
                    <div className="table-overflow-container">
                        <table className="users-table">
                            <thead>
                                <tr>
                                    <th className="th-user">USER</th>
                                    <th className="th-role">ROLE</th>
                                    <th className="th-status">STATUS</th>
                                    <th className="th-actions">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-12 text-slate-500 font-medium">
                                            Loading users list...
                                        </td>
                                    </tr>
                                ) : filteredUsers.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-12 text-slate-500 font-medium">
                                            No users found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredUsers.map(u => {
                                        const roleLower = (u.role || 'user').toLowerCase();
                                        const statusLower = (u.status || 'active').toLowerCase();

                                        return (
                                            <tr key={u.id} className="user-row">
                                                {/* USER column */}
                                                <td className="td-user">
                                                    <div className="user-info-flex">
                                                        <div className="user-avatar-circle">
                                                            {getUserInitial(u.name)}
                                                        </div>
                                                        <div className="user-text-details">
                                                            <div className="user-name-text">{u.name}</div>
                                                            <div className="user-email-text">{u.email}</div>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* ROLE column */}
                                                <td className="td-role">
                                                    <span className={`role-badge ${roleLower === 'admin' ? 'badge-admin' : 'badge-user'}`}>
                                                        <FiUser className="badge-icon" />
                                                        {roleLower.toUpperCase()}
                                                    </span>
                                                </td>

                                                {/* STATUS column */}
                                                <td className="td-status">
                                                    <span className={`status-badge ${statusLower === 'active' ? 'badge-active' : 'badge-suspended'}`}>
                                                        <FiCheckCircle className="badge-icon" />
                                                        {statusLower.toUpperCase()}
                                                    </span>
                                                </td>

                                                {/* ACTIONS column */}
                                                <td className="td-actions">
                                                    <div className="action-buttons-group">
                                                        <button
                                                            onClick={() => handleToggleRole(u.id, roleLower)}
                                                            className="action-btn role-toggle-btn"
                                                            title={roleLower === 'admin' ? 'Demote to User' : 'Promote to Admin'}
                                                        >
                                                            <FiUserCheck />
                                                        </button>
                                                        <button
                                                            onClick={() => handleToggleStatus(u.id, statusLower)}
                                                            className="action-btn status-toggle-btn"
                                                            title={statusLower === 'active' ? 'Suspend User' : 'Activate User'}
                                                        >
                                                            <FiSlash />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteUser(u.id)}
                                                            className="action-btn delete-btn"
                                                            title="Delete User"
                                                        >
                                                            <FiTrash2 />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ManageUsers;
