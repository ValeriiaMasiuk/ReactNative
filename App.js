import { NavigationContainer } from '@react-navigation/native';
import { useRoutePath } from './router';

export const App = () => {
  const routing = useRoutePath(true)
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}

