import styled from "styled-components";
import { SearchIcon } from "assets";

export const StyledSearchIcon = styled(SearchIcon)`
  & path {
    stroke: ${({ color }) => color || "white"};
  }
`;
