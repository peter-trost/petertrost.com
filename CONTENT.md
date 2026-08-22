# Adding a post

1. Create `src/content/posts/<slug>.md` — the filename is the URL: `/posts/<slug>/`.
2. Frontmatter (all required except `draft`):
   ```yaml
   ---
   title: Post title
   description: One line shown in the list, meta tags, RSS and llms.txt.
   date: 2026-08-22
   draft: false   # true hides it from the site, feed, sitemap and llms.txt
   ---
   ```
3. Write markdown below the frontmatter.
4. Check locally with `npm run dev`, then `git add -A && git commit -m "Post: <title>" && git push`. Vercel deploys `main` to petertrost.com in ~1 minute.
