import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Overview from './Pages/Overview/Overview';
import Detail from './Components/Detail/Detail';
import RandomBeer from './Pages/RandomBeer/RandomBeer';


function App() {
  return (
    <BrowserRouter>
    <main>
    <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Overview" element={<Overview />}/>
            <Route path="/RandomBeer" element={<RandomBeer />}/>
            <Route path="/:id" element={<Detail />}/>
          </Routes>
          </div>
    </main>

    </BrowserRouter>



  );
}

export default App;
