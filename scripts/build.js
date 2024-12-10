const fs = require('fs');
const path = require('path');

function copyCssFiles() {
    const srcDir = path.join(__dirname, '../src');
    const distDir = path.join(__dirname, '../dist');

    // Directories to exclude
    const excludeDirs = ['__tests__', '__mocks__', 'tests', 'test'];

    // Create dist directory if it doesn't exist
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
    }

    function copyFiles(dir) {
        const files = fs.readdirSync(dir);

        files.forEach(file => {
            const srcPath = path.join(dir, file);
            const relativePath = path.relative(srcDir, srcPath);
            const distPath = path.join(distDir, relativePath);

            // Skip if the current path includes any of the excluded directories
            if (excludeDirs.some(excludeDir => srcPath.includes(excludeDir))) {
                return;
            }

            if (fs.statSync(srcPath).isDirectory()) {
                if (!fs.existsSync(distPath)) {
                    fs.mkdirSync(distPath, { recursive: true });
                }
                copyFiles(srcPath);
            } else if (path.extname(file) === '.css') {
                fs.copyFileSync(srcPath, distPath);
                console.log(`Copied: ${relativePath}`);
            }
        });
    }

    copyFiles(srcDir);
}

// Run TypeScript compilation first
require('child_process').execSync('tsc', { stdio: 'inherit' });

// Then copy CSS files
copyCssFiles();
