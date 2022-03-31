import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';



const drawerStack = createDrawerNavigator();

const Drawer = () => {
    return (
        <NavigationContainer>
            <drawerStack.Navigator >
                <drawerStack.Screen name="Home" component={Home} />
            </drawerStack.Navigator>
        </NavigationContainer>
    )
}

export default Drawer;