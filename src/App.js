import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./main/NavBar";

function App() {
  return (
    <div className="App">
    <h3 align="center">Music Streaming</h3>
      <Router>
        <NavBar/>
      </Router>
    </div>
  );
}

export default App;
