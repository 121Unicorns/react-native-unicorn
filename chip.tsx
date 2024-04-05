import React from 'react';
import { useEffect } from 'react';
import { Text, View, type TextStyle } from 'react-native';
import tw from './tailwind';

type CustomChipProps = {
  status?: string;
  payment_status?: string;
  viewStyle?: string;
  textStyle?: TextStyle;
};

export function CustomChip({ status, payment_status, viewStyle, textStyle}: CustomChipProps) {
  const chipStyle = 'rounded-xl px-2 py-1';

  const customStyle = 'text-sm text-white';

  function loadChipDesign() {
    //@ts-ignore
    let chipDesign;
    if (status === 'SUBMITTED') {
      return (chipDesign = 'bg-[#FFC130]');
    } else if (status === 'APPROVED') {
      return (chipDesign = 'bg-[#3AB549]')
    } else if (
      status === 'TRUCKS_ASSIGNED' ||
      status === 'LPO_ASSIGNED' ||
      status === 'LOADING' ||
      status === 'PREPARING_SHIPMENTS' ||
      status === 'SHIPMENTS_PROCESSING'
    ) {
      return (chipDesign = 'bg-[#3AB549] text-white');
      
    } else if (status === 'LOADED') {
      return (chipDesign = 'bg-[#5214EB]');
    } else if (status === 'ARRIVED') {
      return (chipDesign = 'bg-[#75758A]');
    } else if (status === 'DELIVERED' || status === 'COMPLETED') {
      return (chipDesign = 'bg-[#000000] text-white');
    } else if (status === 'CANCELLED') {
      return (chipDesign = 'bg-[#FF0016]');
    }

    if (payment_status === 'NOT PAID') {
      return (chipDesign = 'bg-[#FF0000]');
    } else if (payment_status === 'PAID') {
      return (chipDesign = 'bg-[#3AB549]');
    }
    return " ";
  }

  function loadChipTextDesign() {
    //@ts-ignore
    let textDesign;
    if (status === 'SUBMITTED' || status === 'APPROVED') {
      return (textDesign = 'text-black');
    } else if (payment_status === 'NOT PAID') {
      return (textDesign = 'text-[#FF0000]');
    } else {
      return (textDesign = 'text-white');
    }
  }

  function loadChipLabel() {
    if (status === 'SUBMITTED') {
      return 'Submitted';
    } else if (status === 'APPROVED') {
      return 'Approved';
    } else if (
      status === 'TRUCKS_ASSIGNED' ||
      status === 'LPO_ASSIGNED' ||
      status === 'LOADING' ||
      status === 'PREPARING_SHIPMENTS' ||
      status === 'SHIPMENTS_PROCESSING'
    ) {
      return 'Processing';
    } else if (status === 'LOADED') {
      return 'Enroute';
    } else if (status === 'ARRIVED') {
      return 'Arrived';
    } else if (status === 'DELIVERED' || status === 'COMPLETED') {
      return 'Completed';
    } else if (status === 'CANCELLED') {
      return 'Cancelled';
    } else if (payment_status === 'UNPAID' || payment_status === 'NOT PAID') {
      return 'Unpaid';
    } else if (payment_status === 'PAID') {
      return 'Paid';
    }
    return "";
  }

  useEffect(() => {
    loadChipDesign();
  }, []);

  return (
    <View style={tw `${loadChipDesign()} ${chipStyle} ${viewStyle ? viewStyle : " "} `}>
      <Text style={[tw `${loadChipTextDesign()} ${customStyle} font-display`, textStyle]}>
        {loadChipLabel()}
      </Text>
    </View>
  );
}
