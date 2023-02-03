import React, { FunctionComponent } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { PurpleBg } from '../../constants/all-svgs';
import { padding } from '../../utilities/styling-assets';
import ScreenStyles from './styles';
import { AppScreenProps } from '../interface';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utilities/fontSizes';



const AppScreen: FunctionComponent<AppScreenProps> = ({
    children,
    containerStyles,
    onBlur = () => null,
    disablePressable = false,
}) => {
    return (
        <View style={[ScreenStyles.imageBackground, containerStyles]}>
            <View style={ScreenStyles.absolute}>
                <PurpleBg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} />
            </View>
            <View style={ScreenStyles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ paddingTop: padding.screen_top }}>
                    {disablePressable && children}
                    {!disablePressable && (
                        <Pressable onPress={onBlur}>{children}</Pressable>
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

export default AppScreen;