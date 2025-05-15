import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { useColorScheme } from 'react-native';
import './global.css';

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}
