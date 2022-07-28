import './App.css';
import Box from './comp/box/box';
import Categorie from './comp/categorie/categorie';
import Nav from './comp/nav/nav';
import Soucategorie from './comp/souscategorie/soucategorie';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Top from './comp/souscategorie/top';
import Main from './comp/souscategorie/main';
import Bgimg from './comp/bgImage/bgimg.js';
import Mainbox from './mainbox';
import Footer from './comp/footer/footer';
function App() {
  return (
  <div className='App'>
    <Nav/>
    <Bgimg/>
 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Mainbox/>}/>
        <Route exact path="/soucategorie" element={<Main/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
   
    
  </div>
  );
}

export default App;
