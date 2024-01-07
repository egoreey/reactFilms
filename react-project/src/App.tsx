import {BrowserRouter} from "react-router-dom";
import {RouterApp} from "./Components/RouterApp.tsx";
import "./styles/style.css"
function App() {

  return (
      <BrowserRouter>
          <RouterApp/>
      </BrowserRouter>
  );
}

export default App
