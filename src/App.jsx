import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Faq from './components/Faq';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/faq' element={<Faq />}/>
        </Routes>
      </Router>
  );
}

export default App;
