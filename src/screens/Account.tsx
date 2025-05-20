import { useTheme } from '@react-navigation/native';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '~/components/Header';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Account() {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
      edges={['right', 'left', 'top']}>
      <View className="flex-row">
        <Header />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}>
        <View className="mt-5 flex-row justify-between px-4">
          <Text style={{ color: colors.text, fontSize: 24 }}>Name</Text>
          <FontAwesome5 name="bell" size={24} color={colors.text} />
        </View>

        <View className="mx-4 mt-4 rounded-lg p-4" style={{ backgroundColor: colors.card }}>
          <Text className="mb-2 uppercase" style={{ color: colors.text, fontSize: 18 }}>
            Username
          </Text>
          <Text className="text-gray-600">email id</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
