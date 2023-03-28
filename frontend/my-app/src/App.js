import { React } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/login" element ={<Login/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
