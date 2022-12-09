<h1 align="center">
  Prisma Repo
</h1>

<p align="center">
  Prisma Generator to quickly setup a Repository Pattern in Express, Prisma, and TypeScript projects.
</p>

<p align="center">
  Get started with `Prisma Repo` by running <code>npm i @krsbx/prisma-repo</code>
</p>

<div align="center">

[![PRs-Welcome][contribute-image]][contribute-url] [![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

</div>

[downloads-image]: https://img.shields.io/npm/dm/@krsbx/prisma-repo?color=364fc7&logoColor=364fc7
[npm-url]: https://www.npmjs.com/package/@krsbx/prisma-repo
[npm-image]: https://img.shields.io/npm/v/@krsbx/prisma-repo?color=0b7285&logoColor=0b7285
[contribute-url]: https://github.com/krsbx/@krsbx/prisma-repo/blob/main/CONTRIBUTING.md
[contribute-image]: https://img.shields.io/badge/PRs-welcome-blue.svg

## Table of contents

- <a href="#about">What is Prisma Repo?</a>
- <a href="#getting-started">Getting Started</a>
- <a href="#config">Config Docs</a>
- <a href="#contributors">Contributors</a>

<h2 id="about">What is Prisma Repo?</h2>

"_Prisma Repo_" is a Repository Pattern Generator for your Prisma TypeScript Backend. By using Prisma Repo, you can free your mind from how to setup a Repository Pattern in Prisma without a headache.

**Keep in mind** that the generated file is can be edited. You can freely modified the generated model repository file and the base repository file as you like. Just **keep in mind** the prisma-repo will be overwritten every time you run a prisma migration.

<h2 id="getting-started">Getting Started</h2>

1. To get started with `prisma-repo`, run any of the following commands:

### npm

```bash
npm i -D prisma-repo@latest
```

2. Add Prisma Generator as your generator in your `schema.prisma`

```bash
# Top level after prisma-client generator

generator repo {
  provider = "prisma-repo"
  output   = "../src/repository"
  query    = true
  warn     = true
  info     = true
  error    = true
}

# Rest of your model and stuff...

```

<h2 id="config">Config Docs</h2>
The following options can be use to configure the behavior of the <code>prisma-repo</code> :

| Option/Flag | Description                                                    |
| :---------: | :------------------------------------------------------------- |
|  `output`   | Determine the destination of generated files to be outputted   |
|    query    | Determine whether to use the `query` options in prisma logging |
|   `warn`    | Determine whether to use the `warn` options in prisma logging  |
|   `info`    | Determine whether to use the `info` options in prisma logging  |
|   `error`   | Determine whether to use the `error` options in prisma logging |

<h2 id="contributors">Contributors</h2>

We 💖 contributors! Feel free to contribute to this project but **please read the [Contributing Guidelines](CONTRIBUTING.md) before opening an issue or PR** so you understand the branching strategy and local development environment.
