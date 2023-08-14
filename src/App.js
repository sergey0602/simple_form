import { Provider } from "react-redux";

import { store } from "./store";
import { Form } from "./components/Form/Form";
import { Table } from "./components/Table/Table";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
