import { Text, View } from "react-native";

export function WaterProgress({ consumido = 666, objetivo = 2000 }) {
  const porcentagem = Math.min(Math.round((consumido / objetivo) * 100), 100);

  return (
    <View>
      <Text>Você bebeu {consumido}ml de água hoje.</Text>
      <Text>Você atingiu {porcentagem}% da Meta.</Text>
      
      {/* Barra de progresso customizada com Flexbox */}
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}


// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: COLORS.cardBg,
//     borderRadius: 16,
//     padding: 20,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 24,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   consumedText: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: COLORS.primary,
//   },
//   percentageText: {
//     fontSize: 14,
//     color: COLORS.textMuted,
//     marginBottom: 16,
//   },
//   progressBarBackground: {
//     width: '100%',
//     height: 12,
//     backgroundColor: '#E0F2FE',
//     borderRadius: 6,
//     overflow: 'hidden',
//   },
//   progressBarFill: {
//     height: '100%',
//     backgroundColor: COLORS.secondary,
//     borderRadius: 6,
//   },
// });