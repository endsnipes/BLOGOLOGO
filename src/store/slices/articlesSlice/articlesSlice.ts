import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IArticles } from "../../../types";
import { newsAPI } from "../../../services";

interface IArticlesState {
  results: IArticles[];
  isLoading: boolean;
  error: null | string;
}

export const fetchAllArticles = createAsyncThunk<IArticles[], number, { rejectValue: string }>(
  "articles/fetchAll",
  async (params, { rejectWithValue }) => {
    try {
      return await newsAPI.getArticles(params);
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

const initialState: IArticlesState = {
  results: [],
  isLoading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchAllArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articlesSlice.reducer;
