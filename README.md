# jumba-cuddles-native

React native styled components

## Installation

```sh
npm i
```

## Usage

```js
// ...

<MainButton
  status="primary"
  variant="primary"
  title="Primary Icon Button Variant"
  buttonWidth="85%"
  icon={
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#FFF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Circle cx="11" cy="11" r="7" />
      <Path d="m21 21-4.3-4.3" />
    </Svg>
  }
  onClick={() => console.log('Disabled Button Clicked')}
/>
```

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
