import { useColorScheme } from 'nativewind';
import { View, Text } from 'react-native';

export default function Order() {
  const scheme = useColorScheme();
  return (
    <View>
      <Text>Order Screen</Text>
    </View>
  );
}
