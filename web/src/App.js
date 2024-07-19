import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import "./App.css";
import Main from "./views/main/Main";
import Navigation from "./component/main/Navigation";
import Report from "./views/report/Report";


function App() {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/reportCat'} element={<Report/>}/>
                {/* <Route path={url} element={<컴포넌트명 />} /> */}
            </Routes>
        </Router>
    );
}

export default App;