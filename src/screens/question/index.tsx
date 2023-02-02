import React, { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import AppButton from '../../components/app-button';
import CloseButton from '../../components/app-close-button';
import ProgressBar from '../../components/app-progress-bar';
import AppText from '../../components/app-text';
import FlatScreen from '../../components/flat-screen';
import { routes } from '../../constants/routes';
import { AnsweredQuestionType, QuestionFooterProps, QuestionScreenProps } from '../../dtos';
import { useQuestions } from '../../hooks/useQuestions';
import { hp } from '../../utilities/fontSizes';
import { colors } from '../../utilities/styling-assets';
import { QuestionScreenStyles } from './styles';



const Footer: FunctionComponent<QuestionFooterProps> = ({ onPressFalse, onPressTrue }) => {
    return (
        <View style={QuestionScreenStyles.footer}>
            <AppButton
                typeOfButton="purple"
                text="True"
                onPress={() => onPressTrue()}
                extraStyles={{ marginBottom: hp(10) }}
            />
            <AppButton typeOfButton="white" text="false" onPress={() => onPressFalse()} />
        </View>
    );
};


const QuestionScreen: FunctionComponent<QuestionScreenProps> = ({ navigation }) => {

    const { questionsData, _setAnsweredQuestion } = useQuestions();
    const [answeredQuestions, setAnsweredQuestions] = useState<number>(0)


    const questions = questionsData[answeredQuestions]

    const Header: FunctionComponent = () => {
        return (
            <View style={QuestionScreenStyles.headerContainer}>
                <View style={QuestionScreenStyles.header}>
                    <View style={QuestionScreenStyles.container}>
                        <AppText
                            text={questions?.category}
                            align="center"
                            size={30}
                            weight='Bold'
                            color="mainColor"
                            style={{ marginBottom: hp(30) }}
                        />
                        <AppText text={'level 1'} align="center" size={13} color="mainColor" weight='Medium' style={{ letterSpacing: 13 * 0.5 }} />
                    </View>
                </View>
                <ProgressBar totalQuestions={questionsData?.length} answeredQuestions={answeredQuestions + 1} />
            </View>
        );
    };


    const _renderQuestionCard = () => {
        const _renderQuestions = () => (
            <View style={QuestionScreenStyles.questionCard}>
                <View style={QuestionScreenStyles.textWrapper}>
                    <AppText weight='Medium' text={questions?.question} align="left" size={25} color="mainColor" />
                </View>
            </View>
        );

        return (
            <View style={QuestionScreenStyles.questionContainer}>
                <FlatScreen
                    data={questionsData}
                    showBackgroundSVG={false}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    alwaysBounceHorizontal={false}
                    decelerationRate={0.8}
                    snapToAlignment="start"
                    horizontal
                    renderItem={({ item, index }) => _renderQuestions()}
                />
            </View>
        );
    };

    const _handleNextOption = (choosed: boolean) => {

        const action = () => {
            const payload: AnsweredQuestionType = {
                passed: Boolean(questions.correct_answer) == choosed,//convert the "true" to boolean and compare with the currently selected answer.
                question: questions.question
            }
            _setAnsweredQuestion(payload)
            setAnsweredQuestions(answeredQuestions + 1)
        }

        if ((answeredQuestions + 1) > questionsData.length - 1) {
            action()
            navigation.replace(routes.summaryScreen)
        }
        else {
            action()
        }
    }


    return (
        <>
            <CloseButton color={colors.mainColor} onClose={() => navigation.goBack()} />
            <FlatScreen
                shouldAddPadding={false}
                HeaderComponent={<Header />}
                ListFooterComponent={<Footer
                    navigation={navigation}
                    onPressFalse={() => _handleNextOption(false)}
                    onPressTrue={() => _handleNextOption(true)}
                />}
                data={['']}
                renderItem={({ item, index }) => _renderQuestionCard()}
            />
        </>
    );
};

export default QuestionScreen;
