import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Animated, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TabView, SceneMap, SceneRendererProps } from 'react-native-tab-view';
import HoldingsRouteView from './HoldingsRouteView';
import PositionsRouteView from './PositionsRouteView';

export default function PortfolioTabView() {
  const { colors } = useTheme();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'holdings', title: 'Holdings' },
    { key: 'positions', title: 'Positions' },
  ]);

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: { index: number; routes: any[] } }
  ) => (
    <View style={{ height: 40 }}>
      <ScrollView
        className="flex-row"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: colors.background,
          paddingHorizontal: 10,
          height: 40,
        }}>
        {props.navigationState.routes.map((route, i) => {
          const isFocused = index === i;
          return (
            <TouchableOpacity
              className="items-center"
              key={route.key}
              style={{ paddingVertical: 10, paddingHorizontal: 16 }}
              onPress={() => setIndex(i)}>
              <Animated.Text style={[styles.tabText, isFocused && styles.tabTextActive]}>
                {route.title}
              </Animated.Text>
              {isFocused && <View style={styles.underline} />}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  const renderScene = SceneMap({
    holdings: () => <HoldingsRouteView />,
    positions: () => <PositionsRouteView />,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{ width: Dimensions.get('window').width }}
    />
  );
}

const styles = StyleSheet.create({
  tabText: {
    color: 'gray',
    fontWeight: 'normal',
    fontSize: 14,
  },
  tabTextActive: {
    color: '#3399ff',
    fontWeight: 'bold',
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: '80%',
    backgroundColor: '#3399ff',
    borderRadius: 1,
  },
});
