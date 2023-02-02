import React, { FunctionComponent } from "react";
import { TouchableOpacity, View } from "react-native";
import { CloseIcon } from "../../constants/all-svgs";
import { ClosButtonProps } from "../../dtos";
import { detectTouch } from "../../utilities/detectTouch";
import { colors } from "../../utilities/styling-assets";
import { CloseButtonStyles } from "./styles";



const CloseButton: FunctionComponent<ClosButtonProps> = ({ onClose = () => null, color = colors.mainColor }) => {
    return (
        <TouchableOpacity hitSlop={detectTouch} onPress={onClose} style={CloseButtonStyles.container}>
            <CloseIcon fill={color} />
        </TouchableOpacity>
    );
};

export default CloseButton;
