import { ITab } from "types";
import { StyledTabsItem, Tab } from "./styles";

export interface ITabsProps {
  tabs: ITab[];
  onClick: (id: string) => void;
  selectedId: string;
}

export const TabsItem = ({ tabs, onClick, selectedId }: ITabsProps) => {
  return (
    <StyledTabsItem>
      {tabs &&
        tabs.map((tab) => (
          <Tab isActive={selectedId === tab.id} key={tab.id} onClick={() => onClick(tab.id)}>
            {tab.label}
          </Tab>
        ))}
    </StyledTabsItem>
  );
};
