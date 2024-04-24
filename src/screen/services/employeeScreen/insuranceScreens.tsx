import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Compliant, HealthCondition, Insurance, InsuranceData, Proposal } from '.';
import { InsuranceRequest } from './insuranceRequest';
const Stack = createNativeStackNavigator();

export const InsuranceScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Insurance}
                name='Insurance'
            />
            <Stack.Screen
                component={Proposal}
                name='Proposal'
            />
            <Stack.Screen
                component={Compliant}
                name='Compliant'
            />
            <Stack.Screen
                component={InsuranceRequest}
                name='InsuranceRequest'
            />
            <Stack.Screen
                component={HealthCondition}
                name='HealthCondition'
            />
            <Stack.Screen
                component={InsuranceData}
                name='InsuranceData'
            />
        </Stack.Navigator>
    );
};