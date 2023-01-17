# awesome-javascript

## Getting Started

### Pre-requisites

| Required                             | Description                                                               |
| ------------------------------------ | ------------------------------------------------------------------------- |
| [Git](https://git-scm.com/)          | We follow the [GitHub Flow](https://guides.github.com/introduction/flow/) |
| [Node.js](nodejs.org)                | 10.15.0 LTS                                                               |
| [Yarn](https://yarnpkg.com/lang/en/) | 1.12.3 or above                                                           |

### Install Node, Yarn

The project manages node through `nvm`.

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ command -v nvm
$ nvm install 10.15.0
$ which node
$ npm install -g yarn
```

In the project root : `.nvmrc`

```
$ nvm use
...
```

## Yarn CLIs

### Install project

```bash
$ nvm use
$ yarn install
```

### Test

```bash
$ yarn test
```

if `Syntaxerror cannot use import statement outside a module`

```bash
$ yarn node --experimental-vm-modules $(yarn bin jest)
```

if access token failed,

```bash
$ ACCESS_TOKEN=xxxxxx yarn node --experimental-vm-modules $(yarn bin jest)
```
