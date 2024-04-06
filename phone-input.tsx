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
  SafeAreaView,
} from 'react-native';
import tw from './tailwind';
import { ChevronDown } from 'lucide-react-native';
import { neutral700, neutral900 } from './colors';
import { countryCodes } from './constants';

export interface CountryCode {
  code: string;
  name: string;
  image?: string;
  short: string;
}
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
  codes?: string[];
}

export function PhoneNumberInput({
  onPhoneNumberChange,
  placeholderTextColor,
  placeholder,
  textStyle,
  viewStyle,
  codeStyle,
  props,
  disabled,
  codes,
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
    const filteredCodes = codes
      ? countryCodes.filter((code) => codes.includes(code.short))
      : countryCodes;

    return (
      <Modal transparent={true} animationType="slide" visible={isVisible}>
        <View
          style={[
            tw`flex-1 justify-end`,
            { backgroundColor: 'rgba(0, 44, 83, 0.5)' },
          ]}
        >
          <SafeAreaView style={tw`bg-white mt-30`}>
            <FlatList
              data={filteredCodes}
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
                    {/* <SvgUri
                      style={tw`mr-4`}
                      uri={item.image}
                      width={'30'}
                      height={'30'}
                    /> */}
                    <Text style={[tw`text-lg mr-3`]}>{item.image}</Text>
                    <Text style={[tw`font-display min-w-10`, textStyle]}>
                      {item.code}
                    </Text>
                  </View>
                  <Text style={textStyle}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
          <TouchableOpacity
            style={tw`bg-white p-6 items-center`}
            onPress={onClose}
          >
            <Text style={[tw`font-display text-lg text-primary`, textStyle]}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <View style={tw`flex-row ${viewStyle as string}`}>
      <TouchableOpacity
        style={tw`flex-row mr-3 w-3/12 items-center justify-center border border-neutral rounded-lg p-2 ${
          codeStyle as string
        }`}
        onPress={toggleCountryCodePicker}
        disabled={disabled}
      >
        <Text style={[tw`text-neutral-600 mx-2`, textStyle]}>
          {selectedCountryCode}
        </Text>
        <ChevronDown size={24} color={neutral900} />
      </TouchableOpacity>
      <TextInput
        {...props}
        style={[
          tw`flex-row flex-1 border border-neutral rounded-lg p-2`,
          textStyle,
        ]}
        placeholder={placeholder ? placeholder : 'Phone Number'}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : neutral700
        }
        value={phoneNumber}
        maxLength={9}
        onChangeText={(text) => {
          //@ts-ignore
          setPhoneNumber(text);
          onPhoneNumberChange(selectedCountryCode.concat(text));
        }}
        inputMode="tel"
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
