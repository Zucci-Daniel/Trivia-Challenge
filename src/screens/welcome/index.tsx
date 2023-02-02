import React, { FunctionComponent, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import AppButton from "../../components/app-button";
import InputField from "../../components/app-input";
import AppScreen from "../../components/app-screen";
import AppText from "../../components/app-text";
import { CaretIcon, Logo } from "../../constants/all-svgs";
import { GetQuestionsPayload, WelcomeScreenInputTypes, WelcomeScreenProps } from "../../dtos";
import { WelcomeScreenStyles } from "./styles";
import { useQuestions } from '../../hooks/useQuestions'
import { colors } from "../../utilities/styling-assets";
import { hp } from "../../utilities/fontSizes";

const difficultyOptions = [
    'hard',
    'easy',
    'medium'
]

const WelcomeScreen: FunctionComponent<WelcomeScreenProps> = ({ navigation }) => {

    const { _getQuestions, loading } = useQuestions();

    const [options, setOptions] = useState<GetQuestionsPayload>({
        amount: 10,
        difficulty: "easy",
        type: "boolean"
    })

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const _onChangeText = (key: string, text: string) => {
        setOptions({
            ...options,
            [key]: text,
        });
    };

    //handles
    const _handleSelectedOption = (key: string, value: string) => {
        setShowDropDown(false)
        _onChangeText(key, value)
    }

    const _submit = () => {
        _getQuestions({ amount: Number(amount), difficulty, type })
    }


    const { amount, difficulty, type } = options

    //inputs
    const inputs: Array<WelcomeScreenInputTypes> = [
        {
            label: 'Difficulty',
            typeOfIcon: 'difficulty',
            suffixIcon: <CaretIcon />,
            onPressSuffix: () => setShowDropDown(!showDropDown),
            value: difficulty,
            editable: false,
            hasDropDown: true
        },
        {
            label: 'Amount',
            typeOfIcon: 'star-rate',
            value: amount.toString(),
            keyboardType: 'number-pad'

        },
    ]


    const _renderInputs = () => {
        return inputs?.map(({ label, onPressSuffix, keyboardType, suffixIcon, typeOfIcon, value, editable, hasDropDown }, index) => <InputField
            key={index}
            label={label}
            typeOfIcon={typeOfIcon}
            onPressSuffix={onPressSuffix}
            suffixIcon={suffixIcon ? suffixIcon : null}
            textInputProps={{ keyboardType: keyboardType }}
            value={value}
            editable={editable}
            onChangeText={(text) => _onChangeText(label.toLowerCase(), text)}
            dropDown={(hasDropDown && showDropDown) && <>
                <View style={WelcomeScreenStyles.dropDown}>
                    {difficultyOptions?.map((text, index) => <AppText onPress={() => _handleSelectedOption('difficulty', text)} readonly={false} key={index} size={15} color='black' text={text} style={WelcomeScreenStyles.options} />)}
                </View>
            </>}
        />)
    }

    const _handleCloseDropDown = () => setShowDropDown(false)


    return (loading ? <ActivityIndicator color={colors.white} size={hp(50)} style={{ flex: 1, backgroundColor: colors.mainColor }} /> :
        <AppScreen
            onBlur={_handleCloseDropDown}
        >
            <AppText font="Quicksand" weight="Bold" text={'Welcome to the'} align='center' size={26} color='white' />
            <Logo />
            {_renderInputs()}
            <View style={WelcomeScreenStyles.buttonContainer}>
                <AppButton typeOfButton="mixed" text="True" onPress={() => _submit()} />
            </View>
        </AppScreen >
    );
};

export default WelcomeScreen;
