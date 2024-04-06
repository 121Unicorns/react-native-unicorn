# react-native-unicorn

A customizable UI component library for react-native and expo

## Installation

```
npm i react-native-unicorn
```

## Usage

#### Components available in this library are as follows:

| Component | Description                |
| :------------- | :------------------------- |
| [Accordion]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#accordion")| A customizable accordion-style list component for React Native applications. It allows you to display a list of items with expandable content sections. |
|[Avatar]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#avatar")| A customizable image component for displaying user avatars or other images in different shapes and sizes. |
|[Bar Graph]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#bar-graph")| A customizable bar graph component that allows you to display a bar graph. |
|[Bouncing Dots]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#bouncing-dots")| A customizable loading animation component for that displays a series of dots bounce in a sequence |
|[Card]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#card")| A customizable card component that allows you to display content within a styled card layout.|
|[Carousel]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#carousel")| A customizable carousel component that allows you to display a list of items in a horizontally scrollable carousel layout.|
|[Checkbox]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#checkbox")| A customizable checkbox component allows you to display a checkbox with a label.|
|[Circular Graph]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#circular-graph")| A a customizable circular graph component that allows you to display a circular progress graph with an optional percentage label in the center. |
|[Countdown Timer]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#countdown-timer")| A is a customizable countdown component that  allows you to display a countdown timer that triggers a callback function when the time is up. |
|[Counter Box]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#counter-box")| A customizable counter component that allows you to display a counter with increment and decrement buttons.|
|[Custom Input]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#custom-input")| A customizable Text Input component that allows you to display a text input field with optional icon, placeholder, and custom styles.|
|[DropDown]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#dropdown")| A customizable dropdown component that displays a dropdown list with selectable options, each of which can have an optional icon. |
|[Grid]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#grid")| A customizable grid component that displays a table-like structure with rows and columns.|
|[OTP Input]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#otp-input")| A customizable One-Time Password (OTP) input component that displays a series of input fields for OTP entry.|
|[Password Input]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#password-input")| A customizable password input component.|
|[Phone Input]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#phone-input")| A customizable phone number component that allows you to display a phone number input field with an integrated country code picker|
|[Radio Button]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#radio-button")| A customizable radio button that allows you to display a group of radio buttons with selectable options.|
|[Vertical Stepper]("https://github.com/121Unicorns/react-native-unicorn/edit/main/README.md#vertical-stepper")| A customizable vertical stepper component.|

<br>

## Components

<details>
<summary>
  <h3>Accordion</h3>
</summary>
<br>

The ```Accordion``` component is a versatile, customizable accordion-style list component for React Native applications. It allows you to display a list of items with expandable content sections.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|data | An array of objects, where each object represents an accordion item. Each object should have the following properties:</br><ul><li>title: The title of the accordion item. <li>component: The content to be displayed when the accordion item is expanded.</li> <li>expanded: A boolean indicating whether the accordion item is initially expanded or not.</li></ul>|
|viewStyle| A string representing additional Tailwind CSS classes to be applied to the accordion item container.|
|textStyle| A TextStyle object for customizing the style of the accordion item title. It uses default css|
|dividerColor| A string representing the color of the divider line that appears when an accordion item is expanded.|
|pageSize| A number representing the number of accordion items to be displayed per page. If this prop is provided, pagination buttons will be displayed.|

#### Example

```javascript
import Accordion from 'react-native-unicorn/accordion'

  <Accordion
    data={[
      {
        title: 'First Item',
        component: <Text>First Item Content</Text>,
        expanded: false,
      },
      {
        title: 'Second Item',
        component: <Text>Second Item Content</Text>,
        expanded: false,
      },
    ]}
    viewStyle="bg-white"
    textStyle={{ color: 'blue' }}
    dividerColor="red"
    pageSize={5}
    pageButtonStyle="bg-blue-500"
  />
```
<br>
<div style={flex-direction: row}>
<img alt="accordion" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/accordion.gif" height="600" width="270"/>
<img alt="paged-accordion" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/accordion-2.gif" height="600" width="270"/>
</div>
</details>

<details>
  <summary>
<h3>Avatar</h3></summary>

