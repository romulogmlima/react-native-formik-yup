import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import Routes from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}