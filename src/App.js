import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/NavBar/Navbar';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';
import Footer from './components/Footer/Footer';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/contact-us' component={ContactUs} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