The ```Avatar``` component is a customizable image component for React Native applications. It allows you to display user avatars or other images in different shapes and sizes.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|source| The image source for the avatar. This can be a local asset or a URL to a remote image.|
|variant| The shape of the avatar. This can be one of the following::</br><ul><li>'circle': The avatar will be displayed as a circle.</li><li>'square': The avatar will be displayed as a square.</li><li>'drop': The avatar will be displayed as a droplet shape, with a rounded top and a flat bottom.</li></ul>|
|size| The size of the avatar in pixels. This will determine both the width and the height of the avatar.|
|style| Additional Tailwind CSS classes to be applied to the avatar.|

#### Example

```javascript
import Avatar from 'react-native-unicorn/avatar'

  <Avatar
    source={{ uri: 'https://example.com/avatar.jpg' }}
    variant="circle"
    size={100}
    style="bg-blue-500"
  />
```
<br>
<div style={flex-direction: row}>
<img alt="square-avatar" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/avatar.png" height="600" width="270"/>
</div>
</details>

<details>
<summary>
  <h3>Bar Graph</h3>
</summary>

The ```BarGraph``` component is a customizable bar graph component for React Native applications. It allows you to display a bar graph with different statuses based on the percentage provided.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|percentage| A number representing the percentage to be displayed by the bar graph. This value should be between 0 and 100.|
|barColor| An optional string representing the color of the active bars in the graph. If not provided, the default color will be used.|
|inactiveColor| An optional string representing the color of the inactive bars in the graph. If not provided, the default color will be used.|

#### Example

```javascript
import BarGraph from 'react-native-unicorn/bar-graph'

  <BarGraph
    percentage={75}
    barColor="[#E4959E]"
    inactiveColor="neutral-100"
  />
```
<br>
<div>
<img alt="bar graph" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/bargraph.png" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>Bouncing Dots</h3></summary>

The ```BouncingDots``` component is a customizable loading animation component that displays a series of dots that bounce in a sequence, creating a smooth loading animation.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|dots| The number of dots to display. Default is 3.|
|colors| An array of colors for the dots.|
|size| The size of the dots in pixels. Default is 10.|
|bounceHeight| The height of the bounce in pixels. Default is 10.|
|borderRadius| The border radius of the dots. If not provided, the dots will be circular.|
|components| An array of custom components to use instead of dots.|

#### Example

```javascript
import BouncingDots from 'react-native-unicorn/dots'

  <BouncingDots
    dots={5}
    colors={['red', 'green', 'blue', 'yellow', 'purple']}
    size={15}
    bounceHeight={15}
  />
```
<br>
<div>
<img alt="dots" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/dots.gif" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>Card</h3></summary>

The ```Card``` component is a customizable card component that allows you to display content within a styled card layout.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|children|The content to be displayed within the card.|
|viewStyle|An optional string representing additional Tailwind CSS classes to be applied to the card.|
|props|Any additional props to be passed to the underlying TouchableOpacity component.|

#### Example

```javascript
import Card from 'react-native-unicorn/card'

  <Card viewStyle={'p-2 m-4 justify-center flex-1'}>
    <View style={{ height: 50, justifyContent: 'center' }}>
      <Text>This is a card.</Text>
    </View>
  </Card>  
```
<br>
<div>
<img alt="card" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/card.png" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>Carousel</h3></summary>

The ```Carousel``` component is a customizable carousel component that allows you to display a list of items in a horizontally scrollable carousel layout.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|data|An array of items to be displayed in the carousel.|
|renderComponent|The component to be rendered in ths carousel|
|autoplayInterval|An optional number representing the interval (in milliseconds) at which the carousel should automatically scroll to the next item. Default is 3000 (3 seconds).|

#### Example

```javascript
import Carousel from 'react-native-unicorn/dots'

  <Carousel
    data={[{ title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }]}
    renderComponent={(item, index) => <Text>{item.title}</Text>}
    autoplayInterval={5000}
  />
```
<br>
<div>
<img alt="carousel" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/carousel.gif" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>Checkbox</h3></summary>

The `Checkbox` component is a customizable checkbox component that allows you to display a list of items in a horizontally scrollable checkbox layout.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|label| The label to be displayed next to the checkbox.|
|onSelect| A function that is called when the checkbox is selected or deselected. The function receives a boolean argument indicating whether the checkbox is checked.|
|isChecked| An optional boolean indicating whether the checkbox is initially checked. Default is false.|
|color| An optional string representing the color of the checkbox when it is checked. If not provided, the default color is used.|
|width| An optional string representing the width of the checkbox. If not provided, the default width is '100%'.|
|textStyle| An optional TextStyle object for customizing the style of the label.|

