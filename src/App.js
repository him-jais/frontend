import React from 'react';
import { BrowserRouter, Route,Switch} from 'react-router-dom'
import Contact from './components/contact';
import Home from './components/home'
function App() {
  return (
    <BrowserRouter>
    <div>
      
        <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/contact" component={Contact} />
        </Switch>
    </div> 
    </BrowserRouter>
  );
}

export default App;
