import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Portfolio() {
  const { colors } = useTheme();
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.background }}>
      <View>
        <Text style={{ color: colors.text, fontSize: 24 }}> Portfolio Screen</Text>
      </View>
    </SafeAreaView>
  );
}
