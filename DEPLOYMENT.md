# 🚀 Deployment Guide for BikeDekho PX2

## Problem Identified

When deploying the entire `bikedekho-px2` folder to Vercel, it was serving the **legacy HTML files** from the root directory instead of the **modern React application** in the `bikedekho-react` subdirectory.

## Solution

A `vercel.json` configuration file has been created at the root level to ensure Vercel:
1. Builds from the `bikedekho-react` subdirectory
2. Uses the correct Vite framework settings
3. Outputs to the correct directory
4. Handles client-side routing properly

## Files Added/Modified

### 1. `vercel.json` (NEW)
Tells Vercel exactly how to build and deploy your React app:
- Build command: `cd bikedekho-react && npm install && npm run build`
- Output directory: `bikedekho-react/dist`
- Framework: Vite
- Includes rewrites for client-side routing

### 2. `README.md` (UPDATED)
Added deployment section explaining the configuration

### 3. `.gitignore` (UPDATED)
Clarified that `vercel.json` should be tracked

## Steps to Fix Your Vercel Deployment

### Option 1: Update Your Existing Vercel Project

1. **Add the new files to Git:**
   ```bash
   git add vercel.json README.md .gitignore
   git commit -m "Add Vercel configuration for React app deployment"
   git push origin main
   ```

2. **Redeploy in Vercel:**
   - Go to your Vercel dashboard
   - Find your project
   - Click "Deployments"
   - Click "Redeploy" on the latest deployment
   - Or just wait for automatic deployment from the push

### Option 2: Using Vercel CLI

1. **Install Vercel CLI (if not installed):**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from the root directory:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - The CLI will detect `vercel.json` automatically
   - Confirm the settings
   - Deploy!

## Verification

After deployment, verify that:
- ✅ The React app loads (not the old HTML files)
- ✅ Persona selector works
- ✅ All components render correctly
- ✅ Client-side routing works
- ✅ No 404 errors on page refresh

## Project Structure Explanation

```
bikedekho-px2/                    # ← Root (you pushed this to GitHub)
├── vercel.json                   # ← NEW: Tells Vercel where to build from
├── README.md                     # ← Main documentation
├── .gitignore                    # ← Git ignore rules
├── index.html                    # ← Legacy HTML (NOT deployed)
├── dominar_v3.html              # ← Legacy HTML (NOT deployed)
├── Dominar_new px.html          # ← Legacy HTML (NOT deployed)
├── css/                         # ← Legacy CSS (NOT deployed)
├── js/                          # ← Legacy JS (NOT deployed)
└── bikedekho-react/             # ← React app (THIS gets deployed ✓)
    ├── package.json
    ├── vite.config.ts
    ├── src/
    └── dist/                    # ← Build output (created during deployment)
```

## Alternative: Reorganize Repository (Future Option)

If you want to simplify the structure, you could:

### Option A: Deploy Only the React App
1. Create a new repo
2. Push only the `bikedekho-react` contents to root
3. No need for `vercel.json`

### Option B: Monorepo Structure
1. Keep current structure
2. Use the `vercel.json` configuration (as implemented)
3. Maintain both legacy and modern versions

## Troubleshooting

### Issue: Still seeing old HTML files after deployment
**Solution:** 
- Clear Vercel cache
- In Vercel Dashboard → Project Settings → General → scroll down
- Click "Clear Build Cache & Redeploy"

### Issue: Build fails
**Solution:**
- Check build logs in Vercel dashboard
- Ensure `package.json` dependencies are correct
- Verify Node.js version compatibility

### Issue: 404 on page refresh
**Solution:**
- The `vercel.json` includes rewrites for this
- If still happening, check that the rewrite rules are applied

### Issue: Environment variables needed
**Solution:**
- Add them in Vercel Dashboard → Project Settings → Environment Variables
- Format: `VITE_API_KEY=your-key-here`

## Contact

If you encounter any deployment issues, check:
1. Vercel deployment logs
2. Browser console for errors
3. Network tab for failed requests

---

**Last Updated:** January 2026

