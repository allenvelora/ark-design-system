#!/usr/bin/env node

/**
 * Figma Variables to Style Dictionary Converter
 * 
 * This script converts Figma variable JSON exports into Style Dictionary format.
 * 
 * Usage:
 *   node scripts/import-figma-variables.js <path-to-figma-exports>
 * 
 * Example:
 *   node scripts/import-figma-variables.js ~/Downloads
 * 
 * The script expects these files in the source directory:
 *   - Fonts.json
 *   - Core Palette.json
 *   - Base Colours.json
 *   - Brand.json
 *   - Theme.json
 *   - Primitives.json
 */

import fs from 'fs';
import path from 'path';

// Default source directory
const sourceDir = process.argv[2] || '/Users/allen/Downloads';
const outputDir = path.join(process.cwd(), 'tokens/src');

// Helper to convert Figma RGBA (0-1) to hex
function rgbaToHex(r, g, b, a = 1) {
  const toHex = (n) => Math.round(n * 255).toString(16).padStart(2, '0');
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return a < 1 ? `${hex}${toHex(a)}` : hex;
}

// Helper to convert Figma variable name to token path
function nameToPath(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\//g, '.');
}

// Helper to create nested object from dot notation path
function setNestedValue(obj, path, value) {
  const parts = path.split('.');
  let current = obj;
  
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!current[part]) {
      current[part] = {};
    }
    current = current[part];
  }
  
  current[parts[parts.length - 1]] = value;
}

// Parse a Figma JSON file
function parseFigmaFile(filename) {
  const filepath = path.join(sourceDir, filename);
  if (!fs.existsSync(filepath)) {
    console.warn(`⚠️  File not found: ${filepath}`);
    return null;
  }
  
  const content = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(content);
}

// Process color variables
function processColorVariable(variable, modeKey) {
  const valuesByMode = variable.valuesByMode[modeKey];
  const resolvedByMode = variable.resolvedValuesByMode[modeKey];
  
  if (!resolvedByMode) return null;
  
  const { resolvedValue } = resolvedByMode;
  
  if (typeof resolvedValue === 'object' && 'r' in resolvedValue) {
    return {
      $value: rgbaToHex(resolvedValue.r, resolvedValue.g, resolvedValue.b, resolvedValue.a || 1),
      $type: 'color',
      $description: variable.description || undefined,
    };
  }
  
  return null;
}

// Process number variables (spacing, radius, etc.)
function processNumberVariable(variable, modeKey) {
  const resolvedByMode = variable.resolvedValuesByMode[modeKey];
  
  if (!resolvedByMode) return null;
  
  const { resolvedValue } = resolvedByMode;
  
  if (typeof resolvedValue === 'number') {
    return {
      $value: resolvedValue,
      $type: variable.scopes?.includes('CORNER_RADIUS') ? 'dimension' : 'number',
      $description: variable.description || undefined,
    };
  }
  
  return null;
}

// Process string variables (fonts, etc.)
function processStringVariable(variable, modeKey) {
  const resolvedByMode = variable.resolvedValuesByMode[modeKey];
  
  if (!resolvedByMode) return null;
  
  const { resolvedValue } = resolvedByMode;
  
  if (typeof resolvedValue === 'string') {
    return {
      $value: resolvedValue,
      $type: 'fontFamily',
      $description: variable.description || undefined,
    };
  }
  
  return null;
}

// Main processing function
function processCollection(data, modeName = null) {
  if (!data) return {};
  
  const tokens = {};
  const modeEntries = Object.entries(data.modes);
  
  // Find the mode key
  let modeKey;
  if (modeName) {
    const modeEntry = modeEntries.find(([key, name]) => name === modeName);
    modeKey = modeEntry ? modeEntry[0] : modeEntries[0][0];
  } else {
    modeKey = modeEntries[0][0];
  }
  
  for (const variable of data.variables) {
    const tokenPath = nameToPath(variable.name);
    let tokenValue = null;
    
    switch (variable.type) {
      case 'COLOR':
        tokenValue = processColorVariable(variable, modeKey);
        break;
      case 'FLOAT':
        tokenValue = processNumberVariable(variable, modeKey);
        break;
      case 'STRING':
        tokenValue = processStringVariable(variable, modeKey);
        break;
    }
    
    if (tokenValue) {
      setNestedValue(tokens, tokenPath, tokenValue);
    }
  }
  
  return tokens;
}

// Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Write tokens to file
function writeTokens(filename, tokens) {
  const filepath = path.join(outputDir, filename);
  ensureDir(path.dirname(filepath));
  fs.writeFileSync(filepath, JSON.stringify(tokens, null, 2));
  console.log(`✅ Written: ${filepath}`);
}

// Main execution
async function main() {
  console.log('🎨 Figma Variables to Style Dictionary Converter');
  console.log('================================================');
  console.log(`Source: ${sourceDir}`);
  console.log(`Output: ${outputDir}`);
  console.log('');

  // 1. Process Primitives (base values)
  console.log('📦 Processing Primitives...');
  const primitives = parseFigmaFile('Primitives.json');
  if (primitives) {
    const primitiveTokens = processCollection(primitives);
    writeTokens('primitive/colors.json', { primitive: { color: extractColorTokens(primitiveTokens) } });
    writeTokens('primitive/spacing.json', { primitive: { spacing: primitiveTokens.spacing, 'border-radius': primitiveTokens['borderradius'] || primitiveTokens.borderradius } });
    writeTokens('primitive/typography.json', { primitive: { 
      typography: {
        'font-family': primitiveTokens['fontfamily'],
        'font-size': primitiveTokens['fontsize'],
        'font-weight': primitiveTokens['fontweight'],
        'line-height': primitiveTokens['lineheight'],
      }
    }});
  }

  // 2. Process Base Colours
  console.log('📦 Processing Base Colours...');
  const baseColours = parseFigmaFile('Base Colours.json');
  if (baseColours) {
    const baseTokens = processCollection(baseColours);
    writeTokens('primitive/base-colors.json', { primitive: { color: baseTokens } });
  }

  // 3. Process Fonts
  console.log('📦 Processing Fonts...');
  const fonts = parseFigmaFile('Fonts.json');
  if (fonts) {
    const fontTokens = processCollection(fonts);
    writeTokens('primitive/fonts.json', { primitive: { font: fontTokens } });
  }

  // 4. Process Theme (Light mode)
  console.log('📦 Processing Theme (Light)...');
  const theme = parseFigmaFile('Theme.json');
  if (theme) {
    const lightTokens = processCollection(theme, 'Light');
    writeTokens('semantic/theme-light.json', { semantic: lightTokens });
    
    // Also process Dark mode
    console.log('📦 Processing Theme (Dark)...');
    const darkTokens = processCollection(theme, 'Dark');
    writeTokens('semantic/theme-dark.json', { 'semantic-dark': darkTokens });
  }

  // 5. Process Brand (for each product)
  console.log('📦 Processing Brand tokens...');
  const brand = parseFigmaFile('Brand.json');
  if (brand) {
    for (const [modeKey, modeName] of Object.entries(brand.modes)) {
      console.log(`   Processing brand: ${modeName}`);
      const brandTokens = processCollection(brand, modeName);
      writeTokens(`brand/${modeName.toLowerCase()}.json`, { brand: { [modeName.toLowerCase()]: brandTokens } });
    }
  }

  // 6. Process Core Palette (for each product)
  console.log('📦 Processing Core Palette...');
  const corePalette = parseFigmaFile('Core Palette.json');
  if (corePalette) {
    for (const [modeKey, modeName] of Object.entries(corePalette.modes)) {
      console.log(`   Processing palette: ${modeName}`);
      const paletteTokens = processCollection(corePalette, modeName);
      writeTokens(`brand/${modeName.toLowerCase()}-palette.json`, { brand: { [modeName.toLowerCase()]: { palette: paletteTokens } } });
    }
  }

  console.log('');
  console.log('✨ Import complete!');
  console.log('');
  console.log('Next steps:');
  console.log('  1. Review the generated token files in tokens/src/');
  console.log('  2. Run: npm run tokens:build');
  console.log('  3. Check the build output in tokens/build/');
}

// Helper to extract only color tokens from a mixed object
function extractColorTokens(obj) {
  const colors = {};
  
  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value === 'object') {
      if (value.$type === 'color') {
        colors[key] = value;
      } else if (!value.$type) {
        const nested = extractColorTokens(value);
        if (Object.keys(nested).length > 0) {
          colors[key] = nested;
        }
      }
    }
  }
  
  return colors;
}

main().catch(console.error);
