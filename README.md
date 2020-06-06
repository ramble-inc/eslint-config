# @ramble-inc/eslint-config
<a href="https://www.npmjs.com/@ramble-inc/eslint-config" target="_blank"><img src="https://img.shields.io/npm/v/@ramble-inc/eslint-config.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/@ramble-inc/eslint-config" target="_blank"><img src="https://img.shields.io/npm/l/@ramble-inc/eslint-config.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/@ramble-inc/eslint-config" target="_blank"><img src="https://img.shields.io/npm/dm/@ramble-inc/eslint-config.svg" alt="NPM Downloads" /></a>

## Getting Started

### Installation
Usnig `yarn`
```
yarn add -D @ramble-inc/eslint-config
```
or using `npm`
```
npm i -D @ramble-inc/eslint-config
```

### Configuration
1. Create `.eslintrc.js` in project root directory
```javascript
module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: ['@ramble-inc/eslint-config'],
  root: true,
};
```

2. Create `.prettierrc` in project root directory with Prettier config of your preference. If you want use `@ramble-inc/prettier-config`
```
"@ramble-inc/prettier-config"
```

