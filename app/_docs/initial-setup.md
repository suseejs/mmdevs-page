---
layout: markdown
title: Initial setup guide
---

<!-- markdownlint-disable MD001 -->

### Initial setup guide

#### 1. Fork

<!-- markdownlint-disable MD059 -->

Fork the `mmdevs.org` repository by clicking [here][fork].

#### 2. Create a branch

```sh
git switch -c your_branch
```

#### 3. Local setup

**Install dependencies:**

```sh
npm install
```

**Install Git hooks:**

```sh
npm run hooks:install
```

---

- Next steps:
  - [Register a new subdomain][next]
  - [Update a registered subdomain][next_1]
  - [Remove a registered subdomain][next_2]

---

<!-- markdownlint-disable MD053 -->

[fork]: https://github.com/phothinmg/mmdevs.org/fork
[next]: /docs/register
[next_1]: /docs/update
[next_2]: /docs/remove
