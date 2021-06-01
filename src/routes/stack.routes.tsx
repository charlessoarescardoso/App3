import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/Welcome';
import { CitySelect } from '../screens/CitySelect';
import { Provider } from '../screens/Provider';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
    >
        <stackRoutes.Screen 
            name="Welcome"
            component={Welcome}
        />
        <stackRoutes.Screen 
            name="City"
            component={CitySelect}
        />
        <stackRoutes.Screen 
            name="Provider"
            component={Provider}
        />
    
        
    </stackRoutes.Navigator>
)

export default AppRoutes;