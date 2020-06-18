import React, {Component, Fragment} from 'react';
import {observer} from 'mobx-react';

import autobind from "autobind-decorator";
import {Table} from "semantic-ui-react";

@autobind
@observer
class MatchListView extends Component {

  render() {
    const {matchList} = this.props;
    return (
      <Fragment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>시간</Table.HeaderCell>
              <Table.HeaderCell>라인</Table.HeaderCell>
              <Table.HeaderCell>선택캐릭터</Table.HeaderCell>
              <Table.HeaderCell>승 / 패</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              matchList && matchList.length > 0 ?
                matchList.map(match => {
                  return (
                    <Table.Row>
                      <Table.Cell>{match.formattedTimestamp}</Table.Cell>
                      <Table.Cell>{match.lane}</Table.Cell>
                      <Table.Cell>{match.champion}</Table.Cell>
                      <Table.Cell>{match.gameId}</Table.Cell>
                    </Table.Row>
                  )
                })
                :
                <Table.Row>데이터가 없습니다</Table.Row>
            }
          </Table.Body>
        </Table>
      </Fragment>
    );
  }
}

export default MatchListView;
