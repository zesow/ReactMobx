import React, {Component, Fragment} from 'react';
import { observer } from 'mobx-react';

import autobind from "autobind-decorator";

@autobind
@observer
class SearchView extends Component {

  render() {
    return (
      <Fragment>
        this is lol view
      </Fragment>
    );
  }
}

export default SearchView;
