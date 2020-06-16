import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch } from 'react-router-dom';

@withRouter
class RouteGroup extends Component {

  static propTypes = {
    path: PropTypes.string,
    switched: PropTypes.bool,
    children: PropTypes.node,
  };

  getAbsolutePath() {

    const { match, path } = this.props;

    if(path) {
      if(path.startsWith('/')) {
        return path;
      }
      else {
        if(!match) {
          console.warn('invalid match', path, this.props.children);
        }
        return `${match.path}/${path}`;
      }
    }
    else {
      return match.path;
    }
  }

  render() {
    const { path, switched, children } = this.props;
    let nextPath = this.getAbsolutePath();

    if(nextPath === '/') {
      nextPath = '';
    }

    const nextChildren = React.Children.map(children, (child) => {
      let childPath = nextPath;

      if(child.props.path) {
        childPath += `/${child.props.path}`;
      }

      return React.cloneElement(child, {...child.props, path: childPath});
    });

    if(switched) {
      return (
        <Route path={nextPath} render={() => (
          <Switch>
            {nextChildren}
          </Switch>
        )}
        />
      );
    }
    else if(path) {
      return (
        <Route path={nextPath} render={() => nextChildren} />
      );
    }
    else {
      return nextChildren;
    }
  }
}

export default  RouteGroup;
