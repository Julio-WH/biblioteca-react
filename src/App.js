import Navbar from "./components/Navbar";
import {RouteNavigator} from "./routes/RouterNavigator";
import React, {useState} from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
        <Navbar loggedIn={loggedIn}/>
        <div className="conteiner m-4">
            <RouteNavigator setLoggedIn={setLoggedIn} />
        </div>
    </div>
  );
}
export default App;
