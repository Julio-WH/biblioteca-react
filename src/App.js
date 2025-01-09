import Navbar from "./components/Navbar";
import {RouteNavigator} from "./routes/RouterNavigator";
import {UserContextProvider} from "./context/UserContext";

function App() {
  
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
        <div className="conteiner m-4">
            <RouteNavigator />
        </div>
        </UserContextProvider>
    </div>
  );
}
export default App;
