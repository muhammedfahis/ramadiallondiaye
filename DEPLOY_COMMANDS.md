# Cloudflare Pages Deployment Commands

## Quick Deploy (Recommended)

```bash
# Make sure you've built the project first
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=ramadiallondiaye
```

## First Time Setup

If this is your first deployment, you'll need to:

1. **Login to Cloudflare**
```bash
npx wrangler login
```

2. **Deploy**
```bash
npx wrangler pages deploy dist --project-name=ramadiallondiaye
```

3. **Follow the prompts**
- It will ask you to create a new project
- Confirm the project name
- The deployment will start automatically

## Automatic Deployments via GitHub (Better Option)

Instead of deploying manually each time, I recommend:

1. **Go to Cloudflare Dashboard**: https://dash.cloudflare.com/
2. **Pages → Create a project → Connect to Git**
3. **Select your GitHub repo**: `muhammedfahis/ramadiallondiaye`
4. **Configure build settings**:
   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: (leave empty)
   ```
5. **Save and Deploy**

This way, every time you push to GitHub, Cloudflare automatically builds and deploys!

## Current Issue

You're getting an error because Cloudflare is expecting a Worker deployment, not a Pages deployment. The correct command structure is:

❌ Wrong: `npx wrangler deploy`
✅ Correct: `npx wrangler pages deploy dist --project-name=ramadiallondiaye`

## What to do in your Cloudflare build settings

If you're deploying through the Cloudflare dashboard (via GitHub):

**Build configuration:**
```
Build command: npm run build
Build output directory: dist
```

**Do NOT add a custom deploy command** - Cloudflare Pages handles this automatically.
