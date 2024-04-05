import React, {
  type FC,
  type Dispatch,
  useState,
  useRef,
  useEffect,
} from 'react';
import { Clipboard, type TextStyle } from 'react-native';
import { View, TextInput, type NativeSyntheticEvent } from 'react-native';
import type { TextInputKeyPressEventData } from 'react-native/Libraries/Components/TextInput/TextInput';
import tw from './tailwind';
import { neutral700 } from './colors';

interface OTPInputProps {
  length: number;
  value?: string;
  onOtpChange: Dispatch<string>;
  incorrect?: boolean;
  textStyle?: TextStyle;
  viewStyle?: string;
}

interface RefMapping {
  [key: number]: TextInput | null;
}

export const OTPInput: FC<OTPInputProps> = ({
  length,
  value,
  onOtpChange,
  incorrect,
  textStyle,
  viewStyle,
}) => {
  const refs = useRef<RefMapping>({});
  const [code, setCode] = useState(Array.from({ length: length }, () => ''));
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (value) {
      let pv = value.split('');
      setCode(pv);
      onOtpChange(value);
    }
  }, [value]);

  const focusInput = (index: number) => {
    if (refs.current[index] && refs.current[index]!) {
      refs.current[index]!.focus();
    }
  };

  const handlePaste = async () => {
    const clipboard = await Clipboard.getString();
    if (!clipboard) {
      return;
    }
    const currentCode = clipboard.substring(0, length).split('');
    const endIndex = currentCode.length - 1;

    if (currentCode.length < length) {
      do {
        currentCode.push('');
      } while (currentCode.length < length);
    }

    refs.current[endIndex < length - 1 ? endIndex + 1 : endIndex]?.focus();
    setCode(currentCode);
    onOtpChange(currentCode.join(''));
  };

  const handleType = (value: string, index: number) => {
    const hasDeleted = !value && code[index] !== '';
    const currentCode = code.map((curr, i) => {
      if (i === index) {
        return value;
      }
      return curr;
    });

    if (!hasDeleted && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
    setCode(currentCode);
    onOtpChange(currentCode.join(''));
  };

  const handleChange = async (value: string, index: number) => {
    onOtpChange(value);
    if (value.length > 1) {
      await handlePaste();
      return;
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (event.nativeEvent.key === 'Backspace' && index !== 0 && !code[index]) {
      refs.current[index - 1]?.focus();
    }
  };

  return (
    <View
      style={tw`flex-row justify-between py-4 ${viewStyle ? viewStyle : ' '}`}
    >
      {Array.from({ length }, (_, i) => i).map((_, i) => {
        const isFocused = i === focusedIndex;
        return (
          <TextInput
            onFocus={() => setFocusedIndex(i)}
            onKeyPress={(e) => handleKeyPress(e, i)}
            ref={(el) => (refs.current[i] = el)}
            key={_}
            value={code[i]}
            onChangeText={(value) =>
              value.length > 1 ? handleChange(value, i) : handleType(value, i)
            }
            style={[
              tw`flex-1 text-center font-body text-base h-12 m-1 rounded-md border ${
                incorrect
                  ? 'border-red-400'
                  : isFocused
                  ? 'border-neutral-500'
                  : 'border-neutral'
              } items-center justify-center self-center p-3`,
              textStyle,
            ]}
            onSelectionChange={(event) => {
              if (event.nativeEvent.selection.end === 0) {
                focusInput(i - 1);
              }
            }}
            maxLength={i === 0 ? length : 1}
            keyboardType="number-pad"
            inputMode="numeric"
            textContentType="oneTimeCode"
            selectTextOnFocus
            placeholder="•"
            placeholderTextColor={neutral700}
            textAlignVertical="center"
            textAlign="center"
          />
        );
      })}
    </View>
  );
};
