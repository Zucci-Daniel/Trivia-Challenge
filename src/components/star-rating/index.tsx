import React from 'react';
import { View, Text } from 'react-native';
import { StarIcon } from '../../constants/all-svgs';

interface Props {
    totalQuestions: number;
    correctAnswers: number;
}

const StarRating = (props: Props) => {
    const { totalQuestions, correctAnswers } = props;
    const rating = correctAnswers / totalQuestions;

    return (
        <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'space-around' }}>
            {Array.from({ length: 5 }, (_, index) => {
                const star = index + 1;
                if (star <= rating) {
                    return <StarIcon key={star} fill="#f1c40f" />;
                }
                if (star === Math.ceil(rating)) {
                    return <StarIcon key={star} fill="#f1c40f" opacity={rating % 1} />;
                }
                return <StarIcon key={star} fill="#cccccc" />;
            })}
        </View>
    );
};

export default StarRating;
