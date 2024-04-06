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
| `Accordion` | A customizable accordion-style list component for React Native applications. It allows you to display a list of items with expandable content sections. |
| `Avatar` | A customizable image component for displaying user avatars or other images in different shapes and sizes. |
| `Bar Graph` | A customizable bar graph component that allows you to display a bar graph. |
| `Bouncing Dots` | A customizable loading animation component for that displays a series of dots bounce in a sequence |
| `Card` | A customizable card component that allows you to display content within a styled card layout.|
| `Carousel` | A customizable carousel component that allows you to display a list of items in a horizontally scrollable carousel layout.|
| `Checkbox` | A customizable checkbox component |
| `Circular Graph` | A component for |
| `Countdown Timer` | A component for |
| `Counter Box` | A component for |
| `Custom Input` | A component for |
| `Dropdown` | A component for |
| `Grid` | A component for |
| `OTP Input` | A component for |
| `Password Input` | A component for |
| `Phone Input` | A component for |
| `Radio Button` | A component for |
| `Vertical Stepper` | A component for |


## Components



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
