import { StyleSheet, Text, View, TextInput } from 'react-native';
import { RegistrationScreen } from './screens/RegistartionScreen';
// import { LoginScreen } from './screens/LoginScreen';

export const App = () => {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen/> */}
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
