import { useColorScheme } from 'nativewind';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Watchlist() {
  const scheme = useColorScheme();
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <View>
        <Text> Watchlist screen </Text>
      </View>
    </SafeAreaView>
  );
}
