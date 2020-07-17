import React, {Component} from "react";
import {inject, observer} from 'mobx-react';
import autobind from "autobind-decorator";
import SearchView from "../view/SearchView";
import MatchListView from "../view/MatchListView";
import {Container, Grid, Header, Segment} from "semantic-ui-react";
import UserInfoView from "../view/UserInfoView";


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

  findInfo = () => {
    const {lolStore} = this.props;

    lolStore.findList();
    lolStore.findUserInfo();
  };

  render() {

    const {lolStore} = this.props;

    return (
      <div style={{ padding: '5em 0em' }}>

        <Header as='h1' content='Gus.GG' textAlign='center' />

          <Segment basic textAlign='center' >
            <SearchView
              searchParams={lolStore.searchParams}
              changeSearchParams={lolStore.changeSearchParams}
              findInfo={this.findInfo}
            />
          </Segment>


        <Grid columns={2} stackable centered container>

          {/*<Segment basic textAlign='center'>*/}
          <Grid.Column>
            <UserInfoView
              leagueEntryDTOSet={lolStore.leagueEntryDTOSet}
            />
          </Grid.Column>
          {/*</Segment>*/}

          <Grid.Column>
            <MatchListView
              matchList={lolStore.matchList}
            />
          </Grid.Column>

          {/*<Grid.Column>*/}
          {/*  <MatchListView*/}
          {/*    matchList={lolStore.matchList}*/}
          {/*  />*/}
          {/*</Grid.Column>*/}

        </Grid>

      </div>
    );

  }
}

export default LolContainer;
