import React from 'react';
import { Container, Input, Error} from './style';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

interface Props extends TextInputProps {

  control: Control;
  name: string;
  error: any
  
}

export function InputForm({
  name,
  error,
  control,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />)}
        name={name}
      />

      {error && <Error>{error}</Error>}
    </Container>
  );
}