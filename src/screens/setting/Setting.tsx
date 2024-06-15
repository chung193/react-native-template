import * as React from 'react';
import { List, MD3Colors, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const Setting = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const { t } = useTranslation();

    return (
        <List.Section>
            <List.Item title={t('screens.setting.item1.text')} left={() => <List.Icon icon="home" />} />

        </List.Section>
    );
};

export default Setting;