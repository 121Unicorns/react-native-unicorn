import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
  FlatList,
  type TextStyle,
  type TextInputProps,
} from 'react-native';
import tw from './tailwind';
import { SvgUri } from 'react-native-svg';
import { ChevronDown } from 'lucide-react-native';
import { neutral700, neutral900 } from './colors';

// interface CountryCode {
//   code: string;
//   name: string;
// }
interface CountryCodePickerProps {
  isVisible: boolean;
  onSelect: (code: string) => void;
  onClose: () => void;
}

interface PhoneNumberInputProps extends TextInputProps {
  onPhoneNumberChange: (text: string) => void;
  placeholderTextColor?: string;
  placeholder?: string;
  textStyle?: TextStyle;
  viewStyle?: string;
  codeStyle?: string;
  props?: TextInputProps;
  disabled?: boolean;
}

export function PhoneNumberInput({
  onPhoneNumberChange,
  placeholderTextColor,
  placeholder,
  textStyle,  
  viewStyle,
  codeStyle,
  props,
  disabled
}: PhoneNumberInputProps) {
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [isCountryCodePickerVisible, setIsCountryCodePickerVisible] =
    useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+254');

  const toggleCountryCodePicker = () => {
    setIsCountryCodePickerVisible(!isCountryCodePickerVisible);
  };

  const CountryCodePicker = ({
    isVisible,
    onSelect,
    onClose,
  }: CountryCodePickerProps) => {
    const countryCodes = [
      {
        code: '+254',
        name: 'Kenya',
        image: 'https://flagicons.lipis.dev/flags/4x3/ke.svg',
        short: 'ke'
      },
      // {
      //   code: '+255',
      //   name: 'Tanzania',
      //   image: 'https://flagicons.lipis.dev/flags/4x3/tz.svg',
      //   short: 'tz'
      // },
      // {
      //   code: '+256',
      //   name: 'Uganda',
      //   image: 'https://flagicons.lipis.dev/flags/4x3/ug.svg',
      //   short: 'ug'
      // },
      // {
      //   code: "+250",
      //   name: "Rwanda",
      //   image: "https://flagicons.lipis.dev/flags/4x3/rw.svg",
      //   short: "rw"
      // },
      // {
      //   code: "+257",
      //   name: "Burundi",
      //   image: "https://flagicons.lipis.dev/flags/4x3/bi.svg",
      //   short: "bi"
      // },
      // {
      //   code: "+267",
      //   name: "Botswana",
      //   image: "https://flagicons.lipis.dev/flags/4x3/bw.svg",
      //   short: "bw"
      // },
      // {
      //   code: "+269",
      //   name: "Comoros",
      //   image: "https://flagicons.lipis.dev/flags/4x3/km.svg",
      //   short: "km"
      // },
      // {
      //   code: "+251",
      //   name: "Ethiopia",
      //   image: "https://flagicons.lipis.dev/flags/4x3/et.svg",
      //   short: "et"
      // },
      // {
      //   code: "+291",
      //   name: "Eritrea",
      //   image: "https://flagicons.lipis.dev/flags/4x3/er.svg",
      //   short: "er"
      // },
      // {
      //   code: "+252",
      //   name: "Somalia",
      //   image: "https://flagicons.lipis.dev/flags/4x3/so.svg",
      //   short: "so"
      // },
      // {
      //   code: "+258",
      //   name: "Mozambique",
      //   image: "https://flagicons.lipis.dev/flags/4x3/mz.svg",
      //   short: "mz"
      // },
      // {
      //   code: "+249",
      //   name: "Sudan",
      //   image: "https://flagicons.lipis.dev/flags/4x3/sd.svg",
      //   short: "sd"
      // },
      // {
      //   code: "+211",
      //   name: "South Sudan",
      //   image: "https://flagicons.lipis.dev/flags/4x3/ss.svg",
      //   short: "ss"
      // }
    ];

    return (
      <Modal transparent={true} animationType="slide" visible={isVisible}>
        <View style={[tw `flex-1 justify-end`, { backgroundColor: 'rgba(0, 44, 83, 0.5)' },]}>
          <View style={tw `bg-white`}>
            <FlatList
              data={countryCodes}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={tw`flex-row items-center p-3 border-b border-neutral-700`}
                  onPress={() => {
                    onSelect(item.code);
                    onClose();
                  }}
                >
                  <View style={tw`flex-row items-center mr-4`}>
                    <SvgUri
                      style={tw`mr-4`}
                      uri={item.image}
                      width={'30'}
                      height={'30'}
                    />
                    <Text style={[tw`font-display`, textStyle]}>
                      {item.code}
                    </Text>
                  </View>
                  <Text style={textStyle}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <TouchableOpacity
            style={tw`bg-white p-6 items-center`}
            onPress={onClose}
          >
            <Text style={[tw `font-display text-lg text-primary`, textStyle]}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <View style={tw`flex-row ${viewStyle as string}`}>
      <TouchableOpacity
        style={tw`flex-row mr-3 w-3/12 items-center justify-center border border-neutral rounded-lg p-2 ${codeStyle as string}`}
        onPress={toggleCountryCodePicker}
        disabled={disabled}
      >
        <Text style={[tw `text-neutral-600 mx-2`, textStyle]}>{selectedCountryCode}</Text>
        <ChevronDown size={24} color={neutral900} />
      </TouchableOpacity>
      <TextInput
      {...props}
        style={[tw`flex-row flex-1 border border-neutral rounded-lg p-2`, textStyle]}
        placeholder={placeholder ? placeholder : 'Phone Number'}
        placeholderTextColor={placeholderTextColor? placeholderTextColor : neutral700}
        value={phoneNumber}
        maxLength={9}
        onChangeText={(text) => {
          //@ts-ignore
          setPhoneNumber(text);
          onPhoneNumberChange(selectedCountryCode.concat(text));
        }}
        inputMode='tel'
        editable={!disabled}
      />
      <CountryCodePicker
        isVisible={isCountryCodePickerVisible}
        onSelect={(code) => {
          setSelectedCountryCode(code);
        }}
        onClose={toggleCountryCodePicker}
      />
    </View>
  );
}
