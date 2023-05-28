import { LogoIcon } from "../../assets";
import { Search } from "../Search/Search";
import { User } from "../User/User";
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
