import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IArticles } from "../../../types";
import { newsAPI } from "../../../services";

interface IArticlesState {
  results: IArticles;
  isLoading: boolean;
  error: null | string;
}

export const fetchArticleById = createAsyncThunk<IArticles, string, { rejectValue: string }>(
  "articles/fetchArticleById",
  async (params, { rejectWithValue }) => {
    try {
      return await newsAPI.getArticlesById(params);
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

const initialState: IArticlesState = {
  results: {} as IArticles,
  isLoading: false,
  error: null,
};

const articlesByIdSlice = createSlice({
  name: "articlesById",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticleById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchArticleById.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articlesByIdSlice.reducer;
