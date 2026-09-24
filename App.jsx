import { StatusBar, View} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./src/components/Header";
import { WaterProgress } from "./src/components/WaterProgress";

export default function App(){
  const GOAL = 2000

  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'auto'} />
        <View >
          <Header goal={GOAL} />
          <WaterProgress consumed={200} goal={GOAL} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}



































// import { useState } from 'react';
// import { StyleSheet, View, StatusBar, Text } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { COLORS } from './src/constants/colors';
// import { Header } from './src/components/Header';
// import { WaterProgress } from './src/components/WaterProgress';
// import { ActionButtons } from './src/components/ActionButtons';

// export default function App() {
//   const GOAL = 2000; // Meta diária em ml
//   // const [consumed, setCosumed] = useState(0);

//   // // funcao para acumular a quantidade ingerida
//   // const handleAddWater = (amount) => {


//   // };

//   // //funcao para zerar o contador
//   // const handleReset = () => {

//   // };

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView>
//         <StatusBar barStyle={'auto'} />
//         <View >
//           <Header GOAL = {GOAL}/>
//           <WaterProgress consumed={1000} goal={GOAL}/>
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   )


// };


