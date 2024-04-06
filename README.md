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
| [Accordion]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#accordion")| A customizable accordion-style list component for React Native applications. It allows you to display a list of items with expandable content sections. |
|[Avatar]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#avatar")| A customizable image component for displaying user avatars or other images in different shapes and sizes. |
|[Bar Graph]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#bar-graph")| A customizable bar graph component that allows you to display a bar graph. |
|[Bouncing Dots]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#bouncing-dots")| A customizable loading animation component for that displays a series of dots bounce in a sequence |
|[Card]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#card")| A customizable card component that allows you to display content within a styled card layout.|
|[Carousel]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#carousel")| A customizable carousel component that allows you to display a list of items in a horizontally scrollable carousel layout.|
|[Checkbox]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#checkbox")| A customizable checkbox component |
|[Circular Graph]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#circular-graph")| A a customizable circular graph component that allows you to display a circular progress graph with an optional percentage label in the center. |
|[Countdown Timer]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#countdown-timer")| A is a customizable countdown component that  allows you to display a countdown timer that triggers a callback function when the time is up. |
|[Counter Box]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#counter-box")| A customizable counter component that allows you to display a counter with increment and decrement buttons.|
|[Custom Input]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#custom-input")| A component for |
|[DropDown]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#dropdown")| A component for |
|[Grid]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#grid")| A component for |
|[OTP Input]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#otp-input")| A component for |
|[Password Input]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#password-input")| A component for |
|[Phone Input]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#phone-input")| A component for |
|[Radio Button]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#radio-button")| A component for |
|[Vertical Stepper]("https://github.com/121Unicorns/react-native-unicorn/main/README.md#vertical-stepper")| A component for |


## Components

## Accordion

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
<img alt="accordion" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
<img alt="paged-accordion" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>

<br>

## Avatar

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
<img alt="square-avatar" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
<img alt="circle-avatar" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
<img alt="drop-avatar" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>

## Bar Graph

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
    barColor="green"
    inactiveColor="gray"
  />
```
<br>
<div>
<img alt="bar graph" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>

## Bouncing Dots

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

  <BouncingDots size={30} bounceHeight={50} />
```
<br>
<div>
<img alt="dots" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>


## Card

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

  <Card
    dots={5}
    colors={['red', 'green', 'blue', 'yellow', 'purple']}
    size={15}
    bounceHeight={15}    
  />    
```
<br>
<div>
<img alt="card" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>

## Carousel

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
<img alt="carousel" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>


## Checkbox

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
    textStyle={{ fontFamily: 'Outfit' }}
  />
  <Checkbox
    label={'Default Unchecked'}
    onSelect={() => {}}
    color="red-500"
    isChecked={false}
    textStyle={{ fontFamily: 'Outfit' }}
  />
</View>
```

<br>
<div>
<img alt="checkbox" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>

## CircularGraph

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
<img alt="circular-graph" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>

## Countdown

The `Countdown` component is a customizable countdown component that  allows you to display a countdown timer that triggers a callback function when the time is up.

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
    textStyle={{ fontFamily: 'OutfitBold' }}
  />
</View>
```

<br>
<div>
<img alt="countdown" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>

## CounterBox

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
    textStyle={{ color: 'blue', fontSize: 20 }}
    viewStyle="bg-red-500"
    />
</View>
```

<br>
<div>
<img alt="counter-box" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>

## CustomInput

The `CustomInput` component is a customizable CustomInput component that allows you to display a text input field with optional icon, placeholder, and custom styles.

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
import CustomInput from 'react-native-unicorn/custom-input';

<View
  style={{
    width: Dimensions.get('window').width,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }}
>
  <CustomInput
    onTextChange={(text) => console.log(`Input text is ${text}`)}
    variant="medium"
    placeholder="Enter text"
    placeholderTextColor="gray"
    viewStyle="bg-white"
    textStyle={{ color: 'black', fontSize: 16 }}
    icon={<Icon name="search" />}
    disabled={false}
    caps={false}
    length={100}
    inputMode="text"
   />
</View>
```

<br>
<div>
<img alt="custom-input" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>

## DropDown

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
    viewStyle="bg-blue-500"
    textStyle={{ color: 'white', fontSize: 16 }}
    />
</View>
```

<br>
<div>
<img alt="dropdown" src="https://via.placeholder.com/180x240?text=App+Screenshot+Here"/>
</div>
