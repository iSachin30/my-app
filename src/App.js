import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './components/Overview';
import VideoCard from './components/VideoCard';
import Detail from './components/Detail';
import Login from './components/Login';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="App">

      <h1>Blindside</h1>
      <hr/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/overview" element={<Overview />}>

          </Route>
          <Route exact path="/Detail" element={<Detail />}>

          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
