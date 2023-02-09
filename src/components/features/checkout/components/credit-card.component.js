import React from 'react';
import { LiteCreditCardInput } from 'react-native-credit-card-input';
import { SafeArea } from '../../../utility/safe-area.component';

export const CreditCardInput = () => {
  const onChange = (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes('incomplete');
    console.log(isIncomplete);
  };
  return <SafeArea></SafeArea>;
};
