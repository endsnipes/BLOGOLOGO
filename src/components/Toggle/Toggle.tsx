import { Input, InputWrapper, Slider, Text } from "./styles";

interface IProps {
  onChange: () => void;
}

export const Toggle = ({ onChange }: IProps) => {
  return (
    <>
      <Text>Dark theme</Text>
      <InputWrapper>
        <Input type="checkbox" onChange={onChange} />
        <Slider />
      </InputWrapper>
    </>
  );
};
