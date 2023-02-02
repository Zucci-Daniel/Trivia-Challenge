import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetQuestionsPayload} from '../../dtos';
import {req_questions} from './questionServices';

type Question = {
  loading: boolean;
  error: boolean;
  questionsData: Array<any>;
};

const initialState: Question = {
  loading: false,
  error: false,
  questionsData: [],
};

export const getQuestions = createAsyncThunk(
  'question/getQuestions',
  async (payload: GetQuestionsPayload) => {
    const {amount, difficulty, type} = payload;
    try {
      return await req_questions(amount, difficulty, type);
    } catch (error) {
      return error.message || error.toString();
    }
  },
);

export const questionsSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    reset: (state: any) => {},
  },
  extraReducers: builder => {
    builder.addCase(getQuestions.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(getQuestions.fulfilled, (state: any) => {
      state.questionsData;
      state.isLoading = true;
    });
    builder.addCase(getQuestions.rejected, (state: any) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export const {reset} = questionsSlice.actions;
export const questionReducer = questionsSlice.reducer;
