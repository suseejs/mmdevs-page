---
layout: markdown
title: Update
---

## Update your registered subdomain

To update the `cname_value` of your registered subdomain, edit your `.json` file in the `subdomains` directory.
You must be the owner of that subdomain.

### Steps

- Find and edit the existing `<your_subdomain>.json` file in `subdomains/` directory.

- Update `cname_value` in `<your_subdomain>.json` with [supported CNAME targets][cname_target].

- Set `request_type` to `update` in `<your_subdomain>.json`.

**Example:**

```jsonc
{
  "$schema": "../schema/mmdevs.json",
  "sub_domain": "phowa",
  "cname_value": "cname.vercel-dns.com", // Change from "phowa.github.io" to "cname.vercel-dns.com"
  "request_type": "update", // Change from "register" to "update"
}
```

### Notes

Do not change the `sub_domain` field when updating `<your_subdomain>.json` (that means you must not change the subdomain name).

---

- Previous step: [Initial setup guide][prev]
- Next step: [Push to current branch][next]

---

<!-- markdownlint-disable MD053 -->

[next]: /docs/push
[prev]: /docs/initial-setup
[cname_target]: /docs/register#:~:text=as%20false.-,Supported%20CNAME%20targets,-Only%20these%20targets
