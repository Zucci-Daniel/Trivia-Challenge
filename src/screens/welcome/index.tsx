import React, { FunctionComponent } from "react";
import InputField from "../../components/app-input";
import AppScreen from "../../components/app-screen";
import AppText from "../../components/app-text";
import { CaretIcon, Logo } from "../../constants/all-svgs";
import { WelcomeScreenInputTypes } from "../../dtos";

const WelcomeScreen: FunctionComponent = () => {

    const inputs: Array<WelcomeScreenInputTypes> = [
        {
            label: 'Difficulty',
            typeOfIcon: 'difficulty',
            suffixIcon: <CaretIcon />,
            value: 'dfsdfsdf',
            editable: false,
            onPress: () => null
        },
        {
            label: 'Amount',
            typeOfIcon: 'star-rate',
            value: 'dfsdfsdf',
            onPress: () => null
        },
    ]

    return (
        <AppScreen>
            <AppText text={'Welcome to the'} align='center' size={26} color='white' />
            <Logo />
            {inputs?.map(({ label, onPress, suffixIcon, typeOfIcon, value, editable }, index) => <InputField
                key={index}
                label={label}
                typeOfIcon={typeOfIcon}
                suffixIcon={suffixIcon ? suffixIcon : null}
                value={value}
                editable={editable}
                onPress={onPress}
            />)}

        </AppScreen>
    );
};

export default WelcomeScreen;
