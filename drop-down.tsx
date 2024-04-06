import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  type TextStyle,
} from 'react-native';
import tw from './tailwind';
import { ChevronDown } from 'lucide-react-native';
import { neutral800 } from './colors';

interface Option {
  id: string;
  label: string;
  value: any;
  icon?: React.ReactNode; // Allow for optional icons
}

interface DropDownProps {
  options: Option[];
  onSelect: (value: any) => void;
  title: string;
  viewStyle?: string;
  textStyle?: TextStyle;
}

export function DropDown({
  options,
  onSelect,
  title,
  viewStyle,
  textStyle,
}: DropDownProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <View>
      <TouchableOpacity
        style={tw`flex-row flex-1 justify-between border border-neutral rounded-lg min-h-12 p-2 items-center ${
          viewStyle as string
        }`}
        onPress={() => setIsVisible(true)}
      >
        <Text style={[tw`text-neutral-600 font-body`, textStyle]}>
          {selectedOption ? selectedOption : title}
        </Text>
        <ChevronDown size={24} color={neutral800} />
      </TouchableOpacity>

      <Modal transparent={true} animationType="slide" visible={isVisible}>
        <View
          style={[
            tw`flex-1 justify-end`,
            { backgroundColor: 'rgba(0, 44, 83, 0.5)' },
          ]}
        >
          <View style={tw`bg-white`}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={tw`flex-row items-center p-3 border-b border-neutral`}
                  onPress={() => {
                    setSelectedOption(item.label);
                    onSelect(item.value);
                    setIsVisible(false);
                  }}
                >
                  {item.icon && <View style={tw`mr-5`}>{item.icon}</View>}
                  <Text style={[tw`text-lg font-body`, textStyle]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <TouchableOpacity
            style={tw`bg-white p-6 items-center`}
            onPress={() => setIsVisible(false)}
          >
            <Text style={tw`font-bold text-lg text-primary`}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
