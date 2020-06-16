import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import autobind from 'autobind-decorator';
import { Header, Divider } from "semantic-ui-react";

@autobind
@observer
class SnapChartView extends Component {

  static propTypes = {
    type : PropTypes.object,
    list : PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    return (
      <Fragment>

      </Fragment>
    );
  }

}

export default SnapChartView;
