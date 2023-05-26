import { LogoIcon } from "assets";
import { Search, User } from "components";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <LogoIcon />
      <Search />
      <User />
    </StyledHeader>
  );
};
