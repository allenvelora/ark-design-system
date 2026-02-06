/**
 * Copy tokens CSS to public folder
 * Run this before starting the dashboard
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sourcePath = path.join(__dirname, '..', '..', 'tokens', 'build', 'css', 'variables.css');
const destPath = path.join(__dirname, '..', 'public', 'tokens.css');

try {
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log('✓ Copied tokens.css to public folder');
  } else {
    // Create a placeholder with fallback values
    const fallbackCSS = `/* Tokens not built yet - run: cd ../tokens && npm run build */
:root {
  --color-surface-primary: #ffffff;
  --color-surface-secondary: #fafafa;
  --color-surface-tertiary: #f4f4f5;
  --color-text-primary: #18181b;
  --color-text-secondary: #52525b;
  --color-text-muted: #a1a1aa;
  --color-text-link: #2563eb;
  --color-border-default: #e4e4e7;
  --color-border-strong: #d4d4d8;
  --color-border-focus: #3b82f6;
  --color-action-primary-default: #2563eb;
  --color-action-primary-hover: #1d4ed8;
  --color-feedback-success-bg: #f0fdf4;
  --color-feedback-success-border: #bbf7d0;
  --color-feedback-success-text: #15803d;
  --color-feedback-success-icon: #22c55e;
  --color-feedback-warning-bg: #fffbeb;
  --color-feedback-warning-border: #fde68a;
  --color-feedback-warning-text: #b45309;
  --color-feedback-warning-icon: #f59e0b;
  --color-feedback-error-bg: #fef2f2;
  --color-feedback-error-border: #fecaca;
  --color-feedback-error-text: #b91c1c;
  --color-feedback-error-icon: #ef4444;
  --color-feedback-info-bg: #eff6ff;
  --color-feedback-info-border: #bfdbfe;
  --color-feedback-info-text: #1d4ed8;
  --color-feedback-info-icon: #3b82f6;
}`;
    fs.writeFileSync(destPath, fallbackCSS);
    console.log('⚠ Tokens not built - created fallback tokens.css');
    console.log('  Run: cd ../tokens && npm run build');
  }
} catch (error) {
  console.error('Error copying tokens:', error);
  process.exit(1);
}
