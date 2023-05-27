import { useToggle } from "hooks";
import { Color } from "ui";
import { StyledSearchIcon } from "./styles";

export const Search = () => {
  const [isSearchActive, toggleSearchActive] = useToggle(true);
  const handleSearch = () => {
    toggleSearchActive();
  };
  return (
    <>
      {isSearchActive ? (
        <StyledSearchIcon color={Color.Primary} onClick={handleSearch} />
      ) : (
        <input></input>
      )}
    </>
  );
};
