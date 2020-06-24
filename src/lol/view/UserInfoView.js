import React, {Component, Fragment} from 'react';
import {observer} from 'mobx-react';
import autobind from "autobind-decorator";
import {Card, Image} from "semantic-ui-react";


@autobind
@observer
class UserInfoView extends Component {

  render() {

    const { leagueEntryDTOSet } = this.props;

    return (
      <Fragment>
        <Card>
          <Card.Content>
            <Card.Header>{leagueEntryDTOSet[0] ? leagueEntryDTOSet[0].summonerName : ''}</Card.Header>
            <Card.Meta>{leagueEntryDTOSet[0] ? leagueEntryDTOSet[0].tier + ' ' + leagueEntryDTOSet[0].rank : ''}</Card.Meta>
            <Card.Description>{leagueEntryDTOSet[0] ? '승 : ' + leagueEntryDTOSet[0].wins : ''}</Card.Description>
            <Card.Description>{leagueEntryDTOSet[0] ? '패 : ' + leagueEntryDTOSet[0].losses : ''}</Card.Description>
          </Card.Content>
        </Card>
      </Fragment>
    );
  }
}

export default UserInfoView;