#### Example

```javascript
import Checkbox from 'react-native-unicorn/checkbox';

<View
  style={{
    width: Dimensions.get('window').width,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }}
>
  <Checkbox
    label={'Default Checked'}
    onSelect={() => {}}
    color="blue-500"
    isChecked={true}
  />
  <Checkbox
    label={'Default Unchecked'}
    onSelect={() => {}}
    color="red-500"
    isChecked={false}
  />
</View>
```

<br>
<div>
<img alt="checkbox" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/checkbox.png" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>CircularGraph</h3></summary>

The `CircularGraph` component is a customizable circularGraph component that allows you to display a list of items in a horizontally scrollable circularGraph layout.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|percentage| A number representing the percentage to be displayed by the circular graph. This value should be between 0 and 100.|
|radius| The radius of the circular graph in pixels.
|strokeWidth| The width of the stroke used to draw the circular graph in pixels.|
|strokeColor| An optional string representing the color of the progress stroke. If not provided, the default color is used.|
|displayText| An optional boolean indicating whether to display the percentage text in the center of the graph. Default is false.|

#### Example

```javascript
import CircularGraph from 'react-native-unicorn/circular-graph';

<View
  style={{
    width: Dimensions.get('window').width,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }}
>
  <CircularGraph
    percentage={25}
    radius={35}
    strokeWidth={12}
    strokeColor="#048BA8"
    displayText={true}
  />
  <CircularGraph
    strokeColor="#F18F01"
    percentage={35}
    radius={35}
    strokeWidth={12}
    displayText={true}
  />
  <CircularGraph
    percentage={75}
    radius={35}
    strokeWidth={12}
    displayText={true}
  />
</View>
```

<br>
<div>
<img alt="circular-graph" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/circular.png" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>Countdown</h3></summary>

The `Countdown` component is a customizable countdown component that allows you to display a countdown timer that triggers a callback function when the time is up.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|seconds|The initial number of seconds for the countdown.|
|onTimeUp|A function that is called when the countdown reaches zero.|
|textStyle|An optional TextStyle object for customizing the style of the countdown text.|

#### Example

```javascript
import Countdown from 'react-native-unicorn/countdown';

<View
  style={{
    width: Dimensions.get('window').width,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }}
>
  <Countdown
    seconds={120}
    onTimeUp={() => {
      Alert.alert("Time's up!");
    }}
  />
</View>
```

<br>
<div>
<img alt="countdown" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/countdown.gif" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>CounterBox</h3></summary>

The `CounterBox` component is a customizable CounterBox component that allows you to display a counter with increment and decrement buttons.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|onTextChanged|A function that is called when the counter value changes. The function receives the new counter value as a string.|
|counterValue|An optional number representing the initial value of the counter. Default is 1.|
|title|An optional string representing the title to be displayed above the counter.|
|textStyle|An optional TextStyle object for customizing the style of the counter text.|
|viewStyle|An optional string representing additional Tailwind CSS classes to be applied to the counter.|

#### Example

```javascript
import CounterBox from 'react-native-unicorn/counterBox';

<View
  style={{
    width: Dimensions.get('window').width,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }}
>
  <CounterBox
    onTextChanged={(value) => console.log(`Counter value is ${value}`)}
    counterValue={10}
    title="Quantity"
    textStyle={{ fontSize: 20 }}
    viewStyle="bg-red-500"
    />
</View>
```

<br>
<div>
<img alt="counter-box" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/counterbox.png" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>CustomInput</h3></summary>

The `CustomInput` component is a customizable TextInput component that allows you to display a text input field with optional icon, placeholder, and custom styles.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|onTextChange|A function that is called when the text in the input field changes. The function receives the new text as a string.|
|variant|A string representing the variant of the input field. This determines the height and multiline property of the input field. The accepted values are 'small', 'medium', and 'large'.|
|placeholder|A string representing the placeholder text to be displayed in the input field.|
|placeholderTextColor|An optional string representing the color of the placeholder text.|
|viewStyle|An optional string representing additional Tailwind CSS classes to be applied to the input field.|
|textStyle|An optional TextStyle object for customizing the style of the text in the input field.|
|icon|An optional React Node to be displayed next to the input field.|
|disabled|An optional boolean indicating whether the input field is disabled.|
|caps|An optional boolean indicating whether the text in the input field should be auto-capitalized.|
|length|An optional number representing the maximum length of the text in the input field.|
|inputMode|An optional string representing the input mode of the input field.|
|props|Any additional props to be passed to the underlying TextInput component.|

