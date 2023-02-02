import React, { FC } from 'react';
import {
    FlatList,
    View
} from 'react-native';
import { PurpleBg, WhiteBg } from '../../constants/all-svgs';
import { FlatScreenProps } from '../../dtos';
import { hp } from '../../utilities/fontSizes';
import { colors } from '../../utilities/styling-assets';
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
                    {typeOfSvg == 'white-bg' ? <WhiteBg style={FlatScreenStyles.svg} /> : <PurpleBg style={FlatScreenStyles.svg} />}
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
