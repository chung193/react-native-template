import * as React from 'react';
import { List, MD3Colors, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from '../../components/languageSwitch/LanguageSwitch';
import ColorModeSwitch from '../../components/colorModeSwitch/ColorModeSwitch';

const Setting = () => {
    const { t } = useTranslation();

    return (
        <>
            <LanguageSwitch />
            <ColorModeSwitch />
        </>
    );
};

export default Setting;