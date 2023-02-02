import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { ProgressBarProps } from '../../dtos';
import AppText from '../app-text';
import { ProgressBarStyling } from './styles';



const ProgressBar: FunctionComponent<ProgressBarProps> = ({ answeredQuestions = 3, totalQuestions = 20 }) => {

    const width = (answeredQuestions / totalQuestions) * 100 + '%';

    return (
        <>
            <View style={ProgressBarStyling.number_wrapper}>
                <AppText text={`${answeredQuestions}`} size={20} color="darkOrange" />
                <AppText text={`/${totalQuestions}`} size={12} color="mainColor" />
            </View>
            <View style={ProgressBarStyling.container}>
                <View style={[ProgressBarStyling.progress, { width }]} />
            </View>
        </>
    );
};


export default ProgressBar;
