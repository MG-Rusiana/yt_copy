import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from './screens/home/home';
import { Library } from './screens/library/library';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/yt_copy"/>} />
        <Route path="/yt_copy" element={<Home/>} />
        <Route path="libary" element={<Library />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
