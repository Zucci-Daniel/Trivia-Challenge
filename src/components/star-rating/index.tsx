import React from 'react';
import { View, Image } from 'react-native';
import { StarIcon } from '../../constants/all-svgs/index';
import { AnsweredQuestionType } from '../../dtos';

type Props = {
    questions: Array<AnsweredQuestionType>;
    numberOfCorrectAnswers?: number
}

const StarIconComp = ({ isFilled }: { isFilled: boolean }) => {
    return (
        <StarIcon fill={isFilled ? 'red' : 'white'} />
    );
};

const StarRating = ({ questions, numberOfCorrectAnswers = 3 }: Props) => {
    const rating = numberOfCorrectAnswers / questions.length;
    const numberOfFilledStars = Math.round(rating * 5);

    return (
        <View style={{ flexDirection: 'row' }}>
            {Array.from({ length: 5 }, (_, index) => (
                <StarIconComp key={index} isFilled={index < numberOfFilledStars} />
            ))}
        </View>
    );
};

export default StarRating;
