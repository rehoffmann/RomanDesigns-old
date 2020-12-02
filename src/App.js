import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from "./components/Header/Header.js";


  class App extends Component {
    render() {
      return (      
         <BrowserRouter>
          <div>
            <Header />
              <Switch>
               <Route path="/" component={Home} exact/>
             </Switch>
          </div> 
        </BrowserRouter>
      );
    }
  }

export default App;
