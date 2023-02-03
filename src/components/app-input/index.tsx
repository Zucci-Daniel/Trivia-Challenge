/* eslint-disable react-native/no-inline-styles */
import { TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { inputFieldStyle } from './styles';
import AppText from '../app-text';
import { colors } from '../../utilities/styling-assets';
import { StarRate, WorldCup } from '../../constants/all-svgs';
import { fontSz, hp } from '../../utilities/fontSizes';
import { detectTouch } from '../../utilities/detectTouch';
import { InputFieldProps } from '../interface';



function InputField(_props: InputFieldProps) {
    const {
        textInputProps,
        label,
        editable,
        placeHolderColor = colors.input_value,
        autoFocus = false,
        suffixIcon,
        value,
        onPressSuffix = () => null,
        onChangeText = (text: string) => text,
        typeOfIcon = 'star-rate',
        dropDown
    } = _props;
    return (
        <>
            <KeyboardAvoidingView behavior="padding">
                <View style={inputFieldStyle.labelContainer}>
                    {typeOfIcon === 'star-rate' ? <StarRate /> : <WorldCup />}
                    <AppText weight='Bold' text={label} size={13} color='label' align='center' style={{ marginLeft: hp(11) }} />
                </View>
                <View style={inputFieldStyle.input}>
                    <TextInput
                        returnKeyType='done'
                        placeholderTextColor={placeHolderColor}
                        style={inputFieldStyle.textInput}
                        editable={editable}
                        value={value}
                        autoCapitalize="none"
                        autoFocus={autoFocus}
                        onChangeText={(text: string) => onChangeText(text)}
                        autoComplete="off"
                        {...textInputProps}
                    />
                    <TouchableOpacity hitSlop={detectTouch} onPress={onPressSuffix} style={{ marginLeft: fontSz(8) }}>{suffixIcon}</TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            {dropDown}
        </>
    );
}

export default InputField;
