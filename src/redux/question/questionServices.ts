import {apiList} from '../api-lists';
import {devInstance} from '../axios/devInstance';

export const req_questions = async (
  amount: number,
  difficulty: 'easy' | 'hard',
  type: boolean,
) => {
  const response: any = await devInstance.get(
    `${apiList.getQuestions}?amount=${amount}&difficulty=${difficulty}&type=${type}`,
  );
  console.log(response.data, ' ahh');
  return response.data;
};
