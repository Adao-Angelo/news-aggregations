import "./App.css";
import OfflineAlert from "./components/offlineAlert";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <OfflineAlert />
      <Home></Home>
    </>
  );
}

export default App;
