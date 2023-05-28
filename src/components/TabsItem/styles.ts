import styled from "styled-components";
import { Color, Typography } from "ui";

export const Tab = styled.li<{ isActive: boolean }>`
  ${Typography.B2}
  color: ${Color.Primary};
  padding: 40px 40px 25px 40px;
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${Color.Primary}` : `2px solid ${Color.Border}`};
  transition: all 0.1s linear;

  &:hover {
    color: ${({ isActive }) => (isActive ? `${Color.Primary}` : `${Color.Secondary_Light}`)};
    cursor: pointer;
  }
`;
export const StyledTabsItem = styled.ul`
  display: flex;
`;
