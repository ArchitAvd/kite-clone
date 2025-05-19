import React from 'react';
import { Animated, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TabView, SceneMap, SceneRendererProps, NavigationState } from 'react-native-tab-view';

type Route = {
  key: string;
  title: string;
};

type State = NavigationState<Route>;

const FirstRoute = () => <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />;

const SecondRoute = () => <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />;

const ThirdRoute = () => <View style={[styles.scene, { backgroundColor: '#726e' }]} />;

export default class MyTabView extends React.Component<{}, State> {
  state: State = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' },
    ],
  };

  _handleIndexChange = (index: number) => this.setState({ index });

  _renderTabBar = (props: SceneRendererProps & { navigationState: State }) => {
    return (
      <View style={styles.tabContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollTabBar}>
          {props.navigationState.routes.map((route, i) => {
            const isFocused = props.navigationState.index === i;

            return (
              <TouchableOpacity
                key={route.key}
                style={styles.scrollTabItem}
                onPress={() => this.setState({ index: i })}>
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
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
          initialLayout={{ width: Dimensions.get('window').width }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
  },
  tabContainer: {
    height: 40,
  },
  scrollTabBar: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    height: 40,
  },
  scrollTabItem: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
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
