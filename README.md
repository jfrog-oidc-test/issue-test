# Repo Request Form

A dynamic form for creating repository request issues on GitHub. Searchable, cascading dropdowns; live repo-name preview; no backend, no tokens, no authentication.

## Files

```
repo-request-form-only/
├── index.html    # The form (UI + logic) — you rarely touch this
└── config.js     # ✏️ ALL editable settings live here
```

**To change anything — repo target, dropdown options, product mappings — edit `config.js` only.** The form reads everything from it at load time.

## How it works

```
User fills form → Clicks Submit → New tab opens a pre-filled GitHub issue
                                   → User clicks "Submit new issue" to confirm
```

## What you can edit in config.js

| Setting | What it controls |
|---|---|
| `ISSUE_REPO` | The `owner/repo` where issues are created |
| `ISSUE_LABELS` | Labels applied to each issue |
| `PREFIXES` | Repository prefix options (svc, api, ...) |
| `PRODUCTS` | Product dropdown options |
| `TRIBES` | Tribe dropdown options |
| `VISIBILITY` | Visibility options |
| `DESCRIPTION_MAX` | Max characters for the description |
| `PRODUCT_MAP` | Which tribes & prefixes each product allows (cascading) |

### Example: adding a new product

In `config.js`:

```js
PRODUCTS: [
  'Payments',
  'My New Product',   // ← add here
  ...
],

PRODUCT_MAP: {
  'My New Product': {                       // ← and map it here
    tribes: ['Core Banking Tribe'],
    prefixes: ['svc', 'api']
  },
  ...
}
```

Use `'all'` to allow everything: `tribes: 'all'` or `prefixes: 'all'`.

## Deployment (GitHub Pages)

1. Create a repo (e.g. `your-org/repo-portal`), make it **public**.
2. Upload **both** `index.html` and `config.js` to the repo root.
3. Settings → Pages → Source = `main` branch, `/ (root)` → Save.
4. Edit `config.js` → set `ISSUE_REPO` to your real `owner/repo`.
5. Create the `repo-creation` label in that repo (Issues → Labels → New label).
6. Visit `https://your-org.github.io/repo-portal/`.

⚠️ **Both files must be in the same folder.** If `config.js` is missing, the form shows a clear error message.

## Features

- 🔍 Searchable dropdowns (type to filter)
- 🔗 Cascading: product filters tribe + prefix
- 👀 Live `prefix-name` preview as you type
- 🔢 Description character counter
- ✅ Submit disabled until all fields valid
- 📋 Copy / download / open-as-issue actions

## Future upgrade path

When ready for automation, add a GitHub Actions workflow that fires on issues labeled `repo-creation` and creates the repo via API. The issue body is already structured for parsing. The form itself won't need changes.