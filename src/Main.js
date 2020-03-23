import React, { Component } from "react";
 
import {
    Route,
    NavLink,
    HashRouter
  } from 'react-router-dom';
  import StrongmanAsASport from './StrongmanAsASport';
  import StrongmanInPoland from './StrongmanInPoland';
  import ExampleEvent from './ExampleEvent';
  
  class Main extends Component {
  
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
            <li><NavLink exact to="/">Strongman As A Sport</NavLink></li>
            <li><NavLink to="/strongmanInPoland">Strongman In Poland</NavLink></li>
            <li><NavLink to="/exampleEvent">Example Event</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/" component={StrongmanAsASport}/>
              <Route path="/strongmanInPoland" component={StrongmanInPoland}/>
              <Route path="/exampleEvent" component={ExampleEvent}/>
            </div>
          </div>
          </HashRouter>
        )
    }
  }
  export default Main;