import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTab, NotificationsTab, ProfileTab, ServicesTab, SettingsTab } from './src/tabs';
import { Insurance } from './src/screen/services/employeeScreen';

type RootTabParamList = {
  Home: undefined;
  Notifications: undefined;
  services: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Notifications" component={NotificationsTab} />
        <Tab.Screen name="services" component={ServicesTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
        <Tab.Screen name="Settings" component={SettingsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

