import React, {Component} from "react";
import {inject, observer} from 'mobx-react';
import autobind from "autobind-decorator";
import ContentLayout from "../../etc/ContentLayout";
import SearchView from "../view/SearchView";
import MatchListView from "../view/MatchListView";
import {Container, Segment,Tab} from "semantic-ui-react";
import styles from '../../App.css';

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>tab1</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

@inject('lolStore')
@autobind
@observer
class LolContainer extends Component {



  componentDidMount() {

    const {lolStore} = this.props;

    // lolStore.changeSearchParams(null,{name:username,value:})
  }

  componentWillUnmount() {
  }

  render() {

    const {lolStore} = this.props;

    return (
      <div>
        {/*<Tab panes={panes} />*/}
      {/*<ContentLayout >*/}


        <Segment basic textAlign='center' >
          <SearchView
            searchParams={lolStore.searchParams}
            changeSearchParams={lolStore.changeSearchParams}
            findList={lolStore.findList}
          />
        </Segment>



        <Container >
          <MatchListView
            matchList={lolStore.matchList}
          />
        </Container>

      {/*</ContentLayout>*/}
      </div>
    );

  }
}

export default LolContainer;
