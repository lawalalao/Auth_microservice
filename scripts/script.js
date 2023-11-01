
const fs = require('fs');
const path = require('path');

const configFilePath = path.join(process.cwd(), 'authConfig.js');

if (!fs.existsSync(configFilePath)) {
  const configTemplate = `module.exports = {
  // Configuration par défaut pour le microservice
  secret: 'your-secret-key'
};`;

  fs.writeFileSync(configFilePath, configTemplate);
  console.log('Microservice Auth configuration file created.');
} else {
  console.log('Microservice Auth configuration file already exists.');
}
