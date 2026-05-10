---
layout: markdown
title: Remove
---

## Remove your registered subdomain

To remove your registered subdomain, update `request_type` in your `.json` file in the `subdomains/` directory.

`MMDEVS.ORG` records your `github_user_login` and `github_user_id` when you register a subdomain, so you must submit the removal request as that same user.

### Steps

- Find and edit the existing `<your_subdomain>.json` file in `subdomains/` directory.

- Set `request_type` to `remove` in `<your_subdomain>.json`.

**Example:**

```jsonc
{
  "$schema": "../schema/mmdevs.json",
  "sub_domain": "phowa",
  "cname_value": "phowa.github.io",
  "request_type": "remove", // Change from "register" or "update" to "remove"
}
```

---

- Previous step: [Initial setup guide][prev]
- Next step: [Push to current branch][next]

---

<!-- markdownlint-disable MD053 -->

[next]: /docs/push
[prev]: /docs/initial-setup
