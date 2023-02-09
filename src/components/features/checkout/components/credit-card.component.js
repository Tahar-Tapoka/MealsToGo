import { useState } from 'react';

// import { LiteCreditCardInput } from 'react-native-credit-card-input';
import { Button, TextInput } from 'react-native-paper';
import { cardTokenRequest } from '../../../../services/checkout/checkout.service';
import { SafeArea } from '../../../utility/safe-area.component';

export const CreditCardInput = () => {
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
    console.log(card);
    if (!isIncomplete) {
      const info = await cardTokenRequest(card);
      console.log(info.id);
    }
  };
  return (
    <SafeArea>
      {/* <LiteCreditCardInput onChange={onChange} /> */}
      <TextInput label="Name" value={name} onChangeText={(text) => setName(text)} />
      <TextInput label="Card Number" value={num} onChangeText={(text) => setNum(text)} />
      <TextInput label="Expires in" value={expiry} onChangeText={(text) => setExpiry(text)} />
      <TextInput label="CVC" value={cvc} onChangeText={(text) => setCcv(text)} />
      <Button icon="camera" mode="contained" onPress={onChange}>
        {' '}
        Validate{' '}
      </Button>
    </SafeArea>
  );
};
