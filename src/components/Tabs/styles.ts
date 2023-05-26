import styled from "styled-components";
import { Color, Typography } from "ui";

export const SortButton = styled.button`
  ${Typography.B2}
  color: ${Color.Primary};
  background-color: ${Color.Secondary_Button};
  padding: 15px 40px;
  :hover {
    background-color: ${Color.Primary_Light};
    color: ${Color.White};
  }
`;

export const SortMenu = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
`;
export const SortButtonActive = styled(SortButton)`
  background: ${Color.Secondary_Light};
  color: ${Color.White};
`;

export const SortBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 400px;
`;
