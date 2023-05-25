import { MainTemplate } from "components";
import { DetailsPage, MainPage, SearchPage, SignInPage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.MAIN} element={<MainTemplate />}>
      <Route index element={<MainPage />} />
      <Route path={ROUTE.SIGNIN} element={<SignInPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
    </Route>,
  ),
);
