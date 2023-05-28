import styled from "styled-components";
import { Color, Typography } from "../../ui";

export const StyledSortButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
`;

export const Button = styled.button<{ isActive: boolean }>`
  ${Typography.B2}
  padding: 15px 40px;
  color: ${Color.Primary};
  background-color: ${({ isActive }) =>
    isActive ? `${Color.Secondary_Light}` : `${Color.Secondary_Button}`};
  color: ${({ isActive }) => (isActive ? `${Color.White}` : `${Color.Primary}`)};
  transition: all 0.1s linear;
  &:hover {
    cursor: pointer;
    background-color: ${({ isActive }) =>
      isActive ? `${Color.Secondary_Light}` : `${Color.Primary_Light}`};
    color: ${Color.White};
  }
`;
