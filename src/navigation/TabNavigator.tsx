import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Watchlist from '../screens/Watchlist';
import Order from '../screens/Order';
import Portfolio from '../screens/Portfolio';
import Analysis from '../screens/Analysis';
import Account from '../screens/Account';
import { useTheme } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.background },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
      }}>
      <Tab.Screen
        name="Watchlist"
        component={Watchlist}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Order}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book" size={size} color={color} solid={false} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="suitcase" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={Analysis}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="chart-bar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
