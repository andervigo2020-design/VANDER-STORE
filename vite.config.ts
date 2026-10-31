import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

function copyDirRecursive(srcDir: string, destDir: string) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, {recursive: true});
  for (const entry of fs.readdirSync(srcDir, {withFileTypes: true})) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'copy-static-native-assets',
        closeBundle() {
          const root = path.resolve(__dirname, '.');
          const dist = path.resolve(__dirname, 'dist');
          copyDirRecursive(path.join(root, 'js'), path.join(dist, 'js'));
          copyDirRecursive(path.join(root, 'imagenes'), path.join(dist, 'imagenes'));
        },
      },
    ],
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
