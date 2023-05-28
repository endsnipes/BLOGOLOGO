import { NewsCard } from "../../components";
import { useEffect } from "react";
import { fetchAllNews, getAllNews, useAppDispatch, useAppSelector } from "../../store";

import { StyledNews } from "./styles";

export const News = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, results } = useAppSelector(getAllNews);
  useEffect(() => {
    dispatch(fetchAllNews(12));
  }, [dispatch]);
  return (
    <>
      <StyledNews>
        {isLoading ? <span>Loading...</span> : <NewsCard news={results} />}
        {error && <span>{error}</span>}
      </StyledNews>
    </>
  );
};
