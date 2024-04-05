# react-native-unicorn

Customizable UI component library for react native and expo

## Installation

```sh
npm i react-native-unicorn
```

## Usage

```js
import { MainButton } from 'react-native-unicorn/main-button';
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
/>;
```

```js
import { Accordion } from 'react-native-unicorn/accordion';
// ...

const accordionData = [
  {
    title: 'First Title',
    component: (
      <Text style={{ fontFamily: 'OutfitBold' }}>This is the first text</Text>
    ),
    expanded: false,
  },
  {
    title: 'Second Title',
    component: (
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ width: 75, height: 75 }}
          source={{
            uri: 'https://picsum.photos/100',
          }}
        />
        <Text
          style={{ fontFamily: 'OutfitBold', marginHorizontal: 5, flex: 1 }}
        >
          Your component can also have images and perform actions.
        </Text>
      </View>
    ),
    expanded: false,
  },
  {
    title: 'Third Title',
    component: (
      <Text style={{ fontFamily: 'OutfitBold' }}>This is the third text</Text>
    ),
    expanded: false,
  },
];

<Accordion data={accordionData} textStyle={{ fontFamily: 'OutfitBold' }} />;
```

```js
import { Accordion } from 'react-native-unicorn/accordion';
// ...

const paginatedAccordionData = [
  {
    title: 'First Title',
    component: (
      <Text style={{ fontFamily: 'OutfitBold' }}>This is the first text</Text>
    ),
    expanded: false,
  },
  {
    title: 'Second Title',
    component: (
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ width: 75, height: 75 }}
          source={{
            uri: 'https://picsum.photos/100',
          }}
        />
        <Text
          style={{ fontFamily: 'OutfitBold', marginHorizontal: 5, flex: 1 }}
        >
          Your component can also have images and perform actions.
        </Text>
      </View>
    ),
    expanded: false,
  },
  {
    title: 'Third Title',
    component: (
      <Text style={{ fontFamily: 'OutfitBold' }}>This is the third text</Text>
    ),
    expanded: false,
  },
  {
    title: 'Fourth Title',
    component: (
      <Text style={{ fontFamily: 'OutfitBold' }}>This is the first text</Text>
    ),
    expanded: false,
  },
  {
    title: 'Fifth Title',
    component: (
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ width: 75, height: 75 }}
          source={{
            uri: 'https://picsum.photos/100',
          }}
        />
        <Text
          style={{ fontFamily: 'OutfitBold', marginHorizontal: 5, flex: 1 }}
        >
          Your component can also have images and perform actions.
        </Text>
      </View>
    ),
    expanded: false,
  },
  {
    title: 'Sixth Title',
    component: (
      <Text style={{ fontFamily: 'OutfitBold' }}>This is the third text</Text>
    ),
    expanded: false,
  },
  {
    title: 'Seventh Title',
    component: (
      <Text style={{ fontFamily: 'OutfitBold' }}>This is the first text</Text>
    ),
    expanded: false,
  },
  {
    title: 'Eighth Title',
    component: (
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ width: 75, height: 75 }}
          source={{
            uri: 'https://picsum.photos/100',
          }}
        />
        <Text
          style={{ fontFamily: 'OutfitBold', marginHorizontal: 5, flex: 1 }}
        >
          Your component can also have images and perform actions.
        </Text>
      </View>
    ),
    expanded: false,
  },
  {
    title: 'Ninth Title',
    component: (
      <Text style={{ fontFamily: 'OutfitBold' }}>This is the third text</Text>
    ),
    expanded: false,
  },
  {
    title: 'Tenth Title',
    component: (
      <Text style={{ fontFamily: 'OutfitBold' }}>This is the first text</Text>
    ),
    expanded: false,
  },
  {
    title: 'Eleventh Title',
    component: (
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ width: 75, height: 75 }}
          source={{
            uri: 'https://picsum.photos/100',
          }}
        />
        <Text
          style={{ fontFamily: 'OutfitBold', marginHorizontal: 5, flex: 1 }}
        >
          Your component can also have images and perform actions.
        </Text>
      </View>
    ),
    expanded: false,
  },
  {
    title: 'Twelfth Title',
    component: (
      <Text style={{ fontFamily: 'OutfitBold' }}>This is the third text</Text>
    ),
    expanded: false,
  },
];

<Accordion
  data={paginatedAccordionData}
  textStyle={{ fontFamily: 'OutfitBold' }}
  pageSize={4}
/>;
```

```js
import { Carousel } from 'react-native-unicorn/carousel';
// ...

<Carousel
  data={carouselData}
  renderComponent={(item) => {
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          padding: 5,
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: '100%',
            borderRadius: 5,
            borderColor: '#94A3B8',
            borderWidth: 1,
            padding: 10,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontFamily: 'Outfit' }}>{item.title}</Text>
          <Image
            style={{ height: 120, width: 120, marginTop: 10 }}
            source={item.image}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }}
  autoplayInterval={2000}
/>;
```

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
