import {req_questions} from './questionServices';
import {devInstance} from '../axios/devInstance';
import {GetQuestionsPayload} from '../../dtos';

jest.mock('../axios/devInstance', () => ({
  devInstance: {
    get: jest.fn().mockResolvedValue({data: 'mock data'}),
  },
}));

describe('req_questions', () => {
  it('should call devInstance.get with the correct parameters', async () => {
    const payload: GetQuestionsPayload = {
      amount: 10,
      difficulty: 'easy',
      type: 'boolean',
    };

    await req_questions(payload);

    expect(devInstance.get).toHaveBeenCalledWith(
      '/api.php?amount=10&difficulty=easy&type=boolean',
    );
  });

  it('should return the data from the response', async () => {
    const payload: GetQuestionsPayload = {
      amount: 10,
      difficulty: 'easy',
      type: 'boolean',
    };

    const result = await req_questions(payload);

    expect(result).toEqual('mock data');
  });

  it('should default to 10 questions if amount is not provided', async () => {
    const payload: any = {
      difficulty: 'easy',
      type: 'boolean',
    };

    await req_questions(payload);

    expect(devInstance.get).toHaveBeenCalledWith(
      '/api.php?amount=10&difficulty=easy&type=boolean',
    );
  });

  it('should handle difficulty levels other than "easy"', async () => {
    const payload: GetQuestionsPayload = {
      amount: 5,
      difficulty: 'hard',
      type: 'boolean',
    };

    await req_questions(payload);

    expect(devInstance.get).toHaveBeenCalledWith(
      '/api.php?amount=5&difficulty=hard&type=boolean',
    );
  });
});
