import {useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {
  clearArrays,
  getQuestions,
  reset,
  setAnsweredQuestions,
} from '../redux/question/questionSlice';
import {RootState, useAppDispatch} from '../redux/store';
import {GetQuestionsPayload} from '../dtos/index';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../constants/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AnsweredQuestionType} from '../components/interface';

export const useQuestions = () => {
  let dispatch: any = useAppDispatch();

  const navigation = useNavigation() as StackNavigationProp<
    Record<string, object | undefined>,
    string
  >;

  const {error, success, loading, questionsData, answeredQuestions} =
    useSelector((state: RootState) => state.questionReducer);

  const _getQuestions = (data: GetQuestionsPayload) => {
    dispatch(getQuestions(data));
  };

  const _setAnsweredQuestion = (data: AnsweredQuestionType) => {
    dispatch(setAnsweredQuestions(data));
  };

  const _clearArrays = () => {
    dispatch(clearArrays());
  };

  useEffect(() => {
    if (error) {
      Alert.alert(
        'Failed',
        'Failed to perform operation, maybe check your network',
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
        {cancelable: false},
      );
      dispatch(reset());
    }
    if (success) {
      navigation.navigate(routes.GamePlayScreen);
      dispatch(reset());
    }
  }, [error, success]);

  return {
    _getQuestions,
    _setAnsweredQuestion,
    _clearArrays,
    error,
    loading,
    questionsData,
    answeredQuestions,
  };
};
