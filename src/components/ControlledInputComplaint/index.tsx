import React from 'react';
import { Container, Input, Error} from './styles';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

interface Props extends TextInputProps {

  control: Control;
  name: string;
  error: any

}

export function ControlledInputComplaint({
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
            multiline
            numberOfLines={20}
            {...rest}
          />)}
        name={name}
      />

      {error && <Error>{error}</Error>}
    </Container>
  );
}