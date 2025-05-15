import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Watchlist from '../screens/Watchlist';
import Order from '../screens/Order';
import Portfolio from '../screens/Portfolio';
import Analysis from '../screens/Analysis';
import Account from '../screens/Account';
import { useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const colors = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.colors.card },
        tabBarActiveTintColor: colors.colors.primary,
        tabBarInactiveTintColor: colors.colors.text,
      }}>
      <Tab.Screen name="Watchlist" component={Watchlist} />
      <Tab.Screen name="Orders" component={Order} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Analysis" component={Analysis} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
