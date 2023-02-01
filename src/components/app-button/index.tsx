import React, { FunctionComponent } from "react";
import { TouchableOpacity, View } from "react-native";
import { ButtonBg } from "../../constants/all-svgs";
import AppText from "../app-text";
import { buttonStyles } from "./styles";


type ButtonProps = {
    text: string,
    onPress?: () => void
}

const AppButton: FunctionComponent<ButtonProps> = ({ text = 'Text', onPress = () => null }) => {
    return (
        <TouchableOpacity activeOpacity={.6} onPress={onPress} style={buttonStyles.container}>
            <ButtonBg style={buttonStyles.svg} width={'100%'} height={'100%'} />
            <View style={buttonStyles.view}>
                <AppText text={text} align='center' color="white" size={15} />
            </View>
        </TouchableOpacity>
    );
};

export default AppButton;
