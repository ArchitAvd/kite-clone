import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

export default function Header() {
  const { colors } = useTheme();
  return (
    <>
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
          <Text style={{ color: (colors as any).negative }}>88888.88 </Text>
          <Text className="ml-1 text-gray-500"> -888.88(-88.88%)</Text>
        </Text>
      </View>
      <View className="items-center justify-center" style={{ flexBasis: '10%' }}>
        <FontAwesome5 name="caret-square-down" size={30} color={colors.text} />
      </View>
    </>
  );
}
