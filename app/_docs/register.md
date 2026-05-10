---
layout: markdown
title: Register
---

<!-- markdownlint-disable MD001 -->

## Register a new subdomain

You can request a new subdomain by doing one of the following :

1. Add register JSON file to `subdomains/` directory.
2. Run the command `npx mmsd <sub_domain>` in your terminal. The CLI tool `mmsd` will create a `<sub_domain>.json` file in the `subdomains` directory.(Recommended)

### Using mmsd cli

Recommended to use `mmsd` cli that will available after [initial setup][isg].That will check the name of your subdomain is available or not, if available create register JSON file by running the following single commend.

For detail about [`mmsd-cli`][mmsd] and there are [examples][mmsd_example].

```sh
npx mmsd <your_requested_domain>
# replace <your_requested_domain> with subdomain name
```

### Register JSON file reference

Request file must be JSON and match this shape :

```json
{
  "$schema": "../schema/mmdevs.json",
  "sub_domain": "example",
  "cname_value": "example.github.io",
  "request_type": "register",
  "cfp": false
}
```

- Full example and detailed notes : [example.jsonc][example_json]
- Validation is enforced by : [JSON Schema][json_schema]

**Field reference :**

1. `sub_domain` (required) The name part of `<sub_domain>.mmdevs.org`.
2. `cname_value` (required) Must be one of the [supported CNAME targets](#supported-cname-targets).
3. `request_type` (required) One of: `register`, `update`, `remove`.
4. `cfp` (optional) Cloudflare proxy flag. In current validation flow, this is treated as `false`.

### Supported CNAME targets

Only these targets are accepted :

1. GitHub Pages user domain: `<username>.github.io`
2. Vercel default CNAME: `cname.vercel-dns.com`
3. Vercel project CNAME: `<code>.vercel-dns-<number>.com`

### Notes

> If you not using `mmsd` cli :
>
> 1. File extension must be `.json`.
> 2. Filename should match `sub_domain`. Example: `sub_domain: "foo"` -> `subdomains/foo.json`.

---

- Pervious step : [Initial setup guide][prev]
- Next step : [Push to current branch][next]

---

<!-- markdownlint-disable MD053 -->

[mmsd]: /mmsd
[isg]: /docs/initial-setup
[example_json]: https://github.com/phothinmg/mmdevs.org/blob/main/example.jsonc
[json_schema]: https://github.com/phothinmg/mmdevs.org/blob/main/schema/mmdevs.json
[mmsd_example]: /mmsd#:~:text=subdomains/<sub_domain>.json-,CLI%20Examples
[next]: /docs/push
[prev]: /docs/initial-setup
