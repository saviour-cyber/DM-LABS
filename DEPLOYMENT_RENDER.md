# Deploying DM Labs Website to Render.com

This project is pre-configured and 100% compatible with [Render.com](https://render.com).

---

## Method 1: Instant Deployment via Render Blueprints (Recommended)

Because the project includes `render.yaml`, Render can set up everything automatically:

1. Push this project to your GitHub or GitLab repository:
   ```bash
   git add .
   git commit -m "Configure DM Labs for Render deployment"
   git remote add origin https://github.com/YOUR_USERNAME/dmlabs-website.git
   git push -u origin main
   ```
2. Log in to your [Render Dashboard](https://dashboard.render.com).
3. Click **New +** $\rightarrow$ **Blueprint**.
4. Connect your GitHub repository.
5. Render will automatically read `render.yaml` and configure:
   - **Runtime**: Node.js 22.x
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Health Check Route**: `/api/health`
6. Click **Apply**. Render will build and deploy your site with a free `onrender.com` SSL domain.

---

## Method 2: Manual Web Service Setup on Render

If you prefer configuring via the Render web UI:

1. Click **New +** $\rightarrow$ **Web Service**.
2. Connect your Git repository.
3. Configure settings:
   - **Name**: `dmlabs-corporate-website`
   - **Language**: `Node`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free` (or `Starter`)
4. In **Advanced**:
   - Add Environment Variable:
     - `NODE_VERSION` = `22.17.1`
     - `NEXT_TELEMETRY_DISABLED` = `1`
   - Health Check Path: `/api/health`
5. Click **Deploy Web Service**.

---

## Method 3: Docker Deployment on Render

If you prefer containerized deployment:
1. Click **New +** $\rightarrow$ **Web Service**.
2. Select your repository.
3. Set **Language** to **Docker**.
4. Render will automatically detect the multi-stage `Dockerfile` and build a minimal, ultra-fast production container.

---

## Custom Domain Setup (e.g., `dmlabs.tech`)

1. In your Render Web Service dashboard, go to **Settings** $\rightarrow$ **Custom Domains**.
2. Add your domain: `dmlabs.tech` and `www.dmlabs.tech`.
3. In your DNS registrar (GoDaddy, Namecheap, Cloudflare, Kenya Registry, etc.):
   - Point your `CNAME` for `www` to `dmlabs-corporate-website.onrender.com`.
   - Point your `@` (Apex domain) `ANAME` or `A` records to Render's IP addresses provided in the dashboard.
4. Render will automatically issue a free Let's Encrypt SSL certificate within a few minutes.
