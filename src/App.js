import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './screens/home/home';
import { Library } from './screens/library/library';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="libary" element={<Library />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
