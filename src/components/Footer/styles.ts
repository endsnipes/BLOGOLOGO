import styled from "styled-components";
import { Color } from "ui";

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.05fr;
  align-items: center;
  border-top: 1px solid ${Color.Border};
  padding: 25px 0 25px 0;
  margin-top: 50px;
`;
export const TextFooter = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${Color.Primary};
`;
export const Button = styled.button`
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
`;
