import './App.css';
import AppRoutes from './routes';
import store from './store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
