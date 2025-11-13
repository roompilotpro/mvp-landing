# RoomPilot Landing Pages - Quick Start Guide

## Installation Complete!

All dependencies have been installed and all three landing page variations are ready to run.

---

## Running the Landing Pages Locally

### Option 1: Test Landlord-Focused Page

```bash
cd /Users/baechao/IdeaProjects/worktrees/landlord-focus
npm run dev
```

Then open **http://localhost:3000** in your browser.

**Features to test:**
- Savings calculator showing PadSplit (8%) vs RoomPilot (2%)
- Email capture form (try submitting an email)
- Comparison table
- Mobile responsive design (resize your browser)

Press `Ctrl+C` to stop the server before testing the next variation.

---

### Option 2: Test Renter-Focused Page

```bash
cd /Users/baechao/IdeaProjects/worktrees/renter-focus
npm run dev
```

Then open **http://localhost:3000** in your browser.

**Features to test:**
- Search bar mockup (visual only)
- Sample room listings grid
- "How It Works" section
- Email capture form
- Warm, approachable design

Press `Ctrl+C` to stop the server before testing the next variation.

---

### Option 3: Test Dual-Audience Page

```bash
cd /Users/baechao/IdeaProjects/worktrees/dual-audience
npm run dev
```

Then open **http://localhost:3000** in your browser.

**Features to test:**
- Split hero design (renters on left, landlords on right)
- Two email capture forms (one for each audience)
- Side-by-side "How It Works" sections
- Dual testimonials
- Modern purple/cyan color scheme

Press `Ctrl+C` to stop the server.

---

## Running Multiple Variations Simultaneously

If you want to view multiple variations at the same time, you can run them on different ports:

```bash
# Terminal 1 - Landlord-focused on port 3000
cd /Users/baechao/IdeaProjects/worktrees/landlord-focus
npm run dev

# Terminal 2 - Renter-focused on port 3001
cd /Users/baechao/IdeaProjects/worktrees/renter-focus
npm run dev -- -p 3001

# Terminal 3 - Dual-audience on port 3002
cd /Users/baechao/IdeaProjects/worktrees/dual-audience
npm run dev -- -p 3002
```

Then open:
- **Landlord-focused**: http://localhost:3000
- **Renter-focused**: http://localhost:3001
- **Dual-audience**: http://localhost:3002

---

## Testing Email Capture

1. Enter an email address in any of the email capture forms
2. Click the submit button
3. You should see a success message
4. Check the file: `data/leads.json` in each worktree directory to see the stored email

Example:
```bash
cat /Users/baechao/IdeaProjects/worktrees/landlord-focus/data/leads.json
```

---

## Building for Production

To create an optimized production build:

```bash
cd /Users/baechao/IdeaProjects/worktrees/landlord-focus
npm run build
npm start  # Runs production server
```

Repeat for other variations as needed.

---

## Deploy to Vercel

### Quick Deploy (Recommended)

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Deploy Landlord-Focused**:
```bash
cd /Users/baechao/IdeaProjects/worktrees/landlord-focus
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (Select your account)
- Link to existing project? **N**
- Project name? **roompilot-landlord** (or your choice)
- In which directory? **./** (just press Enter)
- Want to modify settings? **N**

This will give you a preview URL immediately!

3. **Deploy to Production**:
```bash
vercel --prod
```

4. **Repeat for other variations**:
```bash
cd /Users/baechao/IdeaProjects/worktrees/renter-focus
vercel --prod

cd /Users/baechao/IdeaProjects/worktrees/dual-audience
vercel --prod
```

---

## Troubleshooting

### "Command not found: next"

If you see this error, dependencies aren't installed:
```bash
npm install
```

### Port Already in Use

If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### Build Errors

Make sure you're using Node.js 18 or higher:
```bash
node --version  # Should be v18.0.0 or higher
```

### Tailwind CSS Not Working

The project uses Tailwind CSS v4. If you see PostCSS errors, ensure `@tailwindcss/postcss` is installed:
```bash
npm install @tailwindcss/postcss
```

---

## Next Steps

1. ✅ **Test all three variations locally** (you're here!)
2. **Deploy to Vercel** - Get live preview URLs
3. **Share with stakeholders** - Get feedback on which design works best
4. **Set up analytics** - Add Google Analytics or Plausible
5. **Run A/B test** - Use Vercel Edge Config or similar tool
6. **Analyze results** - Choose the winning variation
7. **Go live** - Deploy winner to production domain

---

## Support

- **Deployment Guide**: See `DEPLOYMENT.md` for detailed deployment instructions
- **Project Summary**: See `SUMMARY.md` for complete feature breakdown
- **Product Details**: See `README.md` for the full product PRD

---

**You're all set! Start with:**
```bash
cd /Users/baechao/IdeaProjects/worktrees/landlord-focus
npm run dev
```

Then open http://localhost:3000 and explore the landing page!
