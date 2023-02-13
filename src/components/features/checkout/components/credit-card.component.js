import { useState } from 'react';
import { View } from 'react-native';

// import { LiteCreditCardInput } from 'react-native-credit-card-input';
import { Button, TextInput } from 'react-native-paper';
import { cardTokenRequest } from '../../../../services/checkout/checkout.service';
import { SafeArea } from '../../../utility/safe-area.component';
import { CreditCardButton, CreditCardWrapper, NameInput } from './checkout.styles';

export const CreditCardInput = ({ onSuccess, onError }) => {
  //   const onChange = (formData) => {
  //     const { values, status } = formData;
  //     const isIncomplete = Object.values(status).includes('incomplete');
  //     console.log(isIncomplete);
  // };

  const [num, setNum] = useState(null);
  const [name, setName] = useState(null);
  const [expiry, setExpiry] = useState(null);
  const [cvc, setCcv] = useState(null);
  const onChange = async () => {
    const isIncomplete = !(num.length === 16 && expiry.length === 5 && cvc.length === 3);
    const card = {
      name: name,
      number: num,
      exp_month: expiry.split('/')[0],
      exp_year: expiry.split('/')[1],
      cvc: cvc,
    };
    if (!isIncomplete) {
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (e) {
        onError();
      }
    }
  };
  return (
    <SafeArea>
      {/* <LiteCreditCardInput onChange={onChange} /> */}
      <NameInput value={name} onChangeText={(text) => setName(text)} />
      {name && (
        <>
          <CreditCardWrapper>
            <View style={{ flex: 6, padding: 3 }}>
              <TextInput label="Card Number" value={num} onChangeText={(text) => setNum(text)} />
            </View>
            <View style={{ flex: 3, padding: 3 }}>
              <TextInput
                label="Expires in"
                value={expiry}
                onChangeText={(text) => setExpiry(text)}
              />
            </View>
            <View style={{ flex: 2, padding: 3 }}>
              <TextInput label="CVC" value={cvc} onChangeText={(text) => setCcv(text)} />
            </View>
          </CreditCardWrapper>
          <CreditCardButton onPress={onChange}> Validate Credit Card </CreditCardButton>
        </>
      )}
    </SafeArea>
  );
};
