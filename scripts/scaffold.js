const fs = require('fs');
const path = require('path');

function scaffold() {
  const directories = [
    'controllers',
    'middlewares',
    'models',
    'routes',
    'utils',
  ];

  directories.forEach(dir => {
    const dirPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Directory created: ${dirPath}`);
    }
  });

  // You can also copy files from your package to the user's project here
}

module.exports = scaffold;
