# Jasleen Kaur Bhatia — Career Website

A data-driven career website built with Next.js-compatible Vinext, React, TypeScript, and Tailwind CSS. It is structured so career content stays separate from presentation.

## Run locally

Install dependencies with `npm install`, then run `npm run dev`. The local site is available at `http://localhost:3000`. Use `npm run build` for a production build.

## Project structure

- `app/page.tsx` — homepage composition
- `app/work/[slug]/page.tsx` — reusable professional case-study route
- `app/globals.css` — visual system and responsive layouts
- `data/` — all editable career content
- `public/` — static assets, social image, images, and resume

## Updating content

- Profile, About, headline, optional headshot, email, and resume path: `data/profile.ts`
- Career history and education transition: `data/experience.ts`
- Professional case studies: `data/professionalProjects.ts`
- AI Lab projects: `data/personalProjects.ts`
- Skills: `data/skills.ts`
- Research: `data/research.ts`
- LinkedIn, GitHub, and email: `data/social.ts`

Professional case studies automatically receive a detail page from their `slug`. Keep client labels public-safe, preserve qualifiers around metrics, and omit unknown subsections rather than filling them speculatively.

## Writing

Future article records belong in `data/writing.ts`. Each article supports `title`, `description`, `date`, `category`, `externalUrl`, and `source`. The homepage intentionally hides Writing while the array is empty. Add a navigation link and section only after the first real article is available.

## Resume and headshot

Place the final resume at `public/resume/Jasleen-Kaur-Bhatia-Resume.pdf`. Replace that file in place to keep every link working.

To add a headshot, save an optimized image in `public/images/`, then set `image` in `data/profile.ts` to a public path such as `/images/jasleen.jpg`. Keep it `null` to retain the image-free About treatment.

## Social links and site URL

Add final URLs in `data/social.ts` and mirror the profile email in `data/profile.ts`. Set `NEXT_PUBLIC_SITE_URL` to the production origin so canonical and social metadata resolve to the final domain.

## Deploy to GitHub Pages (free)

Push the repository to GitHub using the `main` branch. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**. The included workflow builds and publishes the static site automatically after every push. The free address is `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Publication checklist

- Add the final resume PDF.
- Add LinkedIn, GitHub, and email URLs.
- Verify the one-month overlap between Infinite Computer Solutions (Aug 2023–Aug 2024) and Fractal Analytics (Jul 2024–Present); TODO comments are preserved in `data/experience.ts`.
- Add or keep the About headshot disabled.
- Review every metric and public-safe client label before publishing.
