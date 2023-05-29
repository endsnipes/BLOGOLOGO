import { SortButton } from "..";
import { useState } from "react";

export const SortButtonByDate = () => {
  const dates: string[] = ["Day", "Week", "Month", "Year"];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <SortButton selectedIndex={activeIndex} dates={dates} onClick={handleActiveIndex} />
    </>
  );
};
