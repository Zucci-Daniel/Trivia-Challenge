import React, { FunctionComponent } from "react";
import { TouchableOpacity, View } from "react-native";
import { ButtonBg, PurpleButtonBg, TransparentButtonBg } from "../../constants/all-svgs";
import AppText from "../app-text";
import { ButtonProps, typeOfButtonTypes } from "../interface";
import { buttonStyles } from "./styles";




const AppButton: FunctionComponent<ButtonProps> = ({ text = 'text', onPress = () => null, typeOfButton = 'mixed', extraStyles }) => {

    const _renderTypeOfButton = (typeOfButton: typeOfButtonTypes) => {
        switch (typeOfButton) {
            case 'mixed':
                return <ButtonBg style={buttonStyles.svg} width={'100%'} height={'100%'} />
            case 'purple':
                return <PurpleButtonBg style={buttonStyles.svg} width={'100%'} height={'100%'} />
            case 'white':
                return <TransparentButtonBg style={buttonStyles.svg} width={'100%'} height={'100%'} />
            default:
                return <TouchableOpacity style={buttonStyles.normalButton} />;
        }
    }

    return (
        <TouchableOpacity testID="touchable" activeOpacity={.6} onPress={onPress} style={[buttonStyles.container, extraStyles]}>
            {_renderTypeOfButton(typeOfButton)}
            <View style={buttonStyles.view}>
                <AppText text={text} align='center' weight="Bold" color={typeOfButton == 'white' ? 'mainColor' : 'white'} size={15} style={{ textTransform: 'uppercase' }} />
            </View>
        </TouchableOpacity>
    );
};

export default AppButton;
