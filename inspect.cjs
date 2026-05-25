const https = require('https');
const fs = require('fs');

https.get('https://mcaleadsprovider.com/how-to-generate-high-converting-mca-leads-in-2025/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        fs.writeFileSync('temp.html', data);
        console.log("Done");
    });
});
