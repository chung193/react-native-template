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

function App(): React.JSX.Element {
  const { t, i18n } = useTranslation();
  return (
    <PaperProvider>
      <SafeAreaView flex={1}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "height" : "height"}
          style={{ flex: 1, zIndex: 999 }}
        >
          <MainNavigationContainer />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </PaperProvider>
  );
}
export default App;
