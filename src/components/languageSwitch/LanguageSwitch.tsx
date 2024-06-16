import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, RadioButton } from 'react-native-paper';
import { View } from 'react-native';

function LanguageSwitch(): React.JSX.Element {
    const { t, i18n } = useTranslation();
    const [value, setValue] = React.useState(i18n.language);
    return (
        <>
            <Text>{t('components.languageSwitcher.title')}</Text>
            <RadioButton.Group onValueChange={
                newValue => {
                    setValue(newValue);
                    i18n.changeLanguage(newValue)
                }}
                value={value}>
                <View>
                    <Text>Việt Nam</Text>
                    <RadioButton value="vi" />
                </View>
                <View>
                    <Text>English</Text>
                    <RadioButton value="en" />
                </View>
            </RadioButton.Group>
        </>
    );
}

export default LanguageSwitch;
