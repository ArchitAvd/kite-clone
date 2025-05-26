import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const SIPsRouteView: React.FC = () => {
  const { colors } = useTheme();
  const screenHeight = Dimensions.get('window').height;
  const svgHeight = screenHeight * 0.2;

  return (
    <View className="align-center flex-1 items-center justify-center " style={{ padding: 20 }}>
      <View className="items-center justify-center" style={{ height: svgHeight, marginBottom: 20 }}>
        <Svg width={svgHeight} height={svgHeight} viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2.5" fill="lightblue" />
        </Svg>
      </View>

      <Text className="text-center font-bold" style={{ color: colors.text }}>
        SIPs
      </Text>
    </View>
  );
};

export default SIPsRouteView;
