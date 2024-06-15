import * as React from 'react';
import { List, MD3Colors, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const AppInfo = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const { t } = useTranslation();
    const navigation = useNavigation();

    return (
        <List.Section>
            <List.Item title={t('screens.setting.item1.text')} left={() => <List.Icon icon="home" />} />
            <List.Item title={t('screens.setting.item2.text')} left={() => <List.Icon icon="check" />} />
            <List.Item title={t('screens.setting.item3.text')} left={() => <List.Icon icon="book-open-blank-variant" />} />
            <List.Item title={t('screens.setting.item4.text')} left={() => <List.Icon icon="email" />} description={() => <Text>{t('screens.setting.item4.subtext1')}</Text>} />
            <List.Item title={t('screens.setting.item5.text')} left={() => <List.Icon icon="phone" />} description={() => <><Text>{t('screens.setting.item5.subtext1')}</Text><Text>{t('screens.setting.item5.subtext2')}</Text></>} />
            <List.Item title={t('screens.setting.item6.text')} left={() => <List.Icon icon="information" />} />
            <List.Item title={t('screens.setting.item7.text')} left={() => <List.Icon icon="cog" />} onPress={() => { navigation.navigate("Setting") }} />
            {/* footer */}
            <Text>{t('screens.setting.footer.text')}</Text>
        </List.Section>
    );
};

export default AppInfo;