<?php
/**
 * Dynamic XML Sitemap Generator for MCA Leads Provider
 * Endpoint: https://mcaleadsprovider.com/sitemap.xml
 */

header('Content-Type: application/xml; charset=utf-8');
header('Cache-Control: public, max-age=1800'); // 30 mins cache

$baseUrl = 'https://mcaleadsprovider.com';
$today = date('Y-m-d');

// Database configuration (Hostinger / cPanel / Local)
$dbHost = getenv('DB_HOST') ?: 'localhost';
$dbUser = getenv('DB_USER') ?: 'u475043867_mca_user';
$dbPass = getenv('DB_PASS') ?: 'Mca@leads2026';
$dbName = getenv('DB_NAME') ?: 'u475043867_mca_leads';

// Static / Core Pages
$staticPages = [
    ['loc' => $baseUrl . '/', 'priority' => '1.0', 'changefreq' => 'daily', 'lastmod' => $today],
    ['loc' => $baseUrl . '/about/', 'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => '2026-06-24'],
    ['loc' => $baseUrl . '/services/', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => '2026-07-11'],
    ['loc' => $baseUrl . '/mca-live-transfer-leads/', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => '2026-07-11'],
    ['loc' => $baseUrl . '/mca-callback-leads/', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => '2026-07-11'],
    ['loc' => $baseUrl . '/aged-mca-leads/', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => '2026-07-11'],
    ['loc' => $baseUrl . '/business-loan-leads/', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => '2026-07-11'],
    ['loc' => $baseUrl . '/digital-marketing-leads/', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => '2026-07-11'],
    ['loc' => $baseUrl . '/b2b-email-lists/', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => '2026-07-11'],
    ['loc' => $baseUrl . '/pricing/', 'priority' => '0.8', 'changefreq' => 'weekly', 'lastmod' => $today],
    ['loc' => $baseUrl . '/blog/', 'priority' => '0.8', 'changefreq' => 'daily', 'lastmod' => $today],
    ['loc' => $baseUrl . '/contact-us/', 'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => '2026-07-11']
];

// Fetch Blogs from Database or API
$blogs = [];

// 1. Try Direct MySQL Database Connection
try {
    $conn = @new mysqli($dbHost, $dbUser, $dbPass, $dbName);
    if (!$conn->connect_error) {
        $conn->set_charset('utf8mb4');
        $query = "SELECT slug, published_date, modified_date, IFNULL(modified_date, published_date) AS last_modified FROM blogs ORDER BY id DESC";
        $result = $conn->query($query);
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $blogs[] = $row;
            }
        }
        $conn->close();
    }
} catch (Exception $e) {
    // Fail silently and fallback to API
}

// 2. Fallback to API if DB was unreachable directly
if (empty($blogs)) {
    $apiUrls = [
        'https://api.expertdesignhub.com/noAuth/mca-blogs',
        'http://localhost:3000/noAuth/mca-blogs'
    ];

    foreach ($apiUrls as $apiUrl) {
        $ch = curl_init($apiUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 3);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode === 200 && $response) {
            $json = json_decode($response, true);
            if (isset($json['blogs']) && is_array($json['blogs'])) {
                $blogs = $json['blogs'];
                break;
            }
        }
    }
}

// Build XML Sitemap Output
$xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
$xml .= "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";

// Append Static Pages
foreach ($staticPages as $page) {
    $xml .= "  <url>\n";
    $xml .= "    <loc>" . htmlspecialchars($page['loc']) . "</loc>\n";
    $xml .= "    <lastmod>" . htmlspecialchars($page['lastmod']) . "</lastmod>\n";
    $xml .= "    <changefreq>" . htmlspecialchars($page['changefreq']) . "</changefreq>\n";
    $xml .= "    <priority>" . htmlspecialchars($page['priority']) . "</priority>\n";
    $xml .= "  </url>\n";
}

// Append Dynamic Blogs
foreach ($blogs as $blog) {
    $slug = trim($blog['slug'] ?? '', "/");
    if (empty($slug) || $slug === 'blog' || $slug === 'blogs') {
        continue;
    }

    $rawDate = $blog['last_modified'] ?? $blog['modified_date'] ?? $blog['published_date'] ?? $today;
    $datePart = substr($rawDate, 0, 10);
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $datePart)) {
        $datePart = $today;
    }

    $xml .= "  <url>\n";
    $xml .= "    <loc>" . htmlspecialchars($baseUrl . '/' . $slug . '/') . "</loc>\n";
    $xml .= "    <lastmod>" . htmlspecialchars($datePart) . "</lastmod>\n";
    $xml .= "    <changefreq>weekly</changefreq>\n";
    $xml .= "    <priority>0.8</priority>\n";
    $xml .= "  </url>\n";
}

$xml .= "</urlset>";

// Output XML
echo $xml;
?>