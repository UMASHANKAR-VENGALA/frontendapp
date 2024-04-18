import { BrowserRouter } from "react-router-dom";
import NavBar from './main/NavBar';

function App() {
  return (
    <div className="App">
      <div className="headnavbar">
      <p align="center">ZENE</p>
      </div>
        <BrowserRouter>
            <NavBar/>
        </BrowserRouter>

    </div>
  );
}

export default App;
