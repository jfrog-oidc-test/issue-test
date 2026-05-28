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
  ISSUE_REPO: 'your-org/repo-requests',   // owner/repo
  ISSUE_LABELS: ['repo-creation'],         // labels to apply (must exist in that repo)

  // --- Repository prefixes ---
  // `value` becomes the repo prefix (svc-myapp). `label` is what users see.
  PREFIXES: [
    { value: 'svc',   label: 'svc · microservice' },
    { value: 'lib',   label: 'lib · shared library' },
    { value: 'app',   label: 'app · application' },
    { value: 'api',   label: 'api · API project' },
    { value: 'infra', label: 'infra · infrastructure' },
    { value: 'data',  label: 'data · data pipeline' },
    { value: 'docs',  label: 'docs · documentation' },
    { value: 'tool',  label: 'tool · internal tooling' }
  ],

  // --- Products ---
  PRODUCTS: [
    'Payments',
    'Lending',
    'Wealth Management',
    'Insurance',
    'Retail Banking',
    'Corporate Banking',
    'Risk & Compliance',
    'Data Platform',
    'Customer Experience'
  ],

  // --- Tribes ---
  TRIBES: [
    'Core Banking Tribe',
    'Digital Channels Tribe',
    'Payments Tribe',
    'Data & Analytics Tribe',
    'Infrastructure Tribe',
    'Security Tribe',
    'Platform Engineering Tribe',
    'Customer Onboarding Tribe'
  ],

  // --- Repository visibility ---
  VISIBILITY: [
    { value: 'private',  label: 'Private' },
    { value: 'internal', label: 'Internal' },
    { value: 'public',   label: 'Public' }
  ],

  // --- Description max length ---
  DESCRIPTION_MAX: 800,

  // --- Label shown for the "enter manually" BAN option ---
  BAN_OTHER_LABEL: 'Other (enter manually)',

  // --- Product → allowed tribes, prefixes & BAN IDs ---
  // Use EXACT tribe names from TRIBES above, and prefix `value`s from PREFIXES.
  // `bans` is the list of BAN IDs valid for that product. Users can also pick
  // "Other (enter manually)" to type a BAN ID not in the list.
  // Set tribes or prefixes to 'all' to allow everything for that product.
  PRODUCT_MAP: {
    'Payments': {
      tribes: ['Payments Tribe', 'Core Banking Tribe'],
      prefixes: ['svc', 'api', 'lib'],
      bans: ['BAN-1001', 'BAN-1002', 'BAN-1003']
    },
    'Lending': {
      tribes: ['Core Banking Tribe', 'Customer Onboarding Tribe'],
      prefixes: ['svc', 'app', 'api'],
      bans: ['BAN-2001', 'BAN-2002']
    },
    'Wealth Management': {
      tribes: ['Core Banking Tribe', 'Digital Channels Tribe'],
      prefixes: ['svc', 'app'],
      bans: ['BAN-3001', 'BAN-3002', 'BAN-3003']
    },
    'Insurance': {
      tribes: ['Customer Onboarding Tribe', 'Digital Channels Tribe'],
      prefixes: ['svc', 'app', 'docs'],
      bans: ['BAN-4001', 'BAN-4002']
    },
    'Retail Banking': {
      tribes: ['Digital Channels Tribe', 'Core Banking Tribe'],
      prefixes: ['app', 'svc', 'api'],
      bans: ['BAN-5001', 'BAN-5002', 'BAN-5003']
    },
    'Corporate Banking': {
      tribes: ['Core Banking Tribe', 'Security Tribe'],
      prefixes: ['svc', 'api', 'infra'],
      bans: ['BAN-6001', 'BAN-6002']
    },
    'Risk & Compliance': {
      tribes: ['Security Tribe', 'Data & Analytics Tribe'],
      prefixes: ['svc', 'data', 'tool'],
      bans: ['BAN-7001', 'BAN-7002']
    },
    'Data Platform': {
      tribes: ['Data & Analytics Tribe', 'Infrastructure Tribe'],
      prefixes: ['data', 'infra', 'svc', 'tool'],
      bans: ['BAN-8001', 'BAN-8002', 'BAN-8003']
    },
    'Customer Experience': {
      tribes: ['Digital Channels Tribe', 'Customer Onboarding Tribe'],
      prefixes: ['app', 'svc', 'docs'],
      bans: ['BAN-9001', 'BAN-9002']
    }
  }
};