import React, { FunctionComponent } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { ButtonBg, PurpleButtonBg } from "../../constants/all-svgs";
import { colors } from "../../utilities/styling-assets";
import AppText from "../app-text";
import { buttonStyles } from "./styles";

export type typeOfButtonTypes = 'purple' | 'white' | 'mixed'

type ButtonProps = {
    text: string,
    onPress?: () => void,
    extraStyles?: ViewStyle,
    typeOfButton: 'purple' | 'white' | 'mixed'
}

const AppButton: FunctionComponent<ButtonProps> = ({ text = 'Text', onPress = () => null, typeOfButton = 'mixed', extraStyles }) => {

    const _renderTypeOfButton = (typeOfButton: typeOfButtonTypes) => {
        switch (typeOfButton) {
            case 'mixed':
                return <ButtonBg style={buttonStyles.svg} width={'100%'} height={'100%'} />
            case 'purple':
                return <PurpleButtonBg style={buttonStyles.svg} width={'100%'} height={'100%'} />
            case 'white':
                return <View style={buttonStyles.normalButton} />
            default:
                return <View style={buttonStyles.normalButton} />;
        }
    }

    return (
        <TouchableOpacity activeOpacity={.6} onPress={onPress} style={[buttonStyles.container, extraStyles]}>
            {_renderTypeOfButton(typeOfButton)}
            <View style={buttonStyles.view}>
                <AppText text={text} align='center' color={typeOfButton == 'white' ? 'mainColor' : 'white'} size={15} />
            </View>
        </TouchableOpacity>
    );
};

export default AppButton;
