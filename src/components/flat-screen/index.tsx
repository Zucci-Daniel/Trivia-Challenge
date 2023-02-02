import React, { FC } from 'react';
import {
    FlatList,
    View
} from 'react-native';
import { FlatScreenProps } from '../../dtos';
import { hp } from '../../utilities/fontSizes';
import { colors } from '../../utilities/styling-assets';
import { FlatScreenStyles } from './styles';


const FlatScreen: FC<FlatScreenProps> = ({
    children,
    extraStyles,
    background = colors.mainColor,
    HeaderComponent,
    shouldAddPadding = true,
    ...flatListProps
}) => {

    return (
        <View style={[FlatScreenStyles.container, { paddingHorizontal: shouldAddPadding ? hp(30) : 0 }]}>
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
