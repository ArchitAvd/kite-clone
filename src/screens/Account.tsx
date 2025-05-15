import { useColorScheme } from 'nativewind';
import { View, Text } from 'react-native';

export default function Account() {
  const scheme = useColorScheme();
  return (
    <View>
      <Text> Account Screen</Text>
    </View>
  );
}
