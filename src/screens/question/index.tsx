import { StackNavigationProp } from "@react-navigation/stack";
import React, { FunctionComponent, useState } from "react";
import { FlatList, Text, View } from "react-native";
import AppButton from "../../components/app-button";
import CloseButton from "../../components/app-close-button";
import ProgressBar from "../../components/app-progress-bar";
import AppScreen from "../../components/app-screen";
import AppText from "../../components/app-text";
import { QuestionScreenProps } from "../../dtos";
import { hp, SCREEN_WIDTH } from "../../utilities/fontSizes";
import { QuestionScreenStyles } from "./styles";



const dummy = [
    "What is your namesssssssssssssssssssssAAAAAsdfsdfsdfsfasdfadfa afdasf?",
    "csdcasdf afasdfasdfasdfasdfasdfasdf asfasdfasdfasdfasdfasdf",
];


const QuestionScreen: FunctionComponent<QuestionScreenProps> = ({ navigation }) => {
    const [currentQuestion, setCurrentQuestion] = useState(1);

    const _renderItem = (question: any, index: number) => {
        return <View style={{ height: 100, width: SCREEN_WIDTH, backgroundColor: 'black', marginHorizontal: 10, }}>
            <Text numberOfLines={2}>{question}</Text>
        </View>
    }


    const getCurrentIndex = (event: any) => {
        const index = Math.floor(
            event.nativeEvent.contentOffset.x /
            event.nativeEvent.layoutMeasurement.width,
        );
        setCurrentQuestion(index + 1);
    };

    return (
        <>
            <CloseButton onClose={() => navigation.goBack()} />
            <AppScreen disablePressable>
                <View style={QuestionScreenStyles.container}>
                    <AppText text={'Entertainment: Videogames'} align='center' size={30} color='white' style={{ marginBottom: hp(30) }} />
                    <AppText text={'level 1'} align='center' size={13} color='white' />
                </View>
                <ProgressBar />
                <View style={QuestionScreenStyles.container}>
                    <FlatList
                        horizontal
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item, index }) => _renderItem(item, index)}
                        data={dummy}
                        snapToAlignment="center"
                        decelerationRate={0.8}
                        onMomentumScrollEnd={event => getCurrentIndex(event)}
                    />
                </View>
                <View style={QuestionScreenStyles.buttonContainer}>
                    <AppButton typeOfButton="purple" text="True" onPress={() => null} extraStyles={{ marginBottom: hp(10) }} />
                    <AppButton typeOfButton="white" text="False" onPress={() => null} />
                </View>
            </AppScreen>
        </>
    );
};

export default QuestionScreen;
