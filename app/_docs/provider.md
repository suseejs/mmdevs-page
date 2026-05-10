---
layout: markdown
title: Setup for hosting provider
---

<!-- markdownlint-disable MD001 -->

### Setup GitHub Pages

**Create GitHub Pages:**

If you have not already done so, sign in to GitHub and set up your GitHub Pages site by following [their instructions](https://docs.github.com/en/pages).

**Set up your subdomain:**

Follow our [registration guide](/docs/register) to request your subdomain.

**Publishing:**

[**From a branch:**](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch)

- Add a file named CNAME with the content `<sub_domain>.mmdevs.org` at source branch/source directory.
- For details on configuring the publishing source for your GitHub Pages site, see [the docs](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

`CNAME`

```text
<your_subdomain>.mmdevs.org
```

[**Using a workflow:**](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)

- A CNAME file will not be processed when publishing a site via a workflow.
- Add `<sub_domain>.mmdevs.org` as a custom domain at the following example URL.
- More details are available in [GitHub Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

`example URL`

```text
https://github.com/{user_name}/{repo}/settings/pages
```

### Setup for Vercel

- Follow our [registration guide](/docs/register) to request your subdomain.

- Use `cname.vercel-dns.com` or the newer `<code>.vercel-dns-017.com` target shown by Vercel (example: `d1d4fc829fe7bc7c.vercel-dns-017.com`).
- See [Adding and configuring a custom domain](https://vercel.com/docs/domains/working-with-domains/add-a-domain#apex-domains) in the Vercel docs.
