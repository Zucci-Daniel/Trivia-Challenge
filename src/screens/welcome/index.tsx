import React, { FunctionComponent } from "react";
import { View } from "react-native";
import AppScreen from "../../components/app-screen";
import { Logo } from "../../constants/all-svgs";

const WelcomeScreen: FunctionComponent = () => {
    return (
        <AppScreen>
            <Logo />
        </AppScreen>
    );
};

export default WelcomeScreen;
