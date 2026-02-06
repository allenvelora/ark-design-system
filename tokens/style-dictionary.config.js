/**
 * Style Dictionary Configuration for Ark Design System
 * 
 * Follows DTCG (Design Tokens Community Group) standards
 * https://tr.designtokens.org/format/
 * 
 * Token layers:
 * - primitive/ - Raw values (colors, spacing, typography, motion)
 * - semantic/ - Intent-based tokens (theme light/dark, spacing patterns)
 * - brand/ - Product-specific brand tokens (Raisely, Aplos, Keela)
 */

export default {
  // Use DTCG format ($value, $type, $description)
  usesDtcg: true,
  
  // Default source excludes dark theme (loaded separately)
  source: [
    'src/primitive/**/*.json',
    'src/semantic/theme-light.json',
    'src/semantic/typography.json',
    'src/semantic/spacing.json',
    'src/brand/**/*.json'
  ],
  
  platforms: {
    // CSS Custom Properties - All tokens
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    },
    
    // CSS - Light theme only
    'css-light': {
      transformGroup: 'css',
      buildPath: 'build/css/',
      source: [
        'src/primitive/**/*.json',
        'src/semantic/theme-light.json',
        'src/semantic/typography.json',
        'src/semantic/spacing.json'
      ],
      files: [
        {
          destination: 'theme-light.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: ':root, [data-theme="light"]'
          }
        }
      ]
    },
    
    // CSS - Dark theme only (inherits primitives from default source, adds dark semantics)
    'css-dark': {
      transformGroup: 'css',
      buildPath: 'build/css/',
      include: [
        'src/primitive/**/*.json'
      ],
      source: [
        'src/semantic/theme-dark.json'
      ],
      files: [
        {
          destination: 'theme-dark.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: '[data-theme="dark"]'
          }
        }
      ]
    },
    
    // Brand-specific CSS files
    'css-raisely': {
      transformGroup: 'css',
      buildPath: 'build/css/brands/',
      source: ['src/brand/raisely*.json'],
      files: [
        {
          destination: 'raisely.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: '[data-brand="raisely"]'
          }
        }
      ]
    },
    
    'css-aplos': {
      transformGroup: 'css',
      buildPath: 'build/css/brands/',
      source: ['src/brand/aplos*.json'],
      files: [
        {
          destination: 'aplos.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: '[data-brand="aplos"]'
          }
        }
      ]
    },
    
    'css-keela': {
      transformGroup: 'css',
      buildPath: 'build/css/brands/',
      source: ['src/brand/keela*.json'],
      files: [
        {
          destination: 'keela.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: '[data-brand="keela"]'
          }
        }
      ]
    },
    
    // JavaScript ES Modules
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      files: [
        {
          destination: 'tokens.mjs',
          format: 'javascript/es6'
        },
        {
          destination: 'tokens.js',
          format: 'javascript/module-flat'
        }
      ]
    },
    
    // TypeScript definitions
    ts: {
      transformGroup: 'js',
      buildPath: 'build/ts/',
      files: [
        {
          destination: 'tokens.d.ts',
          format: 'typescript/es6-declarations'
        }
      ]
    },
    
    // JSON for tooling and documentation
    json: {
      transformGroup: 'js',
      buildPath: 'build/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat'
        },
        {
          destination: 'tokens-nested.json',
          format: 'json/nested'
        }
      ]
    }
  }
};
