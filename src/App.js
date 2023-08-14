import { Provider } from "react-redux";

import { store } from "./store";
import { Form } from "./components/Form/Form";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
