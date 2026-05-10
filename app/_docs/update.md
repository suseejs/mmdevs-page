---
layout: markdown
title: Update
---

## Update your registered subdomain

To update the `cname_value` of your registered subdomain, edit your `.json` file in the `subdomains` directory.

`MMDEVS.ORG` has recorded your `github_user_login` and `github_user_id` when you registered subdomain.So, you need to be that user.

### Steps

- Find and edit the existing `<your_subdomain>.json` file in `subdomains/` directory.

- Update `cname_value` in `<your_subdomain>.json` with [supported CNAME targets][cname_target].

- Set `request_type` to `update` in `<your_subdomain>.json`.

**Example :**

```jsonc
{
  "$schema": "../schema/mmdevs.json",
  "sub_domain": "phowa",
  "cname_value": "cname.vercel-dns.com", // Change from "phowa.github.io" to "cname.vercel-dns.com"
  "request_type": "update", // Change from "register" to "update"
}
```

### Notes

Do not touch `sub_domain` field when you updating `<your_subdomain>.json` file(that mean do not change subdomain name).

---

- Pervious step : [Initial setup guide][prev]
- Next step : [Push to current branch][next]

---

<!-- markdownlint-disable MD053 -->

[next]: /docs/push
[prev]: /docs/initial-setup
[cname_target]: /docs/register#:~:text=as%20false.-,Supported%20CNAME%20targets,-Only%20these%20targets
