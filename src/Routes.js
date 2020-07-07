import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {Routes as ItemList} from './item';
import {Routes as Lol} from './lol';
import context from "./etc/context";
import {Button} from "semantic-ui-react";


const path = context.path();

const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;
const InitPage = () => <div>first Page</div>;

class Routes extends Component {

  render() {

    return (
      <div>

        <BrowserRouter basename={path}>
          <Button as={Link} to="/profile">
            profile
          </Button>
          <Button as={Link} to="/comments">
            comments
          </Button>
          <Button as={Link} to="/contact">
            contact
          </Button>
          <Button as={Link} to="/lol">
            lol
          </Button>

          <Switch>
            <Route path="" component={InitPage}/>
            <Route path="/lol" render={() => <Lol/>}/>
            <Route path="/items" render={() => <ItemList/>}/>
            <Route path='/profile' exact component={Profile} />
            <Route path={`/comments`} component={Comments} />
            <Route path={`/contact`} component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// const Routes = () => (
//   <BrowserRouter basename={contextPath}>
//     <Switch>
//       <Route path="/lol" render={() => <Lol/>} />
//       <Route path="/items" render={() => <ItemList/>} />
//     </Switch>
//   </BrowserRouter>
// );

export default Routes;
