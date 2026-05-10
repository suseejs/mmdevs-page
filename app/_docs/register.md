---
layout: markdown
title: Register
---

<!-- markdownlint-disable MD001 -->

## Register a new subdomain

You can request a new subdomain using one of the following methods:

1. Add a registration JSON file to the `subdomains/` directory.
2. Run `npx mmsd <sub_domain>` in your terminal. The `mmsd` CLI creates `<sub_domain>.json` in the `subdomains/` directory. (Recommended)

### Using mmsd CLI

We recommend using the `mmsd` CLI, which becomes available after the [initial setup][isg]. It checks whether your requested subdomain is available and, if available, creates the registration JSON file with a single command.

For details about [`mmsd-cli`][mmsd], see the [examples][mmsd_example].

```sh
npx mmsd <your_requested_domain>
# replace <your_requested_domain> with subdomain name
```

### Register JSON file reference

Your request file must be JSON and match this structure:

```json
{
  "$schema": "../schema/mmdevs.json",
  "sub_domain": "example",
  "cname_value": "example.github.io",
  "request_type": "register",
  "cfp": false
}
```

- Full example and detailed notes: [example.jsonc][example_json]
- Validation is enforced by: [JSON Schema][json_schema]

**Field reference:**

1. `sub_domain` (required) The name part of `<sub_domain>.mmdevs.org`.
2. `cname_value` (required) Must be one of the [supported CNAME targets](#supported-cname-targets).
3. `request_type` (required) One of: `register`, `update`, `remove`.
4. `cfp` (optional) Cloudflare proxy flag. In current validation flow, this is treated as `false`.

### Supported CNAME targets

Only these targets are accepted:

1. GitHub Pages user domain: `<username>.github.io`
2. Vercel default CNAME: `cname.vercel-dns.com`
3. Vercel project CNAME: `<code>.vercel-dns-<number>.com`

### Notes

> If you are not using the `mmsd` CLI:
>
> 1. File extension must be `.json`.
> 2. Filename should match `sub_domain`. Example: `sub_domain: "foo"` -> `subdomains/foo.json`.

---

- Previous step: [Initial setup guide][prev]
- Next step: [Push to current branch][next]

---

<!-- markdownlint-disable MD053 -->

[mmsd]: /mmsd
[isg]: /docs/initial-setup
[example_json]: https://github.com/phothinmg/mmdevs.org/blob/main/example.jsonc
[json_schema]: https://github.com/phothinmg/mmdevs.org/blob/main/schema/mmdevs.json
[mmsd_example]: /mmsd#:~:text=subdomains/<sub_domain>.json-,CLI%20Examples
[next]: /docs/push
[prev]: /docs/initial-setup
