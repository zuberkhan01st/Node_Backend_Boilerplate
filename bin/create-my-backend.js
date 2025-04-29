#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

async function createProject() {
  const projectName = process.argv[2];
  
  if (!projectName) {
    console.error('❌ Please provide a project name:');
    console.log('npx node-mvc-starter <project-name>');
    process.exit(1);
  }

  const targetPath = path.join(process.cwd(), projectName);
  const packagePath = path.dirname(__dirname); // Gets the package root directory

  try {
    console.log(`🚀 Creating project: ${projectName}`);
    
    // Ensure target directory exists
    await fs.ensureDir(targetPath);

    // Copy all files except excluded ones
    await fs.copy(packagePath, targetPath, {
      filter: src => {
        const excluded = [
          'node_modules',
          '.git',
          '.env',
          'package-lock.json',
          '.npmignore',
          'bin' // Exclude the bin directory from the project copy
        ];
        const relativePath = path.relative(packagePath, src);
        return !excluded.some(pattern => 
          relativePath.includes(pattern) || 
          path.basename(src) === pattern
        );
      }
    });

    // Create fresh package.json without bin/files entries
    const packageJson = JSON.parse(await fs.readFile(path.join(packagePath, 'package.json')));
    delete packageJson.bin;
    delete packageJson.files;
    await fs.writeJson(path.join(targetPath, 'package.json'), packageJson, { spaces: 2 });

    console.log('✅ Project files copied!');
    console.log('\n👉 Installing dependencies...');

    // Install dependencies
    process.chdir(targetPath);
    execSync('npm install', { stdio: 'inherit' });

    console.log('\n🎉 Project ready! Start developing with:');
    console.log(`cd ${projectName}`);
    console.log('npm run dev\n');
    
  } catch (err) {
    console.error('❌ Error creating project:', err.message);
    // Clean up if something went wrong
    await fs.remove(targetPath).catch(() => {});
    process.exit(1);
  }
}

createProject();