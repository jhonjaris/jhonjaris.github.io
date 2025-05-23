const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../js/config.js');
let configContent = fs.readFileSync(configPath, 'utf8');

// Reemplazar los placeholders con los valores de los secrets
configContent = configContent.replace('process.env.PUBLIC_KEY', process.env.PUBLIC_KEY);
configContent = configContent.replace('process.env.EMAIL_SERVICE_ID', process.env.EMAIL_SERVICE_ID);
configContent = configContent.replace('process.env.EMAIL_TEMPLATE_ID', process.env.EMAIL_TEMPLATE_ID);

fs.writeFileSync(configPath, configContent);