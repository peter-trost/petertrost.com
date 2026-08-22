# Deployment record

## Hosting

- **Vercel team:** `peetee06s-projects`
- **Vercel project:** `petertrost-com` — https://vercel.com/peetee06s-projects/petertrost-com
- **Git source:** https://github.com/peter-trost/petertrost.com, branch `main` (push to `main` = production deploy)
- **Framework preset:** Astro (auto-detected; build `astro build`, output `dist/`)
- **Vercel domain:** https://petertrost-com.vercel.app
- **Custom domains:** `petertrost.com` (Production), `www.petertrost.com` (308 permanent redirect → `petertrost.com`). Both show *Valid Configuration*; certificates via Let's Encrypt.
- `vercel.json` rewrites `/sitemap.xml` → `/sitemap-index.xml` (the sitemap integration only emits the latter).

## DNS (Squarespace Domains, petertrost.com → DNS)

Set on 2026-08-22 under *Benutzerdefinierte Einträge* (the **Squarespace-Standardeinstellung** preset was deleted first):

| Type | Name | TTL | Data |
|------|------|-----|------|
| A | @ | 4h | 216.150.1.1 |
| CNAME | www | 4h | cname.vercel-dns.com |

Note: Squarespace requires a passkey/password re-auth before any DNS edit.

Left untouched: the *Squarespace Domain Connect* preset (`_domainconnect` CNAME) and the *E-Mail-Sicherheit* preset (`_domainkey`, `_dmarc`, `@` SPF TXT records).

### Rollback

1. In Squarespace DNS, delete the custom `A @ 216.150.1.1` and `CNAME www cname.vercel-dns.com` records.
2. Re-add the preset **"Squarespace-Standardeinstellung"** (Voreinstellung hinzufügen), which restores:

   | Type | Name | Data |
   |------|------|------|
   | A | @ | 198.49.23.144 |
   | A | @ | 198.49.23.145 |
   | A | @ | 198.185.159.145 |
   | A | @ | 198.185.159.144 |
   | CNAME | www | ext-sq.squarespace.com |
   | HTTPS | @ | `1 . alpn="h2,http/1.1" ipv4hint="198.185.159.144,198.185.159.145,198.49.23.144,198.49.23.145"` |

3. Optionally remove `petertrost.com` from the Vercel project (Settings → Domains → Edit → Remove).
