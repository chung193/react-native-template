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
import { GluestackUIProvider, Text, SafeAreaView, KeyboardAvoidingView } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import LanguageSwitch from './src/components/languageSwitch/LanguageSwitch';
import NavigationContainer from './src/navigation/NavigationContainer';
function App(): React.JSX.Element {
  const { t, i18n } = useTranslation();
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView flex={1}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "height" : "height"}
          style={{ flex: 1, zIndex: 999 }}
        >
          <LanguageSwitch />
          <Text>{t('screens.intro.text.introText')}</Text>
          <NavigationContainer />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
export default App;
