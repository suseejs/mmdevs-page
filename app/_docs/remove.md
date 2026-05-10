---
layout: markdown
title: Remove
---

## Remove your registered subdomain

To remove your registered subdomain, update the request_type in your .json file in the subdomains directory.

`MMDEVS.ORG` has recorded your `github_user_login` and `github_user_id` when you registered subdomain.So, you need to be that user.

### Steps

- Find and edit the existing `<your_subdomain>.json` file in `subdomains/` directory.

- Set `request_type` to `update` in `<your_subdomain>.json`.

**Example :**

```jsonc
{
  "$schema": "../schema/mmdevs.json",
  "sub_domain": "phowa",
  "cname_value": "phowa.github.io",
  "request_type": "remove", // Change from "register" or "update" to "remove"
}
```

---

- Pervious step : [Initial setup guide][prev]
- Next step : [Push to current branch][next]

---

<!-- markdownlint-disable MD053 -->

[next]: /docs/push
[prev]: /docs/initial-setup
