import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import MyTabView from '~/components/TabView';

export default function Watchlist() {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
      edges={['right', 'left', 'top']}>
      <View className="flex-row">
        <View className="items-center " style={{ flexBasis: '45%' }}>
          <Text style={{ color: colors.text, fontWeight: 'bold' }}>NIFTY 50</Text>
          <Text>
            <Text style={{ color: (colors as any).positive }}>88888.88 </Text>
            <Text className="ml-1 text-gray-500"> -888.88(-88.88%)</Text>
          </Text>
        </View>
        <View className="items-center " style={{ flexBasis: '45%' }}>
          <Text style={{ color: colors.text, fontWeight: 'bold' }}>NIFTY BANK</Text>
          <Text>
            <Text style={{color: (colors as any).negative}}>88888.88 </Text>
            <Text className="ml-1 text-gray-500"> -888.88(-88.88%)</Text>
          </Text>
        </View>
        <View className="items-center justify-center" style={{ flexBasis: '10%' }}>
          <FontAwesome5 name="caret-square-down" size={30} color={colors.text} />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <MyTabView />
      </View>
    </SafeAreaView>
  );
}
