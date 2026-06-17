// ============================================================
// CONFIG — Edit everything here. No need to touch index.html.
// ============================================================
//
// This file controls:
//   1. Where issues are created (ISSUE_REPO, ISSUE_LABELS)
//   2. All dropdown options (PREFIXES, PRODUCTS, TRIBES, VISIBILITY)
//   3. Which tribes/prefixes each product allows (PRODUCT_MAP)
//
// After editing, just commit this file. The form picks up changes
// automatically — no code changes needed.
// ============================================================

window.APP_CONFIG = {

  // --- Where the GitHub issue gets created ---
  ISSUE_REPO: 'jfrog-oidc-test/issue-test',   // owner/repo
  ISSUE_LABELS: ['repo-creation'],         // labels to apply (must exist in that repo)
  MANAGE_LABELS: ['repo-manage'],          // labels for repo update/cross-team access requests

  // --- Repository prefixes ---
  // `value` becomes the repo prefix (svc-myapp). `label` is what users see.
  PREFIXES: [
    { value: 'gg',   label: 'gg · Descreat Projects' },
    { value: 'erd',   label: 'erd · Descreat Projects' },
    { value: 'lmdx',   label: 'lmdx · Descreat Projects' },
    { value: 'swcd',   label: 'swcd · SW Digital Platform' },
    { value: 'api', label: 'api · API Ecosystem' },
    { value: 'esd',  label: 'esd · Embeded pipeline' },
    { value: 'planner',  label: 'planner · 247-planner' },
    { value: 'clinica',  label: 'clinica · 247-clinica-survey' }
  ],

  // --- Products ---
  PRODUCTS: [
    'Descreat-Projects',
    'SW-Digital-Platform',
    'API-Ecosystem',
    'Embeded-pipeline',
    '247-planner',
    '247-clinica-survey'
  ],

  // --- Tribes ---
  TRIBES: [
    'CEP',
    'DevOps',
    'BOI',
    'CCKCE',
    'PRM'
  ],

  // --- Repository visibility ---
  VISIBILITY: [
    { value: 'private',  label: 'Private' },
    { value: 'internal', label: 'Internal' }  ],

  // --- Description max length ---
  DESCRIPTION_MAX: 800,

  // --- Product → allowed tribes & prefixes ---
  // Use EXACT tribe names from TRIBES above, and prefix `value`s from PREFIXES.
  // Set tribes or prefixes to 'all' to allow everything for that product.
  PRODUCT_MAP: {
    'Descreat-Projects': {
      tribes: ['CEP', 'CCKCE'],
      prefixes: ['gg', 'erd', 'lmdx']
    },
    'SW-Digital-Platform': {
      tribes: ['DevOps'],
      prefixes: ['swcd']
    },
    'API-Ecosystem': {
      tribes: ['BOI'],
      prefixes: ['api']
    },
    'Embeded-pipeline': {
      tribes: ['DevOps'],
      prefixes: ['esd']
    },
    '247-planner': {
      tribes: ['PRM'],
      prefixes: ['planner']
    },
    '247-clinica-survey': {
      tribes: ['PRM'],
      prefixes: ['clinica']
    }
  }
};