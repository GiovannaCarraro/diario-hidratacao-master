import { StatusBar, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./src/components/Header";

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'auto'} />
        <View>
          <Header objetivo={2000} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}