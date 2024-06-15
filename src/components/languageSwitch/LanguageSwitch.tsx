import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';

function LanguageSwitch(): React.JSX.Element {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Button fontWeight="$medium" fontSize="$sm" color="$textLight900" onPress={() => i18n.changeLanguage('en')}>
                English
            </Button>
            <Button fontWeight="$medium" fontSize="$sm" color="$textLight900" onPress={() => i18n.changeLanguage('fr')}>
                French
            </Button>
            <Button fontWeight="$medium" fontSize="$sm" color="$textLight900" onPress={() => i18n.changeLanguage('vi')}>
                Vietnam
            </Button>
        </>
    );
}

export default LanguageSwitch;
