# RoomPilot MVP Landing

Simple single-page marketing site for the RoomPilot product, built as a static `index.html` with inline styles.

## Running Locally

From the project root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/index.html` in your browser.

Alternatively, you can open `index.html` directly in a browser without a server, but some form providers and relative links work more reliably via HTTP.

## Email Capture

The final call-to-action section contains an email capture form wired to Formspree:

- Form endpoint: `https://formspree.io/f/mldadzqy`
- Submissions send the `email` field to Formspree, where you can view/export or forward them.

To change the form endpoint, edit the `action` attribute of the form in `index.html`.

## Buttons & Sections

All navigation links and primary buttons scroll to sections on the same page (hero, features/automation, pricing, about, and the final CTA).

The mapping between buttons/links and sections is documented in `buttons-and-sections-plan.md`. Update that file alongside `index.html` if you change anchors, section IDs, or button behavior.
