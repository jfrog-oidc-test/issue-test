# Repo Request Form

A single-file, dynamic form for creating repository request issues on GitHub. No backend, no API tokens, no authentication — just a clean form that opens a pre-filled GitHub issue page when submitted.

## How it works

```
User fills form  →  Clicks Submit  →  New tab opens with pre-filled GitHub issue
                                       ↓
                                 User clicks "Submit new issue" on GitHub
                                       ↓
                                  Issue is created in your repo
```

This uses GitHub's native URL-prefilled issues feature. The form builds a URL with title, body, and labels, then opens it.

**Why this approach is great:**
- ✅ Zero authentication — uses the user's existing GitHub session
- ✅ No tokens, no API calls, no backend
- ✅ Audit trail per user (GitHub shows the actual requester)
- ✅ User reviews the issue before submitting it (one extra click = safety)

## Setup (5 minutes)

### Step 1 — Create the issue-tracker repo

```bash
gh repo create your-org/repo-requests --private
gh label create repo-creation --color 0E8A16 --repo your-org/repo-requests
```

### Step 2 — Configure the form

Open `index.html`, find the CONFIG block near the top of the `<script>`:

```js
const ISSUE_REPO = 'your-org/repo-requests';   // ← change this
const ISSUE_LABELS = ['repo-creation'];
```

### Step 3 — Host it

**Option A: GitHub Pages**
```bash
gh repo create your-org/repo-portal --public
cd repo-portal
# copy index.html here
git init && git add . && git commit -m "form"
git push -u origin main
```
Then **Settings → Pages → Source = main / (root)**.

**Option B: Open the file locally** — works fully offline. Share via email/Slack.

## User flow

1. Open the portal
2. Fill the form (live preview shows `prefix-name` as they type)
3. Click **Submit & create issue on GitHub**
4. A new tab opens on GitHub with the issue pre-filled
5. User clicks **Submit new issue** on GitHub to confirm
6. Issue appears in `your-org/repo-requests` with the `repo-creation` label

## Customizing dropdowns

All the dropdown options are in `index.html`:
- Repository prefix → `<select id="prefix">`
- Product name → `<select id="product">`
- Tribe name → `<select id="tribe">`
- Visibility → `<select id="visibility">`

Edit the `<option>` lists and you're done.

## Future upgrade path

Once you're ready for automation, just add a GitHub Actions workflow that fires on `issues: opened` with the `repo-creation` label and calls the GitHub API to create the actual repo. The form doesn't need to change — the issue body is already in a structured format.