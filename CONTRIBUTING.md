# Contribution Guidelines

When contributing to `prisma-repo-next`, whether on GitHub or in other community spaces:

- Be respectful, civil, and open-minded.
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/krsbx/prisma-repo-next/issues) for known issues or fixes.

## How to Contribute

### Prerequisites

In order to not waste your time implementing changes that has already been declined, or is generally not needed, start by [opening an issue](https://github.com/krsbx/prisma-repo-next/issues/new/choose) describing the problem you would like to solve.

### Setup your environment

In order to contribute to this project, you need to do this steps:

1. Fork this repository
2. Clone the forked repository to you local machines:

```bash
git clone https://github.com/<your-github-name>/prisma-repo-next.git
```

3. Install all the dependecies

```bash
npm install
```

### Implement your changes

When making commits, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, i.e. prepending the message with `feat:`, `fix:`, `chore:`, `docs:`, etc... You can use `git status` to double check which files have not yet been staged for commit:

```bash
git add <file>
git commit -m "feat/fix/chore/docs: commit message"
```

### When you're done

Please a make PR to the [upstream](https://github.com/krsbx/prisma-repo-next/) in the main branch.

## Credits

This documented was inspired by the contributing guidelines for [cloudflare/wrangler2](https://github.com/cloudflare/wrangler2/blob/main/CONTRIBUTING.md).
