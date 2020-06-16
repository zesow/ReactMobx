import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import autobind from "autobind-decorator";
import ContentLayout from "../../etc/ContentLayout";
import SearchView from "../view/SearchView";
import MatchListView from "../view/MatchListView";

@autobind
@observer
class LolContainer extends Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render () {

    return (
      <ContentLayout>

        <SearchView />

        <MatchListView />

      </ContentLayout>
    );

  }
}

export default LolContainer;
