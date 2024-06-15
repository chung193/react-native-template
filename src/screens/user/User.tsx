import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Setting from '../setting/Setting';
import AppInfo from '../appInfo/AppInfo';

const User = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="AppInfo">
            <Stack.Screen name="AppInfo" component={AppInfo} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>

    );
};

export default User;