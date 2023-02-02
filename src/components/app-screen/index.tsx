import React, { FunctionComponent, ReactNode } from 'react';
import { ScrollView, ViewStyle, View, Pressable, ScrollViewProps, ImageBackground } from 'react-native';
import { padding } from '../../utilities/styling-assets';
import ScreenStyles from './styles';

type ScreenType = {
    children?: ReactNode;
    background?: string;
    containerStyles?: ViewStyle,
    onBlur?: () => void;
    disablePressable?: boolean;
} & Omit<ScrollViewProps, 'children'>;


const AppScreen: FunctionComponent<ScreenType> = ({
    children, containerStyles, onBlur = () => null, disablePressable = false
}) => {
    return (
        <ImageBackground style={[ScreenStyles.imageBackground, containerStyles]} source={require('../../assets/svgs/purple-bg.svg')}>
            <View style={ScreenStyles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ paddingTop: padding.screen_top, }}
                >
                    {disablePressable && children}
                    {!disablePressable && <Pressable onPress={onBlur}>
                        {children}
                    </Pressable>}
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default AppScreen;
