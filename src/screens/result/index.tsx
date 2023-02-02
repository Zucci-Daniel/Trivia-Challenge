import React, { FunctionComponent, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';
import AppButton from '../../components/app-button';
import CloseButton from '../../components/app-close-button';
import AppText from '../../components/app-text';
import FlatScreen from '../../components/flat-screen';
import StarRating from '../../components/star-rating';
import {
    ActiveStarIcon,
    Avatar,
    CloseIcon,
    InActiveStarIcon,
    PassedIcon,
} from '../../constants/all-svgs';
import { AnsweredQuestionType, CardProps, ResultScreenProps } from '../../dtos';
import { useQuestions } from '../../hooks/useQuestions';
import { hp } from '../../utilities/fontSizes';
import { colors } from '../../utilities/styling-assets';
import { SummaryStyles } from './styles';


const Card: FunctionComponent<CardProps> = ({
    passed = true,
    question = 'question',
}) => (
    <View
        style={[
            SummaryStyles.card,
            { backgroundColor: passed ? colors.passed_color : colors.failed_color },
        ]}>
        <View style={{ flex: 0.9 }}>
            <AppText weight='Medium' text={question} size={12} color="summaryCardTextColor" />
        </View>
        {passed ? <PassedIcon /> : <CloseIcon fill={colors.mainColor} />}
    </View>
);


const ResultScreen: FunctionComponent<ResultScreenProps> = ({ navigation }) => {

    const { answeredQuestions, questionsData, _clearArrays } = useQuestions();

    const _handlePassCount = () => answeredQuestions.filter((item: AnsweredQuestionType, index: number) => item.passed == true).length;

    const _handleClose = () => {
        _clearArrays()
        navigation.goBack()
    }

    const Header: FunctionComponent = () => (
        <>
            <CloseButton onClose={() => _handleClose()} color={colors.white} />
            <View style={SummaryStyles.header}>
                <View style={SummaryStyles.header_top}>
                    <View style={SummaryStyles.avatar}>
                        <Avatar />
                    </View>
                    <AppText style={{ lineHeight: 18 * 1.3 }} text={[
                        <AppText
                            key={0}
                            font='Comfortaa'
                            weight='Bold'
                            text={'You scored'}
                            size={18}
                            color="white"
                            style={{ paddingHorizontal: hp(10) }}
                        />,

                        < AppText key={1} text={_handlePassCount()} size={20} color="darkOrange" weight='Bold' style={{ lineHeight: 20 * 1.3 }} />,
                        <AppText key={2} text={`/${questionsData?.length}`} size={12} color="white" weight='Bold' style={{ lineHeight: 18 * 1.3 }} />
                    ]} />
                </View>
                <View style={SummaryStyles.star_row}>
                    <StarRating totalQuestions={questionsData?.length} correctAnswers={_handlePassCount()} />
                </View>
            </View>
        </>
    );

    const Footer: FunctionComponent = () => (
        <View style={SummaryStyles.footer}>
            <AppButton text="PLAY AGAIN" typeOfButton="mixed" onPress={() => _handleClose()} />
        </View>
    );

    const _renderItem = (item: AnsweredQuestionType, index: number) => {
        const { question, passed } = item;
        return <Card key={index} question={question} passed={passed} />;
    };

    return (
        <>
            <FlatScreen
                typeOfSvg='purple-bg'
                HeaderComponent={<Header />}
                data={answeredQuestions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => _renderItem(item, index)}
                ItemSeparatorComponent={() => <View style={SummaryStyles.separator} />}
                ListFooterComponent={<Footer />}
            />
        </>
    );
};

export default ResultScreen;
