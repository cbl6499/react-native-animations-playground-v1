import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import LoadAssets from './src/components/LoadAssets';
import FormAndHeader from './src/Screens/FormAndHeader/FormAndHeader';
import { Routes } from './src/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const fonts = {
    'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
    'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const ScreenStack = createStackNavigator<Routes>();
const ScreenNavigator = () => {
    return (
        <ScreenStack.Navigator>
            <ScreenStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <ScreenStack.Screen name="FormAndHeader" component={FormAndHeader} options={{ headerShown: false }} />
        </ScreenStack.Navigator>
    );
};

export default function App() {
    return (
        <SafeAreaProvider>
            <LoadAssets {...{ fonts }}>
                <ScreenNavigator />
                <StatusBar />
            </LoadAssets>
        </SafeAreaProvider>
    );
}
