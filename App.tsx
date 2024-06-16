/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Platform } from 'react-native';
import './src/localization/i18n';
import { useTranslation } from 'react-i18next';
import { PaperProvider, Text } from 'react-native-paper';
import LanguageSwitch from './src/components/languageSwitch/LanguageSwitch';
import MainNavigationContainer from './src/navigation/MainNavigationContainer';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { PreferencesContext } from './PreferencesContext';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

function App(): React.JSX.Element {
  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
    },
  };

  const { t, i18n } = useTranslation();
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <SafeAreaView flex={1}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : "height"}
            style={{ flex: 1, zIndex: 999 }}
          >
            <MainNavigationContainer theme={theme} />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
export default App;
