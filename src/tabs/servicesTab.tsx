import React, { useState } from 'react';
import { Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Financial, Personal, Insurance } from '../screen/services/employeeScreen';
import { ComplainScreen, CreateReportScreen, RequestsScreen, SuggestScreen } from '../screen/services/hrScreen';
import { InsurancesScreen, ReportsScreen } from '../screen/services/managerScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { proposal } from '../screen/services/employeeScreen/proposal';
import { insuranceScreen, InsuranceScreens, insuranceScreens } from '../screen/services/employeeScreen/insuranceScreens';

const TabTop = createMaterialTopTabNavigator();


type Screen = 'employee' | 'hr' | 'manager';

interface ScreenComponents {
    [key: string]: JSX.Element;
}

export const ServicesTab: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>('employee');

    const screens: Screen[] = ['employee', 'hr', 'manager'];
    const currentScreenIndex = screens.indexOf(currentScreen);
    const nextScreenIndex = (currentScreenIndex + 1) % screens.length;
    const nextScreen = screens[nextScreenIndex];


    const screenComponents: ScreenComponents = {
        employee: (
            <TabTop.Navigator>
                <TabTop.Screen name="financial" component={Financial} />
                <TabTop.Screen name="personal" component={Personal} />
                <TabTop.Screen name="insurance" component={InsuranceScreens} />
            </TabTop.Navigator>
        ),
        hr: (
            <TabTop.Navigator>
                <TabTop.Screen name="SuggestScreen" component={SuggestScreen} />
                <TabTop.Screen name="RequestsScreen" component={RequestsScreen} />
                <TabTop.Screen name="CreateReportScreen" component={CreateReportScreen} />
                <TabTop.Screen name="ComplainScreen" component={ComplainScreen} />
            </TabTop.Navigator>
        ),
        manager: (
            <TabTop.Navigator>
                <TabTop.Screen name="ReportsScreen" component={ReportsScreen} />
                <TabTop.Screen name="InsurancesScreen" component={InsurancesScreen} />
            </TabTop.Navigator>
        )
    };

    return (
        <>
            {screenComponents[currentScreen]}
            <Button
                title={`Switch to ${nextScreen}`}
                onPress={() => setCurrentScreen(nextScreen)}
            />
        </>
    );
}
