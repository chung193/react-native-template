/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './src/localization/i18n';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';


function App(): React.JSX.Element {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => i18n.changeLanguage("en")}>
        <Text>English</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => i18n.changeLanguage("fr")}>
        <Text>French</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => i18n.changeLanguage("vi")}>
        <Text>Vietnam</Text>
      </TouchableOpacity>
      <Text>{t("screens.intro.text.introText")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});

export default App;
