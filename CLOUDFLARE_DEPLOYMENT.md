# Cloudflare Pages Deployment Guide

This guide will help you deploy your website to Cloudflare Pages and connect your GoDaddy domain.

## Prerequisites
- GitHub account (your repository is already set up)
- Cloudflare account (free)
- GoDaddy domain purchased

---

## Part 1: Deploy to Cloudflare Pages

### Option 1: Deploy via GitHub (Recommended)

1. **Go to Cloudflare Pages**
   - Visit https://dash.cloudflare.com/
   - Click on "Pages" in the left sidebar
   - Click "Create a project"

2. **Connect GitHub Repository**
   - Click "Connect to Git"
   - Authorize Cloudflare to access your GitHub
   - Select your repository: `muhammedfahis/ramadiallondiaye`

3. **Configure Build Settings**
   ```
   Project name: ramadiallondiaye (or your preferred name)
   Production branch: v13
   Build command: npm run build
   Build output directory: dist
   ```

4. **Environment Variables** (if needed)
   - None required for this project

5. **Deploy**
   - Click "Save and Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at: `https://ramadiallondiaye.pages.dev`

### Option 2: Deploy via Wrangler CLI (Alternative)

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=ramadiallondiaye
```

---

## Part 2: Connect Your GoDaddy Domain

### Step 1: Add Custom Domain in Cloudflare

1. Go to your Cloudflare Pages project
2. Click on "Custom domains" tab
3. Click "Set up a custom domain"
4. Enter your domain name (e.g., `yourdomain.com`)
5. Click "Continue"

### Step 2: Update DNS in GoDaddy

Cloudflare will provide you with DNS records to add. You have two options:

#### Option A: Use Cloudflare Nameservers (Recommended)

1. **In Cloudflare Dashboard:**
   - Go to "Websites" → "Add a site"
   - Enter your domain name
   - Choose the Free plan
   - Cloudflare will scan your DNS records
   - Click "Continue"
   - Copy the nameserver addresses (e.g., `ns1.cloudflare.com`, `ns2.cloudflare.com`)

2. **In GoDaddy:**
   - Login to your GoDaddy account
   - Go to "My Products" → "DNS" for your domain
   - Scroll to "Nameservers"
   - Click "Change"
   - Select "I'll use my own nameservers"
   - Enter the Cloudflare nameservers
   - Click "Save"

3. **Wait for Propagation:**
   - DNS changes can take 24-48 hours
   - Usually completes in 1-2 hours
   - Check status in Cloudflare dashboard

#### Option B: Add CNAME Records in GoDaddy (Alternative)

If you prefer to keep GoDaddy nameservers:

1. **In Cloudflare Pages:**
   - Note the CNAME target (e.g., `yourdomain.pages.dev`)

2. **In GoDaddy DNS Management:**
   - Add a CNAME record:
     ```
     Type: CNAME
     Name: @ (or www)
     Value: [your-project].pages.dev
     TTL: 600 seconds
     ```

---

## Part 3: Verify Deployment

### Check DNS Propagation
```bash
# Check if DNS has propagated
dig yourdomain.com

# Or use online tool
# Visit: https://www.whatsmydns.net/
```

### Test Your Site
1. Visit `https://yourdomain.com`
2. Check if it loads correctly
3. Test all pages (About, Vision, Gallery, Projects, Contact, Biography)

---

## Common Issues & Solutions

### Issue 1: "Site not found" error
**Solution:** DNS hasn't propagated yet. Wait 1-2 hours and try again.

### Issue 2: SSL certificate error
**Solution:** 
- Go to Cloudflare Pages → Custom domains
- Check if SSL/TLS certificate is "Active"
- If pending, wait a few minutes for automatic provisioning

### Issue 3: 404 errors on page refresh
**Solution:** This shouldn't happen with the current setup, but if it does:
- Check that `netlify.toml` redirects are working
- Or add a `_redirects` file in the `public` folder

---

## Automatic Deployments

After initial setup, Cloudflare Pages will automatically:
- Deploy every time you push to the `v13` branch
- Show build status in the Cloudflare dashboard
- Provide preview URLs for branch deployments

---

## Next Steps

1. ✅ Build project locally (completed)
2. 🔲 Create Cloudflare account (if not already done)
3. 🔲 Connect GitHub repository to Cloudflare Pages
4. 🔲 Configure build settings
5. 🔲 Deploy and get `.pages.dev` URL
6. 🔲 Add custom domain
7. 🔲 Update GoDaddy nameservers or DNS records
8. 🔲 Wait for DNS propagation
9. 🔲 Verify site is live on your domain

---

## Support Resources

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- GoDaddy DNS Help: https://www.godaddy.com/help/manage-dns-680
- DNS Checker: https://www.whatsmydns.net/

---

## Important Notes

- The `dist` folder contains your production build (already created)
- Your GitHub repository is on branch `v13`
- Keep your build command as `npm run build`
- Build output directory should be `dist`
- Domain propagation typically takes 1-2 hours but can take up to 48 hours
