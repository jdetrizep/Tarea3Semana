import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../components/screens/HomeScreen';
import Home from '../components/screens/Home';

const BottomTabNav = () => {
    const { Navigator, Screen } = createBottomTabNavigator();
    return (
        <Navigator>
            <Screen name="Albums" component={HomeScreen} />
            <Screen name="Publicaciones" component={Home} />
        </Navigator>
    );
};

export default BottomTabNav;
