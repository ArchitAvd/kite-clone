import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import { MyDarkTheme, MyLightTheme } from '~/themes';

export default function App() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={colorScheme === 'dark' ? MyDarkTheme : MyLightTheme}>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
