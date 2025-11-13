# RoomPilot Landing Page Deployment Guide

This repository contains three different landing page variations for RoomPilot, each targeting a different audience. The variations are managed using Git worktrees for parallel development.

## Landing Page Variations

### 1. Landlord-Focused (Branch: `landlord-focus`)
**Location**: `/Users/baechao/IdeaProjects/worktrees/landlord-focus`

**Target Audience**: Property owners and landlords

**Key Features**:
- Hero headline: "Keep 98% of Your Rent. Get Paid Weekly."
- Prominent savings calculator (PadSplit 8% vs RoomPilot 2%)
- Comparison table highlighting RoomPilot advantages
- Professional blue (#2E5BFF) and warm orange (#FF6B6B) color scheme
- Focus on: Lower fees, fast payouts, full control, automation

**CTA**: "List Your Property Free"

---

### 2. Renter-Focused (Branch: `renter-focus`)
**Location**: `/Users/baechao/IdeaProjects/worktrees/renter-focus`

**Target Audience**: Individuals looking for affordable room rentals

**Key Features**:
- Hero headline: "Find Your Perfect Room. Move In This Week."
- Search bar mockup for location and budget
- Sample room listings grid
- Warm brown/mocha (#8B7355) and sage green (#7FA99B) color scheme
- Focus on: Affordability, fast move-in, flexible payments, transparency

**CTA**: "Join Waitlist"

---

### 3. Dual-Audience (Branch: `dual-audience`)
**Location**: `/Users/baechao/IdeaProjects/worktrees/dual-audience`

**Target Audience**: Both renters and landlords

**Key Features**:
- Split hero design (renters on left, landlords on right)
- Two-column features section for each audience
- Side-by-side "How It Works" journeys
- Dual testimonials
- Modern purple (#8B5CF6) and cyan (#00D9FF) color scheme
- Balanced messaging for both audiences

**CTA**: Dual CTAs - "Search Rooms" and "List Property"

---

## Local Testing

### Test Each Variation

1. **Landlord-Focused**:
```bash
cd /Users/baechao/IdeaProjects/worktrees/landlord-focus
npm install  # If not already done
npm run dev
```
Open http://localhost:3000

2. **Renter-Focused**:
```bash
cd /Users/baechao/IdeaProjects/worktrees/renter-focus
npm install  # If not already done
npm run dev
```
Open http://localhost:3000

3. **Dual-Audience**:
```bash
cd /Users/baechao/IdeaProjects/worktrees/dual-audience
npm install  # If not already done
npm run dev
```
Open http://localhost:3000

**Note**: Only run one dev server at a time, or change the port using `npm run dev -- -p 3001`

---

## Vercel Deployment

### Option 1: Deploy All Three Variations (Recommended for A/B Testing)

Each branch can be deployed as a separate Vercel project:

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Deploy Landlord-Focused**:
```bash
cd /Users/baechao/IdeaProjects/worktrees/landlord-focus
vercel --prod
```
Follow prompts. Suggested project name: `roompilot-landlord`

3. **Deploy Renter-Focused**:
```bash
cd /Users/baechao/IdeaProjects/worktrees/renter-focus
vercel --prod
```
Suggested project name: `roompilot-renter`

4. **Deploy Dual-Audience**:
```bash
cd /Users/baechao/IdeaProjects/worktrees/dual-audience
vercel --prod
```
Suggested project name: `roompilot-dual`

### Option 2: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import the Git repository
3. Deploy the first branch (e.g., `landlord-focus`)
4. Repeat for other branches by creating new projects

### Option 3: Single Deployment with Branch Previews

Deploy the main project to Vercel and set up automatic preview deployments for each branch:

1. Connect the repository to Vercel
2. Set main branch as production
3. Each worktree branch will automatically get preview URLs on push

---

## Email Lead Collection

All three variations use the same email capture system:

- **API Endpoint**: `/api/leads`
- **Storage**: Emails are saved to `/data/leads.json`
- **Format**: JSON array with email, timestamp, and user agent

### Accessing Leads

Leads are stored in each deployment's file system. To access:

1. **Locally**: Check `data/leads.json` in each worktree directory
2. **Vercel**: Use Vercel CLI or set up database integration

### Migration to Email Service

The current implementation stores leads locally. To migrate to a service like Mailchimp:

1. Modify `/app/api/leads/route.ts` in each worktree
2. Add Mailchimp API key to environment variables
3. Replace file storage with Mailchimp API calls

Example:
```typescript
// Add to .env.local
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_AUDIENCE_ID=your_audience_id
```

---

## Git Worktree Management

### View All Worktrees
```bash
git worktree list
```

### Remove a Worktree (if needed)
```bash
git worktree remove /Users/baechao/IdeaProjects/worktrees/landlord-focus
git branch -d landlord-focus  # Delete branch after removing worktree
```

### Add a New Variation
```bash
git worktree add ../worktrees/new-variation -b new-variation
```

---

## A/B Testing Strategy

Once all three variations are deployed:

1. **Split Traffic**: Use Vercel Edge Config or a service like Optimizely to split traffic
2. **Track Conversions**: Monitor email signup rates for each variation
3. **Analytics**: Add Google Analytics or Plausible to track user behavior
4. **Winner**: After statistical significance, choose the best performing variation

### Suggested Metrics to Track:
- Email signup conversion rate
- Time on page
- Scroll depth
- Click-through rate on CTAs
- Bounce rate

---

## Next Steps

1. ✅ Test all three variations locally
2. ✅ Deploy to Vercel (all three branches)
3. Set up Google Analytics or tracking
4. Share preview URLs with stakeholders
5. Run A/B test with real traffic
6. Analyze results and choose winning variation
7. Migrate to production domain

---

## Support

For questions or issues:
- Review the main README.md for product details
- Check Next.js documentation: https://nextjs.org/docs
- Check Vercel documentation: https://vercel.com/docs
