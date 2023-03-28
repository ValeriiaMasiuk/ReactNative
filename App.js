import { Provider} from 'react-redux';
import { store } from './redux/store';
import { Main } from './components/Main';

import './firebase/config';

const App = () => {
  return (
    <Provider store={store}>
      <Main/>
      </Provider>
  );
}

export default App;


