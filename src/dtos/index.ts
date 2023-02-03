export type GetQuestionsPayload = {
  amount: number;
  difficulty: 'easy' | 'hard';
  type: string; //should have been boolean (true/false),but then the endpoint doesn't return any data for this unless i use "boolean"
};

export type QuestionType = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
};

type DataProps = {
  response_code: number;
  results: Array<QuestionType>;
};

export type QuestionResType = {
  data: DataProps;
};
