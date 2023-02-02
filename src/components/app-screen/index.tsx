import React, { FunctionComponent } from 'react';
import { ScrollView, View, Pressable, ImageBackground } from 'react-native';
import { AppScreenProps } from '../../dtos';
import { padding } from '../../utilities/styling-assets';
import ScreenStyles from './styles';



const AppScreen: FunctionComponent<AppScreenProps> = ({
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
