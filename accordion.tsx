import React, { useState } from 'react';
import { Pressable, Text, View, type TextStyle } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { neutral900 } from './colors';
import tw from './tailwind';

interface AccordionProps {
  data: {
    title: string;
    component: React.ReactNode;
    expanded: boolean;
  }[];
  viewStyle?: string;
  textStyle?: TextStyle;
  dividerColor?: string;
  pageSize?: number;
  pageButtonStyle?: string;
}

export function Accordion({
  data,
  viewStyle,
  textStyle,
  dividerColor,
  pageSize,
  pageButtonStyle,
}: AccordionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentExpanded, setCurrentExpanded] = useState<number | undefined>();

  const startIndex = pageSize ? (currentPage - 1) * pageSize : 0;
  const endIndex = pageSize
    ? Math.min(startIndex + pageSize, data.length)
    : data.length;

  return (
    <View style={tw`pb-1 bg-transparent`}>
      {data.slice(startIndex, endIndex).map((item, index) => {
        const dataIndex = startIndex + index;
        return (
          <View
            key={dataIndex}
            style={tw`border border-neutral rounded-md mt-1 mx-1 ${
              viewStyle as string
            }`}
          >
            <Pressable
              onPress={() => {
                if (currentExpanded === dataIndex) {
                  setCurrentExpanded(undefined);
                } else {
                  setCurrentExpanded(dataIndex);
                }
              }}
            >
              <View style={tw`flex-row items-center p-2`}>
                <Text style={[tw`text-slate-900 text-base`, textStyle]}>
                  {item.title}
                </Text>
                <View style={tw`flex-grow mx-2 bg-neutral`} />
                {currentExpanded === dataIndex ? (
                  <ChevronUp color={neutral900} size={24} />
                ) : (
                  <ChevronDown color={neutral900} size={24} />
                )}
              </View>
            </Pressable>
            {currentExpanded === dataIndex && (
              <>
                <View
                  style={tw`border-b border-${
                    dividerColor ? dividerColor : 'neutral'
                  }`}
                />
                <View style={tw`m-1 px-2 pt-2 pb-10`}>{item.component}</View>
              </>
            )}
          </View>
        );
      })}
      {pageSize && data.length > pageSize && (
        <View style={tw`flex-row justify-center mt-4`}>
          {Array.from({ length: Math.ceil(data.length / pageSize) }).map(
            (_, page) => (
              <Pressable
                key={page}
                onPress={() => setCurrentPage(page + 1)}
                style={tw`h-8 w-8 border border-slate-400 rounded-full items-center justify-center mx-1 ${
                  currentPage === page + 1 ? 'bg-slate-400' : 'bg-transparent'
                } ${pageButtonStyle as string}`}
              >
                <Text style={[textStyle]}>{page + 1}</Text>
              </Pressable>
            )
          )}
        </View>
      )}
    </View>
  );
}
