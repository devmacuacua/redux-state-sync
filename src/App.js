import "./App.css";
import { decrement, increment } from "./store/countSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <div className="buttonContainer">
          <button onClick={() => dispatch(decrement())}>-</button>
          <h1>{count}</h1>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
