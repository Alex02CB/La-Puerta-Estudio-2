import {Routes,Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Home from '/src/components/Home.jsx';
import StudioExperience from '/src/components/StudioExperience.jsx';
import StudioBoutique from '/src/components/StudioBoutique.jsx';
import MasterClass from '/src/components/MasterClass.jsx';
import AboutUs from '/src/components/AboutUs.jsx';
import Contact from '/src/components/ContactUs.jsx';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Book from './components/Book';
import Email from './components/Email';
import Call from './components/Call';
import OpeningHours from './components/OpeningHours';
import Encuentranos from './components/Encuentranos';
import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LoadingScreen from './components/loading/LoadingScreen';


function App() {

  // LOADER

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  // END LOADER

  return (
    <>

      <div>
        <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/' element={<Footer/>}/>
        <Route path='/' element={<Nav/>}/>
        <Route path='/studioexperience' element={<StudioExperience/>}/>
        <Route path='/studioboutique' element={<StudioBoutique/>}/>
        <Route path='/masterclass' element={<MasterClass/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/email' element={<Email/>}/>
        <Route path='/call' element={<Call/>}/>
        <Route path='/openinghours' element={<OpeningHours/>}/>
        <Route path='/encuentranos' element={<Encuentranos/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
