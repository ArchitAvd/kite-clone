import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '~/components/Header';
import OrderTabView from '~/components/order/OrderTabView';

export default function Order() {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
      edges={['right', 'left', 'top']}>
      <View className="flex-row">
        <Header />
      </View>
      <View className="flex-1">
        <OrderTabView />
      </View>
    </SafeAreaView>
  );
}
