import React from 'react';
import { useState } from 'react';

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
import { CustomCheckbox } from '../../checkbox';
import { MainButton } from '../../main-button';
import { CustomRadioButton } from '../../radio-button';
import { CounterBox } from '../../counter-box';
import { PasswordInput } from '../../password-input';
import { PhoneNumberInput } from '../../phone-input';
import { OTPInput } from '../../otp-input';
import { Grid } from '../../grid';
import { Card } from '../../card';
import { DropDown } from '../../drop-down';
import { CustomInput } from '../../custom-input';
import { Avatar } from '../../avatar';
import { CircularGraph } from '../../circular-graph';
import { BarGraph } from '../../bar-graph';
import { VerticalStepper, type Step } from '../../vertical-stepper';
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

  const [tempOtp, setTempOtp] = useState('');

  if (!fontsLoaded) {
    return null;
  }

  setTimeout(() => {
    setTempOtp('123444');
  }, 3000);

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

  const carouselData = [
    {
      id: 1,
      title: 'Add items to cart',
      image: { uri: 'https://picsum.photos/200' },
    },
    {
      id: 2,
      title: 'Request for quote',
      image: { uri: 'https://picsum.photos/200' },
    },
    {
      id: 3,
      title: 'Place order',
      image: { uri: 'https://picsum.photos/200' },
    },
    {
      id: 4,
      title: 'Get goods delivered on time',
      image: { uri: 'https://picsum.photos/200' },
    },
  ];

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

  const tableData = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
  ];

  const tableColumns = ['ID', 'Name', 'Age'];
  const tableKeys = ['id', 'name', 'age'];

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
          source={{ uri: 'https://img.icons8.com/ios/50/cardboard-box.png' }}
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

  const vertsteps: Step[] = [
    {
      title: 'Origin (Pickup point A)',
      component: (
        <Text style={{ fontFamily: 'Outfit', marginVertical: 20 }}>
          Your component can also have images and perform actions. Your
          component can also have images and perform actions. Your component can
          also have images and perform actions.
        </Text>
      ),
      pointStyle: 'bg-primary h-8 w-8',
    },
    {
      title: 'Step 2',
      component: (
        <Text style={{ fontFamily: 'Outfit', marginVertical: 20 }}>
          Your component can also have images and perform actions. Your
          component can also have images and perform actions. Your component can
          also have images and perform actions.
        </Text>
      ),
      pointStyle: 'bg-secondary',
    },
    {
      title: 'Step 3',
      component: (
        <Text style={{ fontFamily: 'Outfit', marginVertical: 20 }}>
          Your component can also have images and perform actions. Your
          component can also have images and perform actions. Your component can
          also have images and perform actions.
        </Text>
      ),
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        marginVertical: 50,
        paddingBottom: 100,
        backgroundColor: '#FEFEFE',
      }}
    >
      {/* -----------------------------ACCORDION---------------------------------------- */}
      <Text style={{ marginHorizontal: 10, fontFamily: 'OutfitBold' }}>
        Accordion
      </Text>
      <Accordion
        data={accordionData}
        textStyle={{ fontFamily: 'OutfitBold' }}
      />
      {/* -----------------------------ACCORDION---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          fontFamily: 'OutfitBold',
        }}
      >
        Paginated Accordion
      </Text>
      <Accordion
        data={paginatedAccordionData}
        textStyle={{ fontFamily: 'OutfitBold' }}
        pageSize={4}
      />
      {/* -----------------------------CAROUSEL---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          fontFamily: 'OutfitBold',
        }}
      >
        Carousel
      </Text>
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
      {/* -----------------------------COUNTDOWN---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Countdown
      </Text>
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
      {/* -----------------------------CHIP---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Chip
      </Text>
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
      {/* -----------------------------CHECKBOX---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Checkbox
      </Text>
      <View
        style={{
          width: Dimensions.get('window').width,
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <CustomCheckbox
          label={'Default Checked'}
          onSelect={() => {}}
          isChecked={true}
          textStyle={{ fontFamily: 'Outfit' }}
        />
        <CustomCheckbox
          label={'Default Unchecked'}
          onSelect={() => {}}
          isChecked={false}
          textStyle={{ fontFamily: 'Outfit' }}
        />
      </View>
      {/* -----------------------------BUTTON---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Main Button
      </Text>
      <View
        style={{
          width: Dimensions.get('window').width,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MainButton
          variant="primary"
          title="Primary Button Variant"
          buttonWidth="85%"
          textStyle={{ fontFamily: 'OutfitBold' }}
          viewStyle="my-1"
          onPress={() => console.log('Primary Clicked')}
        />
        <MainButton
          variant="secondary"
          title="Secondary Button Variant"
          buttonWidth="85%"
          textStyle={{ fontFamily: 'OutfitBold' }}
          viewStyle="my-1"
          onPress={() => console.log('Secondary Clicked')}
        />
        <MainButton
          variant="tertiary"
          title="Tertiary Button Variant"
          buttonWidth="85%"
          textStyle={{ fontFamily: 'OutfitBold' }}
          viewStyle="my-1"
          onPress={() => console.log('Tertiary Clicked')}
        />
        <MainButton
          variant="quaternary"
          title="Quaternary Button Variant"
          buttonWidth="85%"
          textStyle={{ fontFamily: 'OutfitBold' }}
          viewStyle="my-1"
          onPress={() => console.log('Quaternary Clicked')}
        />
        <View
          style={{
            backgroundColor: 'black',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MainButton
            variant="quinary"
            title="Quinary Button Variant"
            buttonWidth="85%"
            textStyle={{ fontFamily: 'OutfitBold' }}
            viewStyle="my-1"
            onPress={() => console.log('Quinary Clicked')}
          />
        </View>
        <MainButton
          variant="primary"
          title="Disabled Button Variant"
          buttonWidth="85%"
          textStyle={{ fontFamily: 'OutfitBold' }}
          viewStyle="my-1"
          onPress={() => console.log('Disabled Button Clicked')}
          disabled={true}
        />
        <MainButton
          variant="primary"
          title="Primary Loading Button"
          buttonWidth="85%"
          loading={true}
          textStyle={{ fontFamily: 'OutfitBold' }}
          viewStyle="my-1"
          onPress={() => console.log('Disabled Button Clicked')}
        />
        <MainButton
          variant="secondary"
          title="Secondary Loading Button"
          buttonWidth="85%"
          loading={true}
          textStyle={{ fontFamily: 'OutfitBold' }}
          viewStyle="my-1"
          onPress={() => console.log('Disabled Button Clicked')}
        />
        <MainButton
          variant="primary"
          title="Primary Icon Button Variant"
          buttonWidth="85%"
          textStyle={{ fontFamily: 'OutfitBold' }}
          viewStyle="my-1"
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
          onPress={() => console.log('Disabled Button Clicked')}
        />
      </View>
      {/* -----------------------------RADIO BUTTON---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Radio Button
      </Text>
      <View
        style={{
          padding: 5,
          width: Dimensions.get('window').width,
        }}
      >
        <CustomRadioButton
          data={radioButtonData}
          onSelect={(item: any) => {
            console.log(item.name);
          }}
          type={''}
          orientation={'row'}
          textStyle={{ fontFamily: 'Outfit' }}
        />
      </View>
      {/* -----------------------------COUNTERBOX---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        CounterBox
      </Text>
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
      {/* -----------------------------GRID---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Grid
      </Text>
      <View
        style={{
          padding: 5,
          width: Dimensions.get('window').width,
        }}
      >
        <Grid data={tableData} columns={tableColumns} keys={tableKeys} />
      </View>
      {/* -----------------------------PASSWORD VIEW---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Password View
      </Text>
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
      {/* -----------------------------PHONE VIEW---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Phone View
      </Text>
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
      </View>
      {/* -----------------------------OTP VIEW---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        OTP View
      </Text>
      <View
        style={{
          padding: 5,
          width: Dimensions.get('window').width,
        }}
      >
        {/* OTPInput can paste or accept typed input */}
        <OTPInput
          length={6}
          onOtpChange={(text: string) => console.log(text)}
          textStyle={{ fontFamily: 'OutfitBold' }}
          value={tempOtp}
        />

        <OTPInput
          length={6}
          onOtpChange={(text: string) => console.log(text)}
          textStyle={{ fontFamily: 'OutfitBold' }}
        />

        <OTPInput
          length={4}
          onOtpChange={(text: string) => console.log(text)}
          incorrect={true}
          textStyle={{ fontFamily: 'OutfitBold' }}
        />
      </View>
      {/* -----------------------------CARD VIEW---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Card View
      </Text>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            padding: 5,
            width: Dimensions.get('window').width,
          }}
        >
          <Card
            viewStyle={'p-2 h-25 m-1 justify-center flex-1'}
            variant="primary"
          >
            <Text style={{ fontFamily: 'OutfitBold' }}>
              This is the content of the primary variant.
            </Text>
          </Card>
          <Card
            viewStyle={'p-2 h-25 m-1 justify-center flex-1'}
            variant="secondary"
          >
            <Text style={{ color: '#0E0E0E', fontFamily: 'OutfitBold' }}>
              This is the content of the secondary variant.
            </Text>
          </Card>
          <Card
            viewStyle={'p-2 h-25 m-1 justify-center flex-1'}
            variant="tertiary"
          >
            <Text style={{ color: '#FFF', fontFamily: 'OutfitBold' }}>
              This is the content of the tertiary variant.
            </Text>
          </Card>
        </View>
        <View
          style={{
            padding: 5,
            width: Dimensions.get('window').width,
          }}
        >
          <Card viewStyle={'p-2 m-2 h-10 justify-center'} variant="quaternary">
            <Text style={{ fontFamily: 'OutfitBold' }}>
              This is the content of the quaternary variant.
            </Text>
          </Card>
        </View>
      </View>

      {/* -----------------------------DROPDOWN VIEW---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Dropdown
      </Text>
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
          viewStyle="h-12"
          textStyle={{ fontFamily: 'Outfit' }}
        />
      </View>
      {/* -----------------------------CUSTOM INPUT VIEW---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Custom Input
      </Text>
      <View
        style={{
          padding: 5,
          width: Dimensions.get('window').width,
        }}
      >
        <CustomInput
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
        <CustomInput
          variant="medium"
          placeholder="Medium Input"
          onTextChange={(text: string) => {
            console.log(text);
          }}
        />
      </View>
      {/* -----------------------------AVATAR---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Avatar
      </Text>
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
      {/* -----------------------------CIRCULAR GRAPH---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
          fontFamily: 'OutfitBold',
        }}
      >
        Circular graph
      </Text>
      <View
        style={{
          padding: 5,
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <Card
          viewStyle={'flex-row justify-evenly items-center'}
          variant="tertiary"
        >
          <CircularGraph percentage={25} radius={35} strokeWidth={12} />
          <CircularGraph percentage={35} radius={35} strokeWidth={12} />
          <CircularGraph percentage={75} radius={35} strokeWidth={12} />
        </Card>
      </View>
      {/* -----------------------------BAR GRAPH---------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          fontFamily: 'OutfitBold',
        }}
      >
        Bar Graph
      </Text>
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
        <BarGraph percentage={74} />
      </View>

      {/* -----------------------------VERTICAL STEPPER--------------------------------------- */}
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 50,
          fontFamily: 'OutfitBold',
        }}
      >
        Vertical Stepper
      </Text>
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
    </ScrollView>
  );
}
