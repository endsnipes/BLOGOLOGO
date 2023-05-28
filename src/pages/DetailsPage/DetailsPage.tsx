import { ArticlesDetails, Spinner } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById, getArticlesById, useAppDispatch, useAppSelector } from "store";

export const DetailsPage = () => {
  const params = useParams();
  const [details] = useState(`${params.id}`);
  const { results, isLoading } = useAppSelector(getArticlesById);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArticleById(details));
  }, [dispatch, details]);

  return <div>{isLoading ? <Spinner /> : <ArticlesDetails articles={results} />}</div>;
};
