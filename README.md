## Project status

New development effort is focused on [css-attrs](https://github.com/mingshuisheng/css-attrs)

## Style On Props

support css property and custom attr on element component

### install

#### npm

```shell
npm install solid-props-style
```

#### yarn

```shell
yarn add solid-props-style
```

#### pnpm

```shell
pnpm add solid-props-style
```

### use css property on component

```jsx
import { Div } from "solid-props-style";
/* 
    <div class="css-140g70h">666</div>
    <style>
        .css-140g70h {
            background-color: green;
            color: red;
        }
    </style>
*/
function App() {
  return (
    <Div backgroundColor="green" color="red">
      666
    </Div>
  );
}
```

### use css var on component

```jsx
import { Div } from "solid-props-style";

/* 
    <div class="css-1t136mt">666</div>
    <style>
        .css-1t136mt {
            --my-data: blue
        }
    </style>
*/
function App() {
  return <Div var:my-data="blue">666</Div>;
}
```

### add attr to tag

```jsx
import { Div } from "solid-props-style";

// <div my-attr="my-value"></div>
function App() {
  return (
    <Div attr:my-attr="my-value">
      open develop tool you will see the my-attr="my-value"
    </Div>
  );
}
```
