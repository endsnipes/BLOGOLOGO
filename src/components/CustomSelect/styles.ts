import { StylesConfig } from "react-select";
import { Color } from "ui";
import { IOption } from "./CustomSelect";

export const colorStyles: StylesConfig<IOption, false> = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: `${Color.White}`,
    color: state.isFocused ? `${Color.Secondary_Light}` : "black",
    padding: 20,
    fontFamily: "Inter",
    width: "200px",
    cursor: "pointer",
  }),
  control: (styles) => ({
    ...styles,
    marginTop: "50px",
    width: "200px",
    borderRadius: 10,
    border: "none",
    padding: 10,
    fontSize: "16px",
    fontFamily: "Inter",
    cursor: "pointer",
    backgroundColor: `${Color.Secondary_Button}`,
  }),
};
