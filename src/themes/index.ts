import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const MyLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    background: '#ffffff',
    card: '#f5f5f5',
    positive: '#008000',
    negative: '#fa0905',
    text: '#333333',
    border: '#cccccc',
    notification: '#ff5252',
  },
};

export const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#0246f2',
    background: '#121212',
    card: '#1e1e1e',
    positive: '#32fa05',
    negative: '#fa0905',
    text: '#ffffff',
    border: '#272727',
    notification: '#ff5252',
  },
};
