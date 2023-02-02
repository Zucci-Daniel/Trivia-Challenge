import React, { FunctionComponent, useState } from "react";
import { View } from "react-native";
import AppButton from "../../components/app-button";
import InputField from "../../components/app-input";
import AppScreen from "../../components/app-screen";
import AppText from "../../components/app-text";
import { CaretIcon, Logo } from "../../constants/all-svgs";
import { routes } from "../../constants/routes";
import { WelcomeScreenInputTypes, WelcomeScreenProps } from "../../dtos";
import { WelcomeScreenStyles } from "./styles";


const difficultyOptions = [
    'hard',
    'easy',
    'medium'
]

const WelcomeScreen: FunctionComponent<WelcomeScreenProps> = ({ navigation }) => {

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const _handleSelectedOption = (text: string) => {
        setShowDropDown(false)
    }

    const inputs: Array<WelcomeScreenInputTypes> = [
        {
            label: 'Difficulty',
            typeOfIcon: 'difficulty',
            suffixIcon: <CaretIcon />,
            onPressSuffix: () => setShowDropDown(!showDropDown),
            value: 'dfsdfsdf',
            editable: false,
            onPress: () => null,
            hasDropDown: true
        },
        {
            label: 'Amount',
            typeOfIcon: 'star-rate',
            value: 'dfsdfsdf',
            onPress: () => null
        },
    ]


    const _renderInputs = () => {
        return inputs?.map(({ label, onPress, onPressSuffix, suffixIcon, typeOfIcon, value, editable, hasDropDown }, index) => <InputField
            key={index}
            label={label}
            typeOfIcon={typeOfIcon}
            onPressSuffix={onPressSuffix}
            suffixIcon={suffixIcon ? suffixIcon : null}
            value={value}
            editable={editable}
            onPress={onPress}
            dropDown={(hasDropDown && showDropDown) && <>
                <View style={WelcomeScreenStyles.dropDown}>
                    {difficultyOptions?.map((text, index) => <AppText onPress={() => _handleSelectedOption(text)} readonly={false} key={index} size={15} color='black' text={text} style={WelcomeScreenStyles.options} />)}
                </View>
            </>}
        />)
    }

    const _handleCloseDropDown = () => setShowDropDown(false)

    return (
        <AppScreen
            onBlur={_handleCloseDropDown}
        >
            <AppText font="Quicksand" weight="Bold" text={'Welcome to the'} align='center' size={26} color='white' />
            <Logo />
            {_renderInputs()}
            <View style={WelcomeScreenStyles.buttonContainer}>
                <AppButton typeOfButton="mixed" text="True" onPress={() => navigation.navigate(routes.questionScreen)} />
            </View>
        </AppScreen >
    );
};

export default WelcomeScreen;
