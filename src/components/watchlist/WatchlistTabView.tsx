import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Animated, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TabView, SceneMap, SceneRendererProps } from 'react-native-tab-view';
import TabRouteView from './TabRouteView';

export default function WatchlistTabView() {
  const { colors } = useTheme();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Watchlist 1' },
    { key: 'second', title: 'Watchlist 2' },
    { key: 'third', title: 'Watchlist 3' },
    { key: 'fourth', title: 'Watchlist 4' },
    { key: 'fifth', title: 'Watchlist 5' },
    { key: 'sixth', title: 'Watchlist 6' },
    { key: 'seventh', title: 'Watchlist 7' },
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
    first: () => <TabRouteView initialData={['ABCD']} backgroundColor="#ff4081" title="First" />,
    second: () => <TabRouteView initialData={[]} backgroundColor="#673ab7" title="Second" />,
    third: () => <TabRouteView initialData={[]} backgroundColor="#009688" title="Third" />,
    fourth: () => <TabRouteView initialData={[]} backgroundColor="#3f51b5" title="Fourth" />,
    fifth: () => <TabRouteView initialData={[]} backgroundColor="#c2185b" title="Fifth" />,
    sixth: () => <TabRouteView initialData={[]} backgroundColor="#e91e63" title="Sixth" />,
    seventh: () => <TabRouteView initialData={[]} backgroundColor="#ff9800" title="Seventh" />,
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
