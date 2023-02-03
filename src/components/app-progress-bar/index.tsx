import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import AppText from '../app-text';
import { ProgressBarProps } from '../interface';
import { ProgressBarStyling } from './styles';



const ProgressBar: FunctionComponent<ProgressBarProps> = ({ answeredQuestions = 3, totalQuestions = 20 }) => {

    const width = (answeredQuestions / totalQuestions) * 100 + '%';

    const formatedNumber = (number: number) => number < 10 ? '0' + number : number;


    return (
        <>
            <View style={ProgressBarStyling.number_wrapper}>
                <AppText weight='Bold' text={`${formatedNumber(answeredQuestions)}`} size={20} color="darkOrange" />
                <AppText weight='Bold' text={`/${totalQuestions}`} size={12} color="mainColor" />
            </View>
            <View style={ProgressBarStyling.container}>
                <View style={[ProgressBarStyling.progress, { width }]} />
            </View>
        </>
    );
};


export default ProgressBar;
