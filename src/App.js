import React from 'react';
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import { Navbar, Footer } from './Components'




function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar/>
      <Switch>
        <Route path = "/" exact component = {Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
