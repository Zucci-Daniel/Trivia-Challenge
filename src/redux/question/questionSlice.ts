import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetQuestionsPayload} from '../../dtos';
import {req_questions} from './questionServices';

type Question = {
  loading: boolean;
  error: boolean;
  success: boolean;
  questionsData: Array<any>;
};

const initialState: Question = {
  loading: false,
  error: false,
  success: false,
  questionsData: [],
};

export const getQuestions = createAsyncThunk(
  'question/getQuestions',
  async (payload: GetQuestionsPayload) => {
    try {
      return await req_questions(payload);
    } catch (error) {
      return error.message || error.toString();
    }
  },
);

export const questionsSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    reset: (state: any) => {
      state.loading = false;
      state.success = false;
      state.error = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(getQuestions.pending, (state: any, action) => {
      state.loading = true;
    });
    builder.addCase(getQuestions.fulfilled, (state: any, action) => {
      state.success = true;
      state.questionsData = action.payload.results;
      state.loading = false;
      console.log(action.payload.results);
    });
    builder.addCase(getQuestions.rejected, (state: any, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const {reset} = questionsSlice.actions;
export const questionReducer = questionsSlice.reducer;
