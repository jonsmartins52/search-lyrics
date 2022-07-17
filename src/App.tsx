import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Aside from "./components/Aside";
import Main from "./components/Main";
import SongContextProvider from "./context/SongContextProvider";

function App() {
  return (
    <SongContextProvider>
      <div className="container">
        <Aside />
        <Main />
      </div>
    </SongContextProvider>
  );
}

export default App;
