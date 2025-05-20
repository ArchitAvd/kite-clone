import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnalysisTabView from '~/components/analysis/AnalysisTabView';
import Header from '~/components/Header';

export default function Analysis() {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      className="flex-1 "
      style={{ backgroundColor: colors.background }}
      edges={['right', 'left', 'top']}>
      <View className="flex-row">
        <Header />
      </View>
      <View className="flex-1">
        <AnalysisTabView />
      </View>
    </SafeAreaView>
  );
}
