import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Info from './Components/Info';
import User from './Components/User';

function App() {
  return (
<>
   <Menu/>
   <Routes>
   <Route exact path='/' element={<Home />} />
   <Route path='/about' element={<About />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/info' element={<Info />} />
   <Route path='/user' element={<User />} />
   </Routes>
   </>
  );
}

export default App;
