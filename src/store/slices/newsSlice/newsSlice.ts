import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { INews } from "../../../types";
import { newsAPI } from "../../../services";

interface INewsState {
  results: INews[];
  isLoading: boolean;
  error: null | string;
}

export const fetchAllNews = createAsyncThunk<INews[], number, { rejectValue: string }>(
  "news/fetchAll",
  async (params, { rejectWithValue }) => {
    try {
      return await newsAPI.getNews(params);
    } catch (error) {
      const errorResponse = error as AxiosError;
      return rejectWithValue(errorResponse.message);
    }
  },
);

const initialState: INewsState = {
  results: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllNews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllNews.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchAllNews.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default newsSlice.reducer;
