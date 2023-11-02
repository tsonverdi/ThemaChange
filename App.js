import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home';
import MyContext from './store';

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <HomeScreen/>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
