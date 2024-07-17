import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "./views/Main";


function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Main />} />
        {/* <Route path={url} element={<컴포넌트명 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;