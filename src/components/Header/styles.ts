import styled from "styled-components";
import { Color } from "../../ui";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 0.05fr 0.15fr;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  background-color: ${Color.Secondary};
`;
