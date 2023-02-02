import React, { FC, ReactNode } from 'react';
import {
    ViewStyle,
    FlatList,
    FlatListProps, View
} from 'react-native';
import { colors } from '../../utilities/styling-assets';
import { FlatScreenStyles } from './styles';

type Props = {
    children?: ReactNode;
    extraStyles?: ViewStyle;
    HeaderComponent?: JSX.Element;
    background?: string;
} & Omit<FlatListProps<any>, 'children'>;


const FlatScreen: FC<Props> = ({
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
