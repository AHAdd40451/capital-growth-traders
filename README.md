# CGT Landing Page

Next.js 14 (App Router) + Tailwind CSS + lucide-react.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Images

All images are Unsplash placeholders, configured in `next.config.mjs`
(`images.unsplash.com`). Swap them via the URLs in `lib/data.ts` —
all content (nav links, steps, testimonials, footer columns, image URLs)
lives in that one file.

## Form

`components/CtaForm.tsx` has a `// TODO` where the lead form submit
should hit your backend / CRM (e.g. GoHighLevel webhook).
