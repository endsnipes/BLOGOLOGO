import { Button, StyledSortButtons } from "./styles";

export interface IProps {
  onClick: (id: number) => void;
  selectedIndex: number;
  dates: string[];
}

export const SortButton = ({ dates, onClick, selectedIndex }: IProps) => {
  return (
    <StyledSortButtons>
      {dates.map((date, id) => {
        return (
          <Button key={date} isActive={selectedIndex === id} onClick={() => onClick(id)}>
            {date}
          </Button>
        );
      })}
    </StyledSortButtons>
  );
};
