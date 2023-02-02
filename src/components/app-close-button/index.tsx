import React, { FunctionComponent } from "react";
import { TouchableOpacity, View } from "react-native";
import { CloseIcon } from "../../constants/all-svgs";
import { detectTouch } from "../../utilities/detectTouch";
import { CloseButtonStyles } from "./styles";

type Props = {
    onClose?: () => void,
    color?: string,
}

const CloseButton: FunctionComponent<Props> = ({ onClose = () => null, color = '#4953BE' }) => {
    return (
        <TouchableOpacity hitSlop={detectTouch} onPress={onClose} style={CloseButtonStyles.container}>
            <CloseIcon fill={color} />
        </TouchableOpacity>
    );
};

export default CloseButton;
