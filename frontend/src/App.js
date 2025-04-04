import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Apply from './components/Apply';
import Navbar from './components/Navbar'

function App() {
  const myWidth=150
  return (
    <div className="App">
      
      <Navbar  
        drawerWidth={myWidth}  
        content={
          <Routes>
            <Route path="" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/apply" element={<Apply/>}/> 
          </Routes>
        }
      
      />

      

    </div>
  );
}

export default App;
