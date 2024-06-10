import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonText, Box } from "@gluestack-ui/themed";

function LanguageSwitch(): React.JSX.Element {
    const { t, i18n } = useTranslation();
    return (
        <Box >
            <ButtonText fontWeight="$medium" fontSize="$sm" color="$textLight900" onPress={() => i18n.changeLanguage('en')}>
                English
            </ButtonText >
            <ButtonText fontWeight="$medium" fontSize="$sm" color="$textLight900" onPress={() => i18n.changeLanguage('fr')}>
                French
            </ButtonText >
            <ButtonText fontWeight="$medium" fontSize="$sm" color="$textLight900" onPress={() => i18n.changeLanguage('vi')}>
                Vietnam
            </ButtonText >
        </Box>
    );
}

export default LanguageSwitch;
