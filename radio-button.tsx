import React, { useEffect, useState } from 'react';
import { Pressable, Text, View, type TextStyle } from 'react-native';
import tw from './tailwind';

interface CustomRadioButtonProps {
  data: any[];
  type: string;
  onSelect: (radioValue: any) => void;
  orientation: string;
  viewStyle?: string;
  textStyle?: TextStyle;
  width?: string;
  defaultSelected?: any;
}

export function RadioButton({
  data,
  type,
  onSelect,
  orientation,
  viewStyle,
  textStyle,
  defaultSelected,
}: CustomRadioButtonProps) {
  const [userOption, setUserOption] = useState(null);

  useEffect(() => {
    if (defaultSelected) {
      data.filter((item) => {
        if (item.id === defaultSelected.id) {
          setUserOption(item);
        }
      });
    }
  }, []);

  const unselectedButton = () => {
    return (
      <View
        style={tw`h-5 w-5 rounded-full border border-primary bg-white items-center justify-center ${
          viewStyle as string
        }`}
      />
    );
  };

  const selectedButton = () => {
    return (
      <View
        style={tw`h-5 w-5 rounded-full border border-primary bg-white items-center justify-center p-2 ${
          viewStyle as string
        }`}
      >
        <View
          style={tw`h-3 w-3 rounded-full bg-primary items-center justify-center ${
            viewStyle as string
          }`}
        />
      </View>
    );
  };

  return (
    <View
      style={tw`my-1 flex-${
        orientation === 'horizontal' ? 'row' : 'col'
      } justify-between`}
    >
      {data.map((item) => {
        return (
          <Pressable
            style={tw`w-full`}
            onPress={() => {
              onSelect(item);
              setUserOption(item);
            }}
            key={item.id}
          >
            <View style={tw`flex-row items-center p-1 bg-transparent`}>
              {item === userOption ? selectedButton() : unselectedButton()}
              <Text style={[tw`ml-3 text-base font-body`, textStyle]}>
                {type === 'discount'
                  ? item.product.product_name
                  : type === 'profile'
                  ? item.business_name +
                    ' - ' +
                    item.businessGeoLocation.address
                  : item.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
