# 📚 Components
This package includes all of our universal components across all project.

<br>

## Installation and usage
Simply after installing `u-pack` package described in [HERE](../README.md) you'll be able to use components like this:
```js
// import components you like
import { Button } from 'u-pack/components';

const App = () => (
  <div>
    <Button label="Hello world">
  </div>
)
```

<br>

## Development guide
In order to develop these components you need to first clone the `u-pack` repository and then run `yarn` in `ucomponents` directory.

This package uses [Rollup](https://rollupjs.org/) to compile and bundle the components.

Components are built with Typescript and we're using linter to make sure that we're following the best practices and coding style.

<br>

## Building
To build the project each time you change something in the `ucomponents` directory you need to run 
```
yarn rollup
```
This will generate a `dist` directory with all the components inside.

<br>
<br>

## Components list
- [`<Button />`](./src/components/Button/readme.md)
- [`<Title />`](./src/components/Title/readme.md)
- [`<Text />`](./src/components/Text/readme.md)
