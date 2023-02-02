import React, { FC } from 'react';
import {
    FlatList,
    View
} from 'react-native';
import { FlatScreenProps } from '../../dtos';
import { colors } from '../../utilities/styling-assets';
import { FlatScreenStyles } from './styles';


const FlatScreen: FC<FlatScreenProps> = ({
    children,
    extraStyles,
    background = colors.mainColor,
    HeaderComponent,
    ...flatListProps
}) => {

    return (
        <View style={FlatScreenStyles.container}>
            <FlatList
                keyboardShouldPersistTaps="always"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={HeaderComponent ? HeaderComponent : null}
                {...flatListProps}
            />
        </View>
    );
};

export default FlatScreen;
