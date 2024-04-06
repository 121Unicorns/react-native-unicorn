import React from 'react';

import {
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';

import { Accordion } from '../../accordion';
import { Carousel } from '../../carousel';
import { Countdown } from '../../countdown';
import { CustomChip } from '../../chip';
import { Checkbox } from '../../checkbox';
import { RadioButton } from '../../radio-button';
import { CounterBox } from '../../counter-box';
import { PasswordInput } from '../../password-input';
import { PhoneNumberInput } from '../../phone-input';
import { OTPInput } from '../../otp-input';
import { Grid } from '../../grid';
import { Card } from '../../card';
import { DropDown } from '../../drop-down';
import { Input } from '../../custom-input';
import { Avatar } from '../../avatar';
import { CircularGraph } from '../../circular-graph';
import { BarGraph } from '../../bar-graph';
import { VerticalStepper, type Step } from '../../vertical-stepper';
import { BouncingDots } from '../../dots';
import Svg, { Circle, Path } from 'react-native-svg';
import {
  useFonts,
  Outfit_400Regular,
  Outfit_600SemiBold,
} from '@expo-google-fonts/outfit';

export default function App() {
  let [fontsLoaded] = useFonts({
    Outfit: Outfit_400Regular,
    OutfitBold: Outfit_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function __accordion() {
    const titles = [
      'First Title',
      'Second Title',
      'Third Title',
      'Fourth Title',
      'Fifth Title',
      'Sixth Title',
      'Seventh Title',
      'Eighth Title',
      'Ninth Title',
      'Tenth Title',
      'Eleventh Title',
      'Twelfth Title',
    ];

    const accordionData = [
      {
        title: 'First Title',
        component: (
          <Text style={{ fontFamily: 'OutfitBold' }}>
            This is the first text
          </Text>
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
          <Text style={{ fontFamily: 'OutfitBold' }}>
            This is the third text
          </Text>
        ),
        expanded: false,
      },
    ];

    const paginatedAccordionData = Array.from(
      { length: titles.length },
      (_, i) => {
        const isEven = i % 2 === 0;
        return {
          title: titles[i]!,
          component: isEven ? (
            <Text style={{ fontFamily: 'OutfitBold' }}>
              This is the {titles[i]?.split(' ')[0]?.toLowerCase()} text
            </Text>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 75, height: 75 }}
                source={{
                  uri: 'https://picsum.photos/100',
                }}
              />
              <Text
                style={{
                  fontFamily: 'OutfitBold',
                  marginHorizontal: 5,
                  flex: 1,
                }}
              >
                Your component can also have images and perform actions.
              </Text>
            </View>
          ),
          expanded: false,
        };
      }
    );
    return (
      <View style={{ marginVertical: 200 }}>
        <Accordion
          data={accordionData}
          textStyle={{ fontFamily: 'OutfitBold' }}
        />
        <View style={{ marginVertical: 100 }}>
          <Accordion
            data={paginatedAccordionData}
            textStyle={{ fontFamily: 'OutfitBold' }}
            pageSize={4}
          />
        </View>
      </View>
    );
  }

  function __avatar() {
    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 5,
            width: Dimensions.get('window').width,
            justifyContent: 'space-evenly',
          }}
        >
          <Avatar
            source={{ uri: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp' }}
            size={100}
            variant="circle"
          />
          <Avatar
            source={{ uri: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp' }}
            size={100}
            variant="square"
          />
          <Avatar
            source={{ uri: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp' }}
            size={100}
            variant="drop"
          />
        </View>
      </View>
    );
  }

  function __barGraph() {
    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            flexDirection: 'row',
            height: 130,
            width: 130,
            padding: 10,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          <BarGraph percentage={74} barColor="[#E4959E]" />
        </View>
      </View>
    );
  }

  function __card() {
    return (
      <View style={{ marginVertical: 200 }}>
        <Card viewStyle={'p-2 m-4 justify-center flex-1'}>
          <View style={{ height: 50, justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'OutfitBold' }}>This is a card.</Text>
          </View>
        </Card>
      </View>
    );
  }

  function __carousel() {
    const carouselData = [
      {
        id: 1,
        title: 'Welcome to the Zone',
        image: { uri: 'https://picsum.photos/200' },
      },
      {
        id: 2,
        title: 'Is a wonderful zone',
        image: { uri: 'https://picsum.photos/200' },
      },
      {
        id: 3,
        title: 'Its a lot of fun here',
        image: { uri: 'https://picsum.photos/200' },
      },
      {
        id: 4,
        title: 'Good Luck',
        image: { uri: 'https://picsum.photos/200' },
      },
    ];
    return (
      <View style={{ marginVertical: 200 }}>
        <Text
          style={{
            marginHorizontal: 10,
            marginTop: 500,
            fontFamily: 'OutfitBold',
          }}
        ></Text>
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
        />
      </View>
    );
  }

  function __countdown() {
    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            width: Dimensions.get('window').width,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
          }}
        >
          <Text style={{ fontFamily: 'Outfit' }}>
            You have setup a countdown:{' '}
          </Text>
          <Countdown
            seconds={120}
            onTimeUp={() => {
              // Alert.alert("Time's up!");
            }}
            textStyle={{ fontFamily: 'OutfitBold' }}
          />
        </View>
      </View>
    );
  }

  function __counterBox() {
    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            padding: 5,
            width: Dimensions.get('window').width,
          }}
        >
          <CounterBox
            onTextChanged={(counter: any) => {
              console.log(counter);
            }}
            title={'Quantity: '}
          />
        </View>
      </View>
    );
  }

  function __checkbox() {
    return (
      <View style={{ marginVertical: 200 }}>
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
      </View>
    );
  }

  function __chip() {
    const chipData = [
      {
        id: 1,
        title: 'SUBMITTED',
      },
      {
        id: 2,
        title: 'APPROVED',
      },
      {
        id: 3,
        title: 'TRUCKS_ASSIGNED',
      },
      {
        id: 4,
        title: 'LOADED',
      },
      {
        id: 5,
        title: 'ARRIVED',
      },
      {
        id: 6,
        title: 'DELIVERED',
      },
      {
        id: 7,
        title: 'CANCELLED',
      },
    ];

    return (
      <View style={{ marginVertical: 200 }}>
        <SafeAreaView>
          <FlatList
            horizontal
            data={chipData}
            renderItem={({ item }) => (
              <View style={{ marginHorizontal: 2 }}>
                <CustomChip
                  status={item.title}
                  textStyle={{ fontFamily: 'OutfitBold' }}
                />
              </View>
            )}
          />
        </SafeAreaView>
      </View>
    );
  }

  function __circularGraph() {
    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            padding: 5,
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <Card
            viewStyle={'flex-row justify-evenly items-center bg-secondary py-4'}
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
          </Card>
        </View>
      </View>
    );
  }

  function __dots() {
    return (
      <View style={{ marginVertical: 200 }}>
        <BouncingDots
          dots={5}
          colors={['red', 'green', 'blue', 'yellow', 'purple']}
          size={15}
          bounceHeight={15}
        />
      </View>
    );
  }

  function __dropdown() {
    const options = [
      {
        label: 'Location',
        id: '1',
        value: {
          id: '1',
          name: 'This is a location',
          description: 'This is a location description',
        },
        icon: (
          <Image
            style={{ height: 20, width: 20, margin: 3 }}
            source={{ uri: 'https://img.icons8.com/ios/50/marker--v1.png' }}
            resizeMode="contain"
          />
        ),
      },
      {
        label: 'Package',
        id: '2',
        value: {
          id: '2',
          name: 'This is a package',
          description: 'This is a package description',
        },
        icon: (
          <Image
            style={{ height: 20, width: 20, margin: 3 }}
            source={{
              uri: 'https://img.icons8.com/ios/50/cardboard-box.png',
            }}
            resizeMode="contain"
          />
        ),
      },
      {
        label: 'Delivery',
        id: '3',
        value: {
          id: '3',
          name: 'This is a delivery',
          description: 'This is a delivery description',
        },
        icon: (
          <Image
            style={{ height: 20, width: 20, margin: 3 }}
            source={{ uri: 'https://img.icons8.com/ios/50/truck--v1.png' }}
            resizeMode="contain"
          />
        ),
      },
    ];

    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            padding: 2,
            width: Dimensions.get('window').width,
          }}
        >
          <DropDown
            options={options}
            title={'Select an option'}
            onSelect={(value: any) => {
              console.log(value);
            }}
            textStyle={{ fontFamily: 'Outfit' }}
          />
        </View>
      </View>
    );
  }

  function __grid() {
    const tableData = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Alice', age: 25 },
    ];

    const tableColumns = ['ID', 'Name', 'Age'];
    const tableKeys = ['id', 'name', 'age'];
    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            padding: 5,
            width: Dimensions.get('window').width,
          }}
        >
          <Grid data={tableData} columns={tableColumns} keys={tableKeys} />
        </View>
      </View>
    );
  }

  function __input() {
    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            padding: 5,
            width: Dimensions.get('window').width,
          }}
        >
          <Input
            variant="small"
            placeholder="Small Input"
            onTextChange={(text: string) => {
              console.log(text);
            }}
            viewStyle={'justify-center items-center mb-2'}
            icon={
              <Svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF5525"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <Path d="M18 20a6 6 0 0 0-12 0" />
                <Circle cx="12" cy="10" r="4" />
                <Circle cx="12" cy="12" r="10" />
              </Svg>
            }
            disabled={true}
          />
          <Input
            variant="medium"
            placeholder="Medium Input"
            onTextChange={(text: string) => {
              console.log(text);
            }}
          />
        </View>
      </View>
    );
  }

  function __radioButton() {
    const radioButtonData = [
      {
        id: 101,
        name: 'First Option',
        description:
          "This is the first option. You can add a description to it if you'd like.",
      },
      {
        id: 102,
        name: 'Second Option',
        description:
          "This is the second option. You can add a description to it if you'd like.",
      },
      {
        id: 103,
        name: 'Third Option',
        description:
          "This is the third option. You can add a description to it if you'd like.",
      },
    ];
    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            padding: 5,
            width: Dimensions.get('window').width,
          }}
        >
          <RadioButton
            data={radioButtonData}
            onSelect={(item: any) => {
              console.log(item.name);
            }}
            type={''}
            orientation={'row'}
            textStyle={{ fontFamily: 'Outfit' }}
          />
        </View>
      </View>
    );
  }

  function __passwordInput() {
    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            padding: 5,
            width: Dimensions.get('window').width,
          }}
        >
          <PasswordInput
            onChangePassword={(text: string) => console.log(text)}
            textStyle={{ fontFamily: 'Outfit' }}
          />
        </View>
      </View>
    );
  }

  function __phoneInput() {
    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            padding: 5,
            width: Dimensions.get('window').width,
          }}
        >
          <PhoneNumberInput
            onPhoneNumberChange={(text: string) => console.log(text)}
            textStyle={{ fontFamily: 'Outfit' }}
          />

          <PhoneNumberInput
            onPhoneNumberChange={(text: string) => console.log(text)}
            textStyle={{ fontFamily: 'Outfit' }}
            viewStyle="my-4"
            codes={['KE', 'UG', 'TZ']}
          />
        </View>
      </View>
    );
  }

  function __otpInput() {
    return (
      <View style={{ marginVertical: 200 }}>
        <View
          style={{
            padding: 5,
            width: Dimensions.get('window').width,
          }}
        >
          <OTPInput
            length={6}
            onOtpChange={(text: string) => console.log(text)}
            textStyle={{ fontFamily: 'OutfitBold' }}
          />
        </View>
      </View>
    );
  }

  function __verticalStepper() {
    const vertsteps: Step[] = [
      {
        title: 'Origin (Pickup point A)',
        component: (
          <Text style={{ fontFamily: 'Outfit', marginVertical: 20 }}>
            Your component can also have images and perform actions. Your
            component can also have images and perform actions. Your component
            can also have images and perform actions.
          </Text>
        ),
        pointStyle: 'bg-primary h-8 w-8',
      },
      {
        title: 'Step 2',
        component: (
          <Text style={{ fontFamily: 'Outfit', marginVertical: 20 }}>
            Your component can also have images and perform actions. Your
            component can also have images and perform actions. Your component
            can also have images and perform actions.
          </Text>
        ),
        pointStyle: 'bg-secondary',
      },
      {
        title: 'Step 3',
        component: (
          <Text style={{ fontFamily: 'Outfit', marginVertical: 20 }}>
            Your component can also have images and perform actions. Your
            component can also have images and perform actions. Your component
            can also have images and perform actions.
          </Text>
        ),
      },
    ];

    return (
      <View style={{ marginVertical: 200 }}>
        <VerticalStepper
          steps={vertsteps}
          viewStyle="my-5"
          textStyle={{
            fontFamily: 'OutfitBold',
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{
        marginVertical: 50,
        paddingBottom: 100,
      }}
    >
      <View style={{ flex: 1 }}>
        {__accordion()}
        {__avatar()}
        {__barGraph()}
        {__card()}
        {__carousel()}
        {__countdown()}
        {__counterBox()}
        {__chip()}
        {__checkbox()}
        {__circularGraph()}
        {__dots()}
        {__dropdown()}
        {__grid()}
        {__input()}
        {__radioButton()}
        {__passwordInput()}
        {__phoneInput()}
        {__otpInput()}
        {__verticalStepper()}
      </View>
    </ScrollView>
  );
}
