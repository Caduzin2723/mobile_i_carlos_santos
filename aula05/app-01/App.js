import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ᓵ𝙹ᒲ¦ 𝙹 ᓵ⚍ ⟍̅ᒷ ᑑ⚍ᒷᒲ ℸ ̣∷ᔑ⟍̅⚍⨅¦⚍</Text>
      <Text >Calculadora</Text>
      <StatusBar style="auto" />
    </View>
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
