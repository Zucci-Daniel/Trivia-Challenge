import React, { FunctionComponent, ReactNode } from 'react';
import { ScrollView, ViewStyle, Pressable, RefreshControl, ScrollViewProps, ImageBackground, KeyboardAvoidingView } from 'react-native';
import ScreenStyles from './styles';

type ScreenType = {
    children?: ReactNode;
    background?: string;
    containerStyles?: ViewStyle,
    onBlur?: () => void;
} & Omit<ScrollViewProps, 'children'>;


const AppScreen: FunctionComponent<ScreenType> = ({
    children, containerStyles, onBlur = () => null
}) => {
    return (
        <ImageBackground style={[ScreenStyles.imageBackground, containerStyles]} source={require('../../assets/svgs/purple-bg.svg')}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <Pressable style={{ flex: 1 }} onPress={onBlur}>
                        {children}
                    </Pressable>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

export default AppScreen;
