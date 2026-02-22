# TsunamiClient — Full Deploy Guide
## GitHub + Antigravity + Netlify

---

## 📁 FILES IN THIS PACKAGE
- `index.html` — Complete website
- `style.css` — All styles (light blue theme)
- `app.js` — Version modal, features, FAQ, particles
- `logo.png` — Tsunami Client logo
- `netlify.toml` — Netlify config (auto-deploy settings)
- `push.sh` — Auto-push script to GitHub (run every time you update)

---

## STEP 1 — ANTIGRAVITY SETUP

### What to say to the Antigravity AI bot:

---

**PASTE THIS PROMPT TO ANTIGRAVITY:**

```
I have a static website (HTML/CSS/JS) that I need to push to GitHub and deploy on Netlify. 

The GitHub repo is: https://github.com/odhasu/Tsunamisite.git

Here are the files:
- index.html (main site)
- style.css (stylesheet)
- app.js (JavaScript)
- logo.png (logo image)
- netlify.toml (Netlify config)

Please:
1. Initialize a git repo in this folder if not already done
2. Set the remote origin to https://github.com/odhasu/Tsunamisite.git
3. Add all files with git add -A
4. Commit with message: "Deploy Tsunami Client website"
5. Push to main branch

Then confirm the push was successful and tell me the repo URL.
```

---

## STEP 2 — PUSH SCRIPT (run every time you update files)

Open terminal in the site folder and run:

```bash
bash push.sh
```

Or with a custom message:
```bash
bash push.sh "Fixed download button"
```

This will automatically:
- Stage all changed files
- Commit with timestamp
- Push to https://github.com/odhasu/Tsunamisite

---

## STEP 3 — NETLIFY AUTO-DEPLOY SETUP (one time only)

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import from Git"**
3. Connect GitHub → select **odhasu/Tsunamisite**
4. Settings:
   - Build command: *(leave empty)*
   - Publish directory: `.`
5. Click **"Deploy site"**

After this, **every time you run `bash push.sh`**, Netlify will auto-deploy your site in ~30 seconds — no manual steps needed.

---

## STEP 4 — ADD YOUR DOWNLOAD LINKS

In `app.js`, find the `handleVersionClick` function:

```js
function handleVersionClick(mc, e) {
  e.preventDefault();
  // Replace this alert with your actual download links:
  alert(`Downloading Tsunami Client for Minecraft ${mc}...`);
  closeModal();
}
```

Replace each version's alert with the actual file URL, like:
```js
const downloadLinks = {
  "1.21.11": "https://your-server.com/downloads/tsunami-1.21.11.jar",
  "1.21.10": "https://your-server.com/downloads/tsunami-1.21.10.jar",
  // ... etc
};
window.location.href = downloadLinks[mc];
```

---

## CHANGES MADE IN THIS VERSION

✅ Discord logo — now shows proper Discord purple (#5865F2), no white background  
✅ Version selector — click "Select Version" → popup modal appears with all 11 versions (1.21–1.21.11), closeable with X or click outside  
✅ Logo on mobile — fixed, now renders correctly on all screen sizes  
✅ Removed "🔧 Fabric • 63+" from download card  
✅ Changed "6,000+ Daily" → "1,000+ Daily"  
✅ Removed entire community gallery section (base finds)  
✅ Removed "Xray" feature card  
✅ Removed "Map Art ESP" feature card  
✅ Removed "Required for Tsunami 1.21.1" → now just "Required for Tsunami"  
✅ Updated version from 1.21.1 → 1.21-1.21.11  
✅ Download button now says "Select Version" and opens modal  
✅ Added logo next to "Tsunami Client" in download card  
✅ Auto-push script included (push.sh)  
