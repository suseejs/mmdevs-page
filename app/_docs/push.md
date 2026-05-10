---
layout: markdown
title: Push to current branch
---

## Push to current branch

Running local helper script in terminal :

```sh
npm run commit
```

The commit helper will :

- Ask for request type (`Register`, `Update`, `Remove`).

```text
Select a number for commit type:
1) Register
2) Update
3) Remove
Enter number:
```

- Ask for a commit message value (recommended to use your requested subdomain name).

```text
Select a number for commit type:
1) Register
2) Update
3) Remove
Enter number: 1
Enter commit message:
```

- Commit with format: `<Type> : <name>.mmdevs.org`.

- After that auto push to your current branch.

### Notes

By running `npm run commit` and commit with formatted commit message `<Type> : <name>.mmdevs.org` will help maintainers to check and approve more easier.

---

- Pervious step :
  - [Register a new subdomain][prev]
  - [Update a registered subdomain][prev_1]
  - [Remove a registered subdomain][prev_2]
- Next step : [Open pull request][next]

---

<!-- markdownlint-disable MD053 -->

[prev]: /docs/register
[prev_1]: /docs/update
[prev_2]: /docs/remove
[next]: /docs/pr
