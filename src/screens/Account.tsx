import { useColorScheme } from 'nativewind';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Account() {
  const scheme = useColorScheme();
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <View>
        <Text> Account Screen</Text>
      </View>
    </SafeAreaView>
  );
}
