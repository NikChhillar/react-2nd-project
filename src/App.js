import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Amvs from './components/Amvs';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <Router>
      {/* <Button py={'4'} m={'5'} colorScheme={'whatsapp'}> heyy</Button> */}

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/amvs' element={<Amvs />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
