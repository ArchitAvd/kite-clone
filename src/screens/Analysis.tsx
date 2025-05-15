import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

export default function Analysis() {
  const scheme = useColorScheme();
  return (
    <View>
      <Text>Analysis Screen</Text>
    </View>
  );
}
