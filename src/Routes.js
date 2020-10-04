import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import {Routes as ItemList} from './item';
import {Routes as Lol} from './lol';
import Ninedoc from './ninedoc/Ninedoc';
import context from "./etc/context";
import {Button} from "semantic-ui-react";

import Initpage from "./initpage/Initpage";


const path = context.path();

const Profile = () => {
  console.log('profile');
  return (<div>You're on the Profile Tab</div>);
}
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;
// const InitPage = () => {
//   console.log('initpage');
//   return (<div>first Page</div>);}

class Routes extends Component {

  render() {

    return (
      <div>

        <BrowserRouter basename={path}>
          
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
              <li><a href="/lol">LOL 전적검색</a></li>
              <li><a href="/9doc">9doc</a></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/initpage" render={() => <Initpage />}/>

            <Route path="/lol" render={() => <Lol/>}/>
            <Route path="/9doc" render={() => <Ninedoc/>}/>
            <Route path="/items" render={() => <ItemList/>}/>
            <Route path='/profile' exact component={Profile} />
            <Route path="/comments" component={Comments} />
            <Route path="/contact" component={Contact} />

            <Redirect path="" to="/initpage" />
          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}


export default Routes;