#### Example

```javascript
import Input from 'react-native-unicorn/custom-input';

<View
  style={{
    width: Dimensions.get('window').width,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }}
>
  <Input
    variant="medium"
    placeholder="Medium Input"
    onTextChange={(text: string) => {
      console.log(text);
    }}
  />
</View>
```

<br>
<div>
<img alt="custom-input" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/input.png" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>DropDown</h3></summary>

The `DropDown` component is a customizable dropdown component that displays a dropdown list with selectable options, each of which can have an optional icon.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|options|An array of objects representing the options to be displayed in the dropdown. Each object should have an id, label, and value property, and an optional icon property.|
|onSelect|A function that is called when an option is selected. The function receives the value of the selected option.|
|title|A string representing the title to be displayed on the dropdown button.|
|viewStyle|An optional string representing additional Tailwind CSS classes to be applied to the dropdown button.|
|textStyle|An optional TextStyle object for customizing the style of the text in the dropdown button and options.|

#### Example

```javascript
import DropDown from 'react-native-unicorn/dropdown';

<View
  style={{
    width: Dimensions.get('window').width,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }}
>
  <DropDown
    options={[
        { id: '1', label: 'Option 1', value: '1', icon: <Icon name="home" /> },
        { id: '2', label: 'Option 2', value: '2' },
    ]}
    onSelect={(value) => console.log(`Selected value is ${value}`)}
    title="Select an option"
    />
</View>
```

<br>
<div>
<img alt="dropdown" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/dropdown.gif" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>Grid</h3></summary>

The `Grid` component is a customizable grid component that displays a table-like structure with rows and columns.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|data|An array of objects representing the data to be displayed in the grid. Each object should have properties corresponding to the keys provided in the `keys` prop.|
|columns|An array of strings representing the column headers of the grid.|
|keys|An array of strings representing the keys of the data objects. The order of the keys determines the order of the columns in the grid.|
|textStyle|An optional TextStyle object for customizing the style of the text in the grid cells.|

#### Example

```javascript
import { Grid } from 'react-native-unicorn/grid';

<Grid
  data={[
    { id: '1', name: 'John Doe', age: 30 },
    { id: '2', name: 'Jane Doe', age: 25 },
  ]}
  columns={['ID', 'Name', 'Age']}
  keys={['id', 'name', 'age']}
/>
```

<br>
<div>
<img alt="grid" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/grid.png" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>OTPInput</h3></summary>

The `OTPInput` component is a customizable One-Time Password (OTP) input component that displays a series of input fields for OTP entry. Long pressing on the first cell allows users to paste the OTP in all the cells.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|length|The number of digits in the OTP.|
|value|The initial value of the OTP.|
|onOtpChange|A function that is called when the OTP value changes. The function receives the new OTP value.|
|incorrect|A boolean indicating whether the entered OTP is incorrect. If true, the input fields are highlighted in red.|
|textStyle|An optional TextStyle object for customizing the style of the text in the input fields.|
|viewStyle|An optional string representing additional Tailwind CSS classes to be applied to the container view of the input fields.|

#### Example

```javascript
import { OTPInput } from './otp-input';

<OTPInput
  length={6}
  onOtpChange={(value) => console.log(`OTP value is ${value}`)}
  incorrect={false}
  textStyle={{ color: 'black', fontSize: 16 }}
/>
```

<br>
<div>
<img alt="otp-input" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/otp.gif" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>PasswordInput</h3></summary>

The `PasswordInput` component is a customizable password input component for React Native applications. It allows you to display a password input field with an integrated show/hide password toggle.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|onChangePassword|A function that is called when the password value changes. The function receives the new password value.|
|placeholder|An optional string representing the placeholder text to be displayed in the input field.|
|placeholderTextColor|An optional string representing the color of the placeholder text.|
|textStyle|An optional TextStyle object for customizing the style of the text in the input field.|
|viewStyle|An optional string representing additional Tailwind CSS classes to be applied to the container view of the input field.|
|disabled|An optional boolean indicating whether the input field is disabled.|
|props|An optional object containing additional TextInputProps to be passed to the TextInput component.|

