import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, RadioButton, Switch, useTheme } from 'react-native-paper';
import { View, Appearance } from 'react-native';
import { PreferencesContext } from '../../../PreferencesContext';

function ColorModeSwitch({ scene }): React.JSX.Element {
    const { t, i18n } = useTranslation();
    const colorScheme = Appearance.getColorScheme();
    const theme = useTheme();
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
    return (
        <>
            <Text>{t('components.colorModeSwitcher.title')}</Text>
            <Switch color={'red'} value={isThemeDark} onValueChange={toggleTheme} />
        </>
    );
}

export default ColorModeSwitch;
