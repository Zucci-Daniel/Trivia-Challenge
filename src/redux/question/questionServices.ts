import {GetQuestionsPayload} from '../../dtos';
import {apiList} from '../api-lists';
import {devInstance} from '../axios/devInstance';

export const req_questions = async (payload: GetQuestionsPayload) => {
  const {amount, difficulty, type} = payload;

  const response: any = await devInstance.get(
    `${apiList.getQuestions}?amount=${amount}&difficulty=${difficulty}&type=boolean`,
  );
  return response.data;
};