#### Example

```javascript
import { PasswordInput } from './password-input';

  <PasswordInput
    onChangePassword={(text: string) => console.log(text)}
  />
```

<br>
<div>
<img alt="password-input" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/password.gif" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>PhoneNumberInput</h3></summary>

The `PhoneNumberInput` component is a customizable phone number component that allows you to display a phone number input field with an integrated country code picker.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|onPhoneNumberChange|A function that is called when the phone number value changes. The function receives the new phone number value.|
|placeholderTextColor|An optional string representing the color of the placeholder text.|
|placeholder|An optional string representing the placeholder text to be displayed in the input field.|
|textStyle|An optional TextStyle object for customizing the style of the text in the input field.|
|viewStyle|An optional string representing additional Tailwind CSS classes to be applied to the container view of the input field.|
|codeStyle|An optional string representing additional Tailwind CSS classes to be applied to the country code picker.|
|props|An optional object containing additional TextInputProps to be passed to the TextInput component.|
|disabled|An optional boolean indicating whether the input field is disabled.|
|codes|An optional array of strings representing the country codes to be displayed in the country code picker.|

#### Example

```javascript
import { PhoneNumberInput } from './phone-input';

  <PhoneNumberInput
    onPhoneNumberChange={(text: string) => console.log(text)}
  />

  <PhoneNumberInput
     onPhoneNumberChange={(text: string) => console.log(text)}

     viewStyle="my-4"
     codes={['KE', 'UG', 'TZ']}
  />
```

<br>
<div>
<img alt="phone-input" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/phone.gif" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>RadioButton</h3></summary>

The `RadioButton` component is a customizable radio button that allows you to display a group of radio buttons with selectable options.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|data|An array of objects representing the options to be displayed as radio buttons. Each object should have an id and label property.|
|type|A string representing the type of the radio button.|
|onSelect|A function that is called when a radio button is selected. The function receives the value of the selected option.|
|orientation|A string representing the orientation of the radio buttons. It can be 'horizontal' or 'vertical'.|
|viewStyle|An optional string representing additional Tailwind CSS classes to be applied to the container view of the radio buttons.|
|textStyle|An optional TextStyle object for customizing the style of the text in the radio buttons.|
|width|An optional string representing the width of the radio buttons.|
|defaultSelected|An optional object representing the default selected option.|

#### Example

```javascript
import { RadioButton } from './radio-button';

  <RadioButton
    data={[
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
    ]}
    onSelect={(item: any) => {
                console.log(item.name);
              }}
    type={''}
    orientation={'row'}
  />
```

<br>
<div>
<img alt="radio-button" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/radiobutton.gif" height="600" width="270"/>
</div>
</details>

<details>
<summary><h3>VerticalStepper</h3></summary>

The `VerticalStepper` component is a customizable vertical stepper component for React Native applications. It allows you to display a series of steps in a vertical layout.

The component accepts the following props:

| Props | Description                |
| :-------- | :------------------------- |
|steps|An array of objects representing the steps to be displayed in the stepper. Each object should have a title and component property, and an optional pointStyle property.|
|viewStyle|An optional string representing additional Tailwind CSS classes to be applied to the container view of the stepper.|
|textStyle|An optional TextStyle object for customizing the style of the text in the stepper.|

#### Example

```javascript
import { VerticalStepper } from './vertical-stepper';

<VerticalStepper
  steps={[
    { title: 'Step 1', component: <Text>Step 1 Content</Text> },
    { title: 'Step 2', component: <Text>Step 2 Content</Text>, pointStyle: 'bg-red-500' },
  ]}
  viewStyle="bg-blue-500 my-5"
/>
```

In this example, the `VerticalStepper` component is used to display a vertical stepper with two steps: 'Step 1' and 'Step 2'. The content of each step is a Text component. The point of 'Step 2' has a red background. The container view of the stepper has a blue background. The text in the stepper is white and has a font size of 16.

<br>
<div>
<img alt="vertical-stepper" src="https://github.com/121Unicorns/react-native-unicorn/blob/main/screenshots/stepper.png" height="600" width="270"/>
</div>
</details>
