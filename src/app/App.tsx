import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persisterStore, store } from 'services/redux/store';
import { injectStore } from 'services/api-service';

import { AppRouter } from './app.router';
import { AppTheme } from '../styles/theme';

const App = () => {
  injectStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisterStore}>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </PersistGate>
    </Provider>
  );
};
export default App;
