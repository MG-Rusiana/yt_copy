import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from './screens/home/home';
import { Library } from './screens/library/library';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="libary" element={<Library />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
