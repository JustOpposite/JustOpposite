# Setup React Typescript app with pnpm, vite, vitest, eslint, prettier, husky, markdown docs

---

## Pnpm install globally

\$ sudo npm install -g pnpm

## Vite create starter app

\$ pnpm create vite

```text
1. enter: <app name>
2. select framework: React
3. select compiler: Typescript-swc
```

\$ cd \<app name>

\$ pnpm install

test generated app

```bash
pnpm run dev
```

## Git initialization starter app

\$ git init .

\$ git add *

\$ git commit -m "initial commit"

## Eslint initialization

\$ pnpm create @eslint/config

```text
1. To check syntax, find problems, and force code style
2. JavaScript modules (import/export)
3. React
4. Typescript Yes
5. Browser
6. Use a popular style guide
7. Standard
8. JSON
9. Install dependencies Yes
10. pnpm
```

\$ mv .eslintrc.json .eslintrc

## Airbnb eslint configuration installation

[Airbnb configuration howto](https://github.com/iamturns/eslint-config-airbnb-typescript#setup)

\$ pnpm add -D eslint eslint-plugin-import eslint-plugin-react-hooks @typescript-eslint/parser eslint-config-airbnb eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-jsx-a11y @stylistic/eslint-plugin-ts

\$ vi .eslintrc ___with following:___

```json
"extends": [
   "airbnb",
   "airbnb-typescript"
],
"parserOptions": {
   ...
   "project": "./tsconfig.json",
},
"rules": {
   "@typescript-eslint/comma-dangle": "off",
   "@typescript-eslint/semi": "off",
   "react/function-component-definition": "off",
   "react/react-in-jsx-scope": "off",
   "react/jsx-props-no-spreading": "off",
   "import/extensions": [
      "error",
      {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
      }
   ]
},
"ignorePatterns": ["vite.config.ts"]
```

\$ vi package.json ___with following:___

```json
"scripts": {
   ...
   "lint": "pnpm exec eslint . --ext .js,.jsx,.ts,.tsx",
   "lint:fix": "pnpm exec eslint . --ext .js,.jsx,.ts,.tsx --fix",
   ...
}
```

\$ vi .eslintignore ___with following:___

```text
build 
coverage
node_modules
dist
public
*.md
```

## Prettier installation and configuration and eslint integration

\$ pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier

\$ vi .eslintrc ___with following:___ (_make sure prettier plugin is in the last line_)

```json
"extends": [
   ...
   "plugin:prettier/recommended"
],
...
"plugins": [
   ...
   "prettier"
],
"rules": [
   ...
   "prettier/prettier": "error"
]
```

\$ vi .prettierrc ___with following:___

```json
{
   "tabWidth": 2,
   "useTabs": false,
   "semi": false,
   "singleAttributePerLine": true,
   "singleQuote": true,
   "trailingComma": "none",
   "printWidth": 80
}
```

\$ vi tsconfig.json ___with following:___

```json
"include": [
   "vite.config.ts",
   ".eslintrc",
   ".prettierrc",
   "tsconfig.json",
   "tsconfig.node.json",
   ...
],
```

install vscode extension lintel (optional)

\$ vi .prettierignore ___with following:___

```text
build 
coverage
node_modules
dist
public
*.md
```

## Husky installation and configuration

\$ pnpx husky-init && pnpm install

\$ vi .husky/pre-commit ___with following:___

```bash
pnpm run lint
```

## Vitest installation and configuration

[Using Testing Library jest-dom with Vitest](https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/)

[Guiding principle when writing tests](https://testing-library.com/docs/queries/about/#priority)

\$ pnpm add -D vitest jsdom @testing-library/react @testing-library/jest-dom @vitest/ui

\$ vi vite.config.ts ___with following:___

```js
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   test: {
      globals: true,
      environment: 'jsdom',
      css: true,
      setupFiles: './src/test/setup.ts'
   }
})
```

\$ vi tsconfig.json compilerOptions ___with following:___

```json
"types": ["vitest/globals"]
```

\$ vi App.test.tsx ___with following:___

```js
import { render, screen } from '@testing-library/react'
import App from './App'

it('should have hello world', () => {
   // ARRANGE (setup and render components)
   render(<App />)

   // ACT (for things such as button click or some other user action simulation)

   // EXPECT (query and compare expected values)
   expect(screen.queryByText(/Hello World/)).toBeVisible()
})
```

\$ vi test/setup.ts ___with following:___

```js
/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom'
```

\$ vi package.json scripts ___with following:___

```json
"test": "vitest",
"test:ui": "vitest --ui",
"test:pre-commit": "vitest --run"
```

\$ vi .husky/pre-commit ___with following:___

```bash
pnpm run test:pre-commit
```

test run vitest

```bash
pnpm run test
```

## Markdown doc extension install and usage

[Markdown doc cheat sheet](https://www.markdownguide.org/cheat-sheet/)

install vscode extension "Markdown All In One"

Preview markdown file press

```js
[COMMAND][SHIFT]v
```

## TanStack Router install

[TanStack Router Docs](https://tanstack.com/router/latest/docs/framework/react/overview)

Installation:

```bash
pnpm add @tanstack/react-router
```

[Quick start guide](https://tanstack.com/router/latest/docs/framework/react/quick-start)

Use of file based routing you need to install:

```bash
pnpm add -D @tanstack/router-vite-plugin 
```

\$ vi vite.config.ts ___with following:___

```js
// vite.config.ts
import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ...,
    TanStackRouterVite(),
  ],
})
```

When using File-Based route configuration:

```text
change the id of the root <div> on your index.html file to <div id='app'></div>
```

[When using Vite is not an option, install router-cli](https://tanstack.com/router/v1/docs/framework/react/guide/file-based-routing#router-cli)

[File based routing - file naming convention](https://tanstack.com/router/v1/docs/framework/react/guide/file-based-routing#file-naming-conventions)

Install devtools:

```bash
pnpm add @tanstack/router-devtools
```

[Devtools instruction](https://tanstack.com/router/latest/docs/framework/react/devtools#import-the-devtools)

[Migrate from React Router](https://tanstack.com/router/latest/docs/framework/react/migrate-from-react-router)

## OPTIONAL: Preact transplant while keeping React around

[Preact Compat Doc](https://preactjs.com/guide/v10/getting-started/#aliasing-react-to-preact)

[Preact with Vitest sample](https://stackblitz.com/edit/vitest-dev-vitest-zjuxtp?file=tsconfig.json,test%2Fsetup.ts,src%2FApp.test.tsx,package.json&initialPath=__vitest__/)

\$ pnpm add preact

\$ pnpm add -D @babel/core @preact/preset-vite @stylistic/eslint-plugin-ts

\$ vi package.json ___with following:___

```json
  "dependencies": {
   ...
   // "react": "^18.2.0",
   // "react-dom": "^18.2.0"
   "react": "npm:@preact/compat",
   "react-dom": "npm:@preact/compat"
   ...
  },
```

\$ vi vite.config.json ___with following:___

```js
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react-swc'
import preact from '@preact/preset-vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), preact()],
  resolve: {
    // react-router-dom specifies "module" field in package.json for ESM entry
    // if it's not mapped, it uses the "main" field which is CommonJS that redirects to CJS preact
    mainFields: ['module']
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setup.ts'
  }
})
```

\$ vi tsconfig.node.json ___with following:___

```json
{
  "compilerOptions": {
   ...
   "strict": true
  },
  ...
}
```

\$ vi tsconfig.json ___with following:___

```json
{
  "compilerOptions": {
   ...
   "paths": {
      "react": ["./node_modules/preact/compat/"],
      "react-dom": ["./node_modules/preact/compat/"]
    },

    /* Bundler mode */
   ...
   "jsxImportSource": "preact",
   ...
}
```

Bring pnpm lock up in sync ___execute following:___

```bash
pnpm install --force
```

## OPTIONAL: Swap out Preact with React for debugging or compatibility issues

\$ pnpm remove preact @babel/core @preact/preset-vite @stylistic/eslint-plugin-ts

\$ pnpm add react react-dom

\$ vi tsconfig.json ___delete following:___

```json
{
  "compilerOptions": {
   ...
   // "paths": {
   //    "react": ["./node_modules/preact/compat/"],
   //    "react-dom": ["./node_modules/preact/compat/"]
   //  },

    /* Bundler mode */
   ...
   // "jsxImportSource": "preact",
   ...
}
```

\$ vi vite.config.json ___with following:___

```js
...
//import preact from '@preact/preset-vite'
import react from '@vitejs/plugin-react-swc'
...
export default defineConfig({
   resolve: {
      //mainFields: ['module'],
      ...
   },
   plugins: [
      ...
      //preact()
      react()
   ],
   ...
})
```

Bring pnpm lock up in sync ___execute following:___

```bash
pnpm install --force
```

## Add local server for testing build

\$ pnpm add -D http-server

\$ vi package.json ___with following:___

```json
{
   ...
   "scripts": {
      ...
      "dist": "pnpm run build && http-server dist",
      ...
   },
}
```

## Shadcn UI installation, configuration

[Shadcn/ui Installation](https://ui.shadcn.com/docs/installation)

[Shadcn/ui Vite specific installation instructions](https://ui.shadcn.com/docs/installation/vite)

[Tutorial video for Shadcn/ui](https://www.youtube.com/watch?v=7MKEOfSP2s4)

Add Tailwind and its configuration:

```bash
pnpm add -D tailwindcss postcss autoprefixer
 
pnpx tailwindcss init -p
```

\$ vi tsconfig.json ___with following:___

```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}
```

\$ pnpm add -D @types/node

\$ vi vite.config.ts ___with following:___

```js
...
import path from "path"
...
export default defineConfig({
   ...
   resolve: {
      ...
      alias: {
      "@": path.resolve(__dirname, "./src"),
      },
      ...
  },
})
```

Run the CLI

\$ pnpx shadcn-ui@latest init

```text
1. Would you like to use TypeScript (recommended)? no / yes

2. Which style would you like to use? › Default

3. Which color would you like to use as base color? › Slate

4. Where is your global CSS file? › › src/index.css

5. Would you like to use CSS variables for colors? › no / yes

6. Are you using a custom tailwind prefix eg. tw-/ (leave blank if not)

7. Where is your tailwind.config.js located? › tailwind.config.js

8. Configure the import alias for components: › @/components

9. Configure the import alias for utils: › @/lib/utils

10. Are you using React Server Components? › no / yes (no)

11. Write configuration to components.json. proceed/ (yes)
```

Example usage:

[Shadcn Button doc](https://ui.shadcn.com/docs/components/button)

Add a button component to your project:

```bash
pnpx shadcn-ui@latest add button
```

Use the button component in code:

```js
import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

\$ vi .eslintrc ___with following:___

```json
"rules": {
   ...
    "import/prefer-default-export": "off",
   ...
}
```

\$ vi .eslintignore ___with following:___

```text
...
tailwind.config.js
postcss.config.js
```

## Other note worthy UI library

[NextUI component library](https://nextui.org/docs/guide/introduction)

[AceternityUI component library](https://ui.aceternity.com/components)
