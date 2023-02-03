import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AnsweredQuestionType} from '../../components/interface';
import {GetQuestionsPayload, QuestionType} from '../../dtos';
import {req_questions} from './questionServices';

type Question = {
  loading: boolean;
  error: boolean;
  success: boolean;
  questionsData: Array<QuestionType>;
  answeredQuestions: Array<AnsweredQuestionType>;
};

const initialState: Question = {
  loading: false,
  error: false,
  success: false,
  questionsData: [],
  answeredQuestions: [],
};

export const getQuestions = createAsyncThunk(
  'question/getQuestions',
  async (payload: GetQuestionsPayload, thunkAPI) => {
    try {
      return await req_questions(payload);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
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

    setAnsweredQuestions: (state: any, {payload}) => {
      state.answeredQuestions = [...state.answeredQuestions, payload];
    },
    clearArrays: (state: any) => {
      state.questionsData = [];
      state.answeredQuestions = [];
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
    });
    builder.addCase(getQuestions.rejected, (state: any, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const {reset, setAnsweredQuestions, clearArrays} =
  questionsSlice.actions;
export const questionReducer = questionsSlice.reducer;
