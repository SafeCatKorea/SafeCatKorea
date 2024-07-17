import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "./views/Main";
import Navigation from "./component/main/Navigation";


function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path={'/'} element={<Main />} />
        {/* <Route path={url} element={<컴포넌트명 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;