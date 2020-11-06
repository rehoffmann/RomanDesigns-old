import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';

class App extends Component {
  render() {
    return (
    
      
      //layout should have 
        <Layout>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
        
        
        </Layout>
      
 
    );
  }
}

export default App;
