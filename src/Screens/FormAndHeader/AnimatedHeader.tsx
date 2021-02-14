import React from 'react';
import { StyleSheet, ViewStyle, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { Extrapolate, interpolate, Value } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const BREAKPOINT = 60;
const HEADER_HEIGHT_BIG = 112;
const HEADER_HEIGHT_SMALL = 68;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: '#DEEFE8',
        alignItems: 'center',
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        left: 18,
        right: 0,
        height: HEADER_HEIGHT_SMALL,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        marginLeft: 4,
        fontSize: 16,
        lineHeight: 22,
    },
    title: {
        fontWeight: '700',
        position: 'absolute',
    },
});

interface AnimatedHeaderProps {
    scrollPosition: Value<number>;
    title: string;
}

const AnimatedHeader = (props: AnimatedHeaderProps) => {
    const { scrollPosition, title } = props;
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    const headerHeight = interpolate(scrollPosition, {
        inputRange: [0, BREAKPOINT],
        outputRange: [HEADER_HEIGHT_BIG, HEADER_HEIGHT_SMALL],
        extrapolate: Extrapolate.CLAMP,
    });

    const titleSize = interpolate(scrollPosition, {
        inputRange: [0, BREAKPOINT],
        outputRange: [28, 16],
        extrapolate: Extrapolate.CLAMP,
    });

    const titleLineHeight = interpolate(scrollPosition, {
        inputRange: [0, BREAKPOINT],
        outputRange: [36, 24],
        extrapolate: Extrapolate.CLAMP,
    });

    const titlePadding = interpolate(scrollPosition, {
        inputRange: [0, BREAKPOINT],
        outputRange: [68, 22],
        extrapolate: Extrapolate.CLAMP,
    });

    const style = StyleSheet.compose<ViewStyle>(styles.container, [{ top: insets.top }]);

    return (
        <Animated.View style={[style, { height: headerHeight }]}>
            <Pressable
                style={styles.iconContainer}
                onPressOut={() => {
                    navigation.goBack();
                }}
            >
                <AntDesign name="left" size={20} color="black" />
                <Text style={styles.backText}>Zurück</Text>
            </Pressable>
            <Animated.Text style={[styles.title, { fontSize: titleSize, lineHeight: titleLineHeight, paddingTop: titlePadding }]}>{title}</Animated.Text>
        </Animated.View>
    );
};

export default AnimatedHeader;
