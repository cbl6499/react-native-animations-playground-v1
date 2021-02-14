import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AnimatedHeader from './AnimatedHeader';
import Animated, { Value } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#DEEFE8',
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingTop: 112,
        paddingBottom: 20,
    },
    inputContainer: {
        marginHorizontal: 50,
        marginVertical: 24,
    },
    textContainer: {
        height: 76,
        paddingTop: 8,
        paddingBottom: 24,
        alignItems: 'center',
        backgroundColor: '#DEEFE8',
        paddingHorizontal: 32,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 22,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
});

// If needed more often make a constant or atom out of it.
const AnimatedKeyboardAwareScrollView = Animated.createAnimatedComponent(KeyboardAwareScrollView);

const FormAndHeader = () => {
    const [value, onChangeText] = React.useState('Useless Placeholder');

    // Creates ui thread variable.
    let scrollY = new Value(0);

    return (
        <SafeAreaView style={styles.container}>
            <AnimatedHeader scrollPosition={scrollY} title={'Registrierung'} />
            <AnimatedKeyboardAwareScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                bounces={false}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Erstellen Sie ein Konto und nutzen Sie die vielen Vorteile der App.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} onChangeText={(text: string): void => onChangeText(text)} value={value} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} onChangeText={(text: string): void => onChangeText(text)} value={value} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} onChangeText={(text: string): void => onChangeText(text)} value={value} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} onChangeText={(text: string): void => onChangeText(text)} value={value} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} onChangeText={(text: string): void => onChangeText(text)} value={value} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} onChangeText={(text: string): void => onChangeText(text)} value={value} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} onChangeText={(text: string): void => onChangeText(text)} value={value} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} onChangeText={(text: string): void => onChangeText(text)} value={value} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} onChangeText={(text: string): void => onChangeText(text)} value={value} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} onChangeText={(text: string): void => onChangeText(text)} value={value} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} onChangeText={(text: string): void => onChangeText(text)} value={value} />
                </View>
            </AnimatedKeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default FormAndHeader;
