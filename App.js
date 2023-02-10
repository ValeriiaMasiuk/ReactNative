import { NavigationContainer } from '@react-navigation/native';
import { useRoutePath } from './router';

const App = () => {
  const routing = useRoutePath(true)
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}

export default App

