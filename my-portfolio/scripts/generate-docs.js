import fs from 'fs/promises';
import path from 'path';

const preserve = ['CNAME'];

async function removeContents(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (preserve.includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    await fs.rm(fullPath, { recursive: true, force: true });
  }
}

async function copyDir(src, dest) {
  const entries = await fs.readdir(src, { withFileTypes: true });
  await fs.mkdir(dest, { recursive: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  const outputPath = path.join(process.cwd(), '.output', 'public');
  const docsPath = path.join(process.cwd(), '..', 'docs');

  await fs.access(outputPath);
  await fs.mkdir(docsPath, { recursive: true });
  await removeContents(docsPath);
  await copyDir(outputPath, docsPath);
  console.log(`Copied generated static site to ${docsPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
