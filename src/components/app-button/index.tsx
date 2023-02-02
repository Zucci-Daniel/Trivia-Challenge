import React, { FunctionComponent } from "react";
import { TouchableOpacity, View } from "react-native";
import { ButtonBg, PurpleButtonBg } from "../../constants/all-svgs";
import { ButtonProps, typeOfButtonTypes } from "../../dtos";
import AppText from "../app-text";
import { buttonStyles } from "./styles";




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
                <AppText text={text} align='center' color={typeOfButton == 'white' ? 'mainColor' : 'white'} size={15} style={{ textTransform: 'uppercase' }} />
            </View>
        </TouchableOpacity>
    );
};

export default AppButton;
