import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
   <div>
     <Router>
       <Navbar />
      <Switch>
       <Route exact path='/' component={Home}   />
       <Route  path='/about' component={About}   />
       <Route path='/contact' component={Contact} />
       <Route path='/login' component={Login} />
       </Switch> 
     </Router>
   </div>
  );
}

export default App;
