import React, { useMemo } from 'react';
import { Animated, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TabView, SceneRendererProps } from 'react-native-tab-view';
import { useTheme } from '@react-navigation/native';
import WatchlistView from './WatchlistView';
import { useWatchlists } from '~/hooks/useWatchlists';
import { FontAwesome5 } from '@expo/vector-icons';

export default function WatchlistTabView() {
  const { colors } = useTheme();
  const { watchlists, activeTab, switchTab, createTab, deleteTab } = useWatchlists();

  const tabNames = useMemo(() => Object.keys(watchlists), [watchlists]);

  const routes = tabNames.map((tab) => ({
    key: tab,
    title: tab,
  }));

  const currentIndex = tabNames.findIndex((name) => name === activeTab);

  const handleIndexChange = (newIndex: number) => {
    switchTab(tabNames[newIndex]);
  };

  const renderScene = ({ route }: { route: { key: string } }) => (
    <WatchlistView tabName={route.key} />
  );

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
          const isFocused = i === currentIndex;
          return (
            <TouchableOpacity
              key={route.key}
              style={{ paddingVertical: 10, paddingHorizontal: 16 }}
              onPress={() => switchTab(route.key)}
              onLongPress={() => {
                if (tabNames.length > 1) deleteTab(route.key);
              }}>
              <Animated.Text
                style={[
                  styles.tabText,
                  isFocused && styles.tabTextActive && { color: colors.primary },
                ]}>
                {route.title}
              </Animated.Text>
              {isFocused && <View style={styles.underline} />}
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={() => {
            const newTab = `Watchlist ${tabNames.length + 1}`;
            createTab(newTab);
          }}
          className="justify-center px-4">
          <FontAwesome5 name="plus" size={16} color={colors.text} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  return (
    <TabView
      navigationState={{ index: currentIndex, routes }}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      renderTabBar={renderTabBar}
      initialLayout={{ width: Dimensions.get('window').width }}
      lazy
    />
  );
}

const styles = StyleSheet.create({
  tabText: {
    color: 'gray',
    fontWeight: 'normal',
    fontSize: 16,
  },
  tabTextActive: {
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
