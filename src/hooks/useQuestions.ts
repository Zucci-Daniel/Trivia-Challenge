import {useSelector} from 'react-redux';
import {getQuestions, reset} from '../redux/question/questionSlice';
import {RootState, useAppDispatch} from '../redux/store';
import {GetQuestionsPayload} from '../dtos/index';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../constants/routes';
import {StackNavigationProp} from '@react-navigation/stack';

export const useQuestions = () => {
  let dispatch: any = useAppDispatch();

  const navigation = useNavigation() as StackNavigationProp<
    Record<string, object | undefined>,
    string
  >;

  const {error, success, loading, questionsData} = useSelector(
    (state: RootState) => state.questionReducer,
  );

  const _getQuestions = (data: GetQuestionsPayload) => {
    dispatch(getQuestions(data));
  };

  useEffect(() => {
    if (error) {
      //show error state
      dispatch(reset());
    }
    if (success) {
      navigation.navigate(routes.questionScreen);
      dispatch(reset());
    }
  }, [error, success]);

  return {_getQuestions, error, loading, questionsData};
};
