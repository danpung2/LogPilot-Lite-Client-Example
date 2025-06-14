require('dotenv').config();
const { execSync } = require('child_process');

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error('❌ GITHUB_TOKEN not found in .env file');
  process.exit(1);
}

const repo = 'danpung2/LogPilot-Lite-Client';
const url = `https://${token}@github.com/${repo}.git`;

console.log(`📦 Installing ${repo} url: ${url}...`);

try {
  execSync(`npm install git+${url}`, { stdio: 'inherit' });
  console.log('✅ Client installed successfully');
} catch (err) {
  console.error('❌ Installation failed:', err.message);
}
