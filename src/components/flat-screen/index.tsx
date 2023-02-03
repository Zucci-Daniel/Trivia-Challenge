import React, { FC } from 'react';
import {
    FlatList,
    View
} from 'react-native';
import { PurpleBg2, WhiteBg } from '../../constants/all-svgs';
import { hp, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utilities/fontSizes';
import { colors } from '../../utilities/styling-assets';
import { FlatScreenProps } from '../interface';
import { FlatScreenStyles } from './styles';


const FlatScreen: FC<FlatScreenProps> = ({
    children,
    extraStyles,
    background = colors.mainColor,
    HeaderComponent,
    shouldAddPadding = true,
    showBackgroundSVG = true,
    typeOfSvg = 'white-bg',
    ...flatListProps
}) => {

    return (
        <>
            <View style={[FlatScreenStyles.container, { paddingHorizontal: shouldAddPadding ? hp(30) : 0, backgroundColor: typeOfSvg == 'white-bg' ? colors.white : colors.mainColor, }]}>
                {showBackgroundSVG && <View style={FlatScreenStyles.absolute}>
                    {typeOfSvg == 'white-bg' ? <WhiteBg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} style={FlatScreenStyles.svg} /> : <PurpleBg2 width={SCREEN_WIDTH} height={SCREEN_HEIGHT} style={FlatScreenStyles.svg} />}
                </View>}
                <View style={{ flex: 1 }}>
                    <FlatList
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={HeaderComponent ? HeaderComponent : null}
                        {...flatListProps}
                    />
                </View>
            </View>

        </>
    );
};

export default FlatScreen;
