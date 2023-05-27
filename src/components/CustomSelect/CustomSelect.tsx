import Select, { OnChangeValue } from "react-select";
import { colorStyles } from "./styles";

interface IProps {
  value: string;
  onSelect: (value: string) => void;
}
export interface IOption {
  value: string;
  label: string;
}

export const CustomSelect = ({ value, onSelect }: IProps) => {
  const options: IOption[] = [
    { value: "az", label: "Title (A-Z)" },
    { value: "za", label: "Title (Z-A)" },
  ];
  const handleSelect = (newValue: OnChangeValue<IOption, boolean>) => {
    onSelect((newValue as IOption).value);
  };
  const getOptionValue = (value: string): IOption | undefined => {
    return value ? options.find((option) => option.value === value) : undefined;
  };

  return (
    <Select
      options={options}
      styles={colorStyles}
      value={getOptionValue(value)}
      onChange={handleSelect}
    />
  );
};
