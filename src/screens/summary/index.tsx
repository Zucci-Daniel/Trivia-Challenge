import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import AppButton from '../../components/app-button';
import CloseButton from '../../components/app-close-button';
import AppText from '../../components/app-text';
import FlatScreen from '../../components/flat-screen';
import {
    ActiveStarIcon,
    Avatar,
    CloseIcon,
    InActiveStarIcon,
    PassedIcon,
} from '../../constants/all-svgs';
import { CardProps, SummaryScreenProps } from '../../dtos';
import { hp } from '../../utilities/fontSizes';
import { colors } from '../../utilities/styling-assets';
import { SummaryStyles } from './styles';



const summaryData = [
    {
        passed: true,
        question:
            'The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial.',
        id: 1,
    },
    {
        passed: false,
        question:
            'The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial.',
        id: 2,
    },
    {
        passed: false,
        question:
            'The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial.',
        id: 3,
    },
    {
        passed: true,
        question:
            'The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial.',
        id: 4,
    },
    {
        passed: true,
        question:
            'The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial.',
        id: 5,
    },
    {
        passed: false,
        question:
            'The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial.',
        id: 6,
    },
    {
        passed: false,
        question:
            'The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial.',
        id: 7,
    },
    {
        passed: true,
        question:
            'The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial.',
        id: 8,
    },
];

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



const SummaryScreen: FunctionComponent<SummaryScreenProps> = ({ navigation }) => {

    const Header: FunctionComponent = () => (
        <>
            <CloseButton onClose={() => navigation.goBack()} color={colors.white} />
            <View style={SummaryStyles.header}>
                <View style={SummaryStyles.header_top}>
                    <View style={SummaryStyles.avatar}>
                        <Avatar />
                    </View>
                    <AppText style={{ lineHeight: 18 * 1.3 }} text={[
                        <AppText
                            font='Comfortaa'
                            weight='Bold'
                            text={'You scored'}
                            size={18}
                            color="white"
                            style={{ paddingHorizontal: hp(10) }}
                        />,
                        <AppText text={'6'} size={20} color="darkOrange" weight='Bold' style={{ lineHeight: 20 * 1.3 }} />,
                        <AppText text={'/10'} size={12} color="white" weight='Bold' style={{ lineHeight: 18 * 1.3 }} />
                    ]} />
                </View>
                <View style={SummaryStyles.star_row}>
                    <ActiveStarIcon />
                    <ActiveStarIcon />
                    <ActiveStarIcon />
                    <ActiveStarIcon />
                    <ActiveStarIcon />
                    <ActiveStarIcon />
                    <InActiveStarIcon />
                    <InActiveStarIcon />
                    <InActiveStarIcon />
                    <InActiveStarIcon />
                    <InActiveStarIcon />
                    <InActiveStarIcon />
                </View>
            </View>
        </>
    );

    const Footer: FunctionComponent = () => (
        <View style={SummaryStyles.footer}>
            <AppButton text="PLAY AGAIN" typeOfButton="mixed" />
        </View>
    );

    const _renderItem = (item: any, index: number) => {
        const { question, passed } = item;
        return <Card key={index} question={question} passed={passed} />;
    };

    return (
        <>
            <FlatScreen
                typeOfSvg='purple-bg'
                HeaderComponent={<Header />}
                data={summaryData}
                keyExtractor={(item, index) => item.id.toString() + index}
                renderItem={({ item, index }) => _renderItem(item, index)}
                ItemSeparatorComponent={() => <View style={SummaryStyles.separator} />}
                ListFooterComponent={<Footer />}
            />
        </>
    );
};

export default SummaryScreen;
