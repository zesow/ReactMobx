import React, {Component} from "react";
import {inject, observer} from 'mobx-react';
import autobind from "autobind-decorator";
import ContentLayout from "../../etc/ContentLayout";
import SearchView from "../view/SearchView";
import MatchListView from "../view/MatchListView";
import {Container} from "semantic-ui-react";

@inject('lolStore')
@autobind
@observer
class LolContainer extends Component {

  componentDidMount() {

    const { lolStore } = this.props;

    // lolStore.changeSearchParams(null,{name:username,value:})
  }

  componentWillUnmount() {
  }

  render() {

    const { lolStore } = this.props;

    return (
      <ContentLayout>


          <SearchView
            searchParams = {lolStore.searchParams}
            changeSearchParams = {lolStore.changeSearchParams}
            findList = {lolStore.findList}
          />


        <MatchListView
          matchList = {lolStore.matchList}
        />

      </ContentLayout>
    );

  }
}

export default LolContainer;
