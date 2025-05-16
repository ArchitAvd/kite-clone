import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Order() {
  const { colors } = useTheme();
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.background }}>
      <View>
        <Text style={{ color: colors.text, fontSize: 24 }}>Order Screen</Text>
      </View>
    </SafeAreaView>
  );
}
