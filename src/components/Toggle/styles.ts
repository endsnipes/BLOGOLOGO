import styled from "styled-components";
import { Color, Typography } from "ui";

export const InputWrapper = styled.label`
  position: relative;
`;
export const Input = styled.input`
  position: absolute;
  left: 10px;
  top: 10px;
  &:checked + span {
    background-color: ${Color.Secondary_Light};
    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
  &:focus + span {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

export const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  background-color: #bfbfbf;
  position: relative;
  transition: background-color 0.2s;
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
  }
  &:active:before {
    width: 28px;
  }
`;

export const Text = styled.p`
  ${Typography.B2}
  color:#828687;
  margin-right: 5px;
`;
