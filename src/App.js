import { Provider } from 'react-redux';
import store from './store';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Skills />
      </Provider>
    </div>
  )
}

export default App;
