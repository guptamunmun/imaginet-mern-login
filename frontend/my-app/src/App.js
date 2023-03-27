import { React } from "react";
import login from "./components/login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/login" element ={<login/>}/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
