import React, { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import AppButton from '../../components/app-button';
import CloseButton from '../../components/app-close-button';
import ProgressBar from '../../components/app-progress-bar';
import AppText from '../../components/app-text';
import FlatScreen from '../../components/flat-screen';
import { routes } from '../../constants/routes';
import { QuestionFooterProps, QuestionScreenProps } from '../../dtos';
import { hp } from '../../utilities/fontSizes';
import { colors } from '../../utilities/styling-assets';
import { QuestionScreenStyles } from './styles';

const dummy = [
    'The retail discof Tony Hawks Pro Skater 5 only comes with the tutorial?',
    'csdcasdf afasdfasdfasdfasdfasdfasdf asfasdfasdfasdf asdfasdf',
    'The retail discof Tony Hawks Pro Skater 5 only comes with the tutorial?',
    'csdcasdf afasdfasdfasdfasdfasdfasdf asfasdfasdfasdf asdfasdf',
    'The retail discof Tony Hawks Pro Skater 5 only comes with the tutorial?',
    'csdcasdf afasdfasdfasdfasdfasdfasdf asfasdfasdfasdf asdfasdf',
    'The retail discof Tony Hawks Pro Skater 5 only comes with the tutorial?',
    'csdcasdf afasdfasdfasdfasdfasdfasdf asfasdfasdfasdf asdfasdf',
    'The retail discof Tony Hawks Pro Skater 5 only comes with the tutorial?',
    'csdcasdf afasdfasdfasdfasdfasdfasdf asfasdfasdfasdf asdfasdf',
    'The retail discof Tony Hawks Pro Skater 5 only comes with the tutorial?',
    'csdcasdf afasdfasdfasdfasdfasdfasdf asfasdfasdfasdf asdfasdf',
    'The retail discof Tony Hawks Pro Skater 5 only comes with the tutorial?',
    'csdcasdf afasdfasdfasdfasdfasdfasdf asfasdfasdfasdf asdfasdf',
];



const Footer: FunctionComponent<QuestionFooterProps> = ({ onPressFalse, onPressTrue, navigation }) => {
    return (
        <View style={QuestionScreenStyles.footer}>
            <AppButton
                typeOfButton="purple"
                text="True"
                onPress={() => navigation.navigate(routes.summaryScreen)}
                extraStyles={{ marginBottom: hp(10) }}
            />
            <AppButton typeOfButton="white" text="false" onPress={() => onPressFalse()} />
        </View>
    );
};

const _renderQuestionCard = () => {
    const _renderQuestions = (question: any, index: any) => (
        <View style={QuestionScreenStyles.questionCard}>
            <View style={QuestionScreenStyles.textWrapper}>
                <AppText text={question} align="left" size={25} color="mainColor" />
            </View>
        </View>
    );

    return (
        <View style={QuestionScreenStyles.questionContainer}>
            <FlatScreen
                data={dummy}
                showBackgroundSVG={false}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={false}
                decelerationRate={0.8}
                snapToAlignment="start"
                horizontal
                renderItem={({ item, index }) => _renderQuestions(item, index)}
            />
        </View>
    );
};

const QuestionScreen: FunctionComponent<QuestionScreenProps> = ({ navigation }) => {

    const [answeredQuestions, setAnsweredQuestions] = useState<number>(7)

    const Header: FunctionComponent = () => {

        const questionsAnswered = answeredQuestions < 10 ? `0${answeredQuestions}` : answeredQuestions;

        return (
            <View style={QuestionScreenStyles.headerContainer}>
                <View style={QuestionScreenStyles.header}>
                    <View style={QuestionScreenStyles.container}>
                        <AppText
                            text={'Entertainment: Videogames'}
                            align="center"
                            size={30}
                            color="mainColor"
                            style={{ marginBottom: hp(30) }}
                        />
                        <AppText text={'level 1'} align="center" size={13} color="mainColor" />
                    </View>
                </View>
                <ProgressBar totalQuestions={dummy.length} answeredQuestions={Number(questionsAnswered)} />
            </View>
        );
    };

    return (
        <>
            <CloseButton color={colors.mainColor} onClose={() => navigation.goBack()} />
            <FlatScreen
                shouldAddPadding={false}
                HeaderComponent={<Header />}
                ListFooterComponent={<Footer
                    navigation={navigation}
                    onPressFalse={() => console.log('false')}
                    onPressTrue={() => console.log('true')}
                />}
                data={['']}
                renderItem={({ item, index }) => _renderQuestionCard()}
            />
        </>
    );
};

export default QuestionScreen;
