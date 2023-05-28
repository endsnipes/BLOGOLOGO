import { Articles, CustomSelect, News, SortButtonByDate, TabsItem } from "../../components";

import { useState } from "react";
import { ITab } from "../../types";
import { SortBlock } from "./styles";

export const Tabs = () => {
  const tabs: ITab[] = [
    { id: "1", label: "Articles" },
    { id: "2", label: "News" },
  ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [sort, setSort] = useState<string>("Title (A-Z)");

  const handleTabClick = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <>
      <TabsItem selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
      <SortBlock>
        <SortButtonByDate />
        <CustomSelect value={sort} onSelect={setSort} />
      </SortBlock>
      {selectedTabId === tabs[0].id && <Articles />}
      {selectedTabId === tabs[1].id && <News />}
    </>
  );
};
