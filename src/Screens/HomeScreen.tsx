import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '../components/StyleGuide';
import { Routes } from '../Routes';

export const examples = [
    {
        screen: 'FormAndHeader',
        title: '🐎 FormAndHeader',
    },
] as const;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: StyleGuide.palette.background,
    },
    content: {
        paddingBottom: 32,
    },
    thumbnail: {
        backgroundColor: 'white',
        padding: StyleGuide.spacing * 2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: StyleGuide.palette.background,
    },
    title: {
        ...StyleGuide.typography.headline,
    },
});

const HomeScreen = () => {
    const { navigate } = useNavigation<StackNavigationProp<Routes, 'HomeScreen'>>();

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {examples.map((thumbnail) => (
                <RectButton key={thumbnail.screen} onPress={() => navigate(thumbnail.screen)}>
                    <View style={styles.thumbnail}>
                        <Text style={styles.title}>{thumbnail.title}</Text>
                    </View>
                </RectButton>
            ))}
        </ScrollView>
    );
};

export default HomeScreen;
