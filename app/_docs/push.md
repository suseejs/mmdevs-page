---
layout: markdown
title: Push to current branch
---

## Push to current branch

Run the local helper script in your terminal:

```sh
npm run commit
```

The commit helper will:

- Ask for a request type (`Register`, `Update`, `Remove`).

```text
Select a number for commit type:
1) Register
2) Update
3) Remove
Enter number:
```

- Ask for a commit message (it is recommended to use your requested subdomain name).

```text
Select a number for commit type:
1) Register
2) Update
3) Remove
Enter number: 1
Enter commit message:
```

- Create a commit with this format: `<Type> : <name>.mmdevs.org`.

- Automatically push to your current branch.

### Notes

Using `npm run commit` with the `<Type> : <name>.mmdevs.org` commit format helps maintainers review and approve requests more easily.

---

- Previous step:
  - [Register a new subdomain][prev]
  - [Update a registered subdomain][prev_1]
  - [Remove a registered subdomain][prev_2]
- Next step: [Open pull request][next]

---

<!-- markdownlint-disable MD053 -->

[prev]: /docs/register
[prev_1]: /docs/update
[prev_2]: /docs/remove
[next]: /docs/pr
