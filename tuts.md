<!-- Create Directory -->

https://youtu.be/BKz7rnbQyK4?list=TLPQMDMwNTIwMjLMbpfQ77BY1A

```
mkdir SMEC-api
cd SMEC-api
```

- initialize node project
  `yarn init`
- add nvm file for consistency of your node environment
  ` node -v > .nvmrc`

- Initialize Ts
  `yarn add -D ts-node @types/node`
- Typescript - is a the library as well as the compiler
- @types/node - tyoe definitions for node js
  `tsc -init` or `npx tsc -init` or `./node_modules/.bin/tslint --init` - Tslint config

- Add eslint and prettier extensions then Run
  `yarn add -D eslint`
- Run `npx eslint --init`
  - To check syntax ,find problems and enforce code style
  - Import export javascript
  - None
  - Yes Am using typescript
  - Node
  - Use popular style guide - airbnb
- Add eslint ignore to prevent build files and modules from being linted

```
touch .eslintignore
```

- Add prettier
  `yarn add -D prettier`
  `touch .prettierrc`

```
{
    "tabWidth": 2, //size of tabs
    "printWidth": 120, // characters per line before auto formatting to the next
    "singleQuote":true, // Change all double quotes to single
    "trailingComma":"es5",// wont add trailing commas
    "arrowParams":"avoid", //allows arrow=>{}
    "semi":true //end with semi colon

}
```

- so that they play nice
  `yarn add -D eslint-plugin-prettier eslint-config-prettier`

- in .eslintrc
  extends -> allows you to inherit rules and other things from other config files.

- Add
  `yarn add -D eslint-import-resolver-typescript tsconfig-paths`

- Jest
  `yarn add -D jest ts-jest @types/jest`

`npx ts-jest config:init`

https://jestjs.io/docs/getting-started#using-typescript
