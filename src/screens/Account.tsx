import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '~/components/Header';

export default function Account() {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
      edges={['right', 'left', 'top']}>
      <View className="flex-row">
        <Header />
      </View>
    </SafeAreaView>
  );
}
