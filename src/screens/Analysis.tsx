import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Analysis() {
  const scheme = useColorScheme();
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <View>
        <Text>Analysis Screen</Text>
      </View>
    </SafeAreaView>
  );
}
