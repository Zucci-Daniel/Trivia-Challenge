/* eslint-disable react-native/no-inline-styles */
import { TextInput, TextInputProps, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { inputFieldStyle } from './styles';
import AppText from '../app-text';
import { colors } from '../../utilities/styling-assets';
import { StarRate, WorldCup } from '../../constants/all-svgs';
import { fontSz, hp } from '../../utilities/fontSizes';

type inputType = {
    isError?: boolean;
    editable?: boolean;
    autoFocus?: boolean;
    error?: string;
    suffixIcon?: JSX.Element | null;
    leftSuffixIcon?: JSX.Element;
    textInputProps?: TextInputProps;
    label?: string;
    value: string;
    onPressSuffix?: () => void;
    onPress?: () => void;
    placeHolderColor?: string;
    typeOfIcon?: 'difficulty' | 'star-rate'
};

function InputField(_props: inputType) {
    const {
        textInputProps,
        label,
        editable,
        placeHolderColor = colors.input_value,
        autoFocus = false,
        suffixIcon,
        value,
        onPressSuffix = () => null,
        onPress = (text: string) => null,
        typeOfIcon = 'star-rate'
    } = _props;
    return (
        <>
            <View style={inputFieldStyle.labelContainer}>
                {typeOfIcon == 'star-rate' ? <StarRate /> : <WorldCup />}
                <AppText text={label} size={13} color='label' align='center' style={{ marginLeft: hp(11) }} />
            </View>
            <View style={inputFieldStyle.input}>
                <TextInput
                    placeholderTextColor={placeHolderColor}
                    style={inputFieldStyle.textInput}
                    editable={editable}
                    value={value}
                    autoCapitalize="none"
                    autoFocus={autoFocus}
                    onChangeText={(text: string) => onPress(text)}
                    autoComplete="off"
                    {...textInputProps}
                />
                <TouchableOpacity onPress={onPressSuffix} style={{ marginLeft: fontSz(8) }}>{suffixIcon}</TouchableOpacity>
            </View>
        </>
    );
}

export default InputField;
