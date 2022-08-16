import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import All from './components/ALL/All';
import Html from './components/HTML/Html';
import Css from './components/CSS/Css';
import JavaScript from './components/JAVA SCRIPT/JavaScript';

function App() {
  return (
   <>
   <Header/>
   <Routes>
        <Route default path='/' element={<All/>}/>
        <Route path='/Html/:id' element={<Html/>}/>
        <Route path='/Css/:id' element={<Css/>}/>
        <Route path='/javascript/:id' element={<JavaScript/>}/>
    </Routes>
   </>
  );
}

export default App;
