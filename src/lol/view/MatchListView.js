import React, {Component, Fragment} from 'react';
import {observer} from 'mobx-react';

import autobind from "autobind-decorator";
import {Table,Responsive} from "semantic-ui-react";

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
              <Responsive as={Table.Cell} minWidth={Responsive.onlyMobile.minWidth}>시간</Responsive>
              <Responsive as={Table.Cell} minWidth={Responsive.onlyMobile.minWidth}>라인</Responsive>
              <Responsive as={Table.Cell} minWidth={Responsive.onlyMobile.minWidth}>선택캐릭터</Responsive>
              <Responsive as={Table.Cell} minWidth={Responsive.onlyMobile.minWidth}>승 / 패</Responsive>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              matchList && matchList.length > 0 ?
                matchList.map(match => {
                  return (
                    <Table.Row>
                      <Responsive as={Table.Cell} minWidth={Responsive.onlyMobile.minWidth}>{match.formattedTimestamp}</Responsive>
                      <Responsive as={Table.Cell} minWidth={Responsive.onlyMobile.minWidth}>{match.lane}</Responsive>
                      <Responsive as={Table.Cell} minWidth={Responsive.onlyMobile.minWidth}>{match.champion}</Responsive>
                      <Responsive as={Table.Cell} minWidth={Responsive.onlyMobile.minWidth}>{match.gameId}</Responsive>
                    </Table.Row>
                  )
                })
                :
                <Table.Row >데이터가 없습니다</Table.Row>
            }
          </Table.Body>
        </Table>
      </Fragment>
    );
  }
}

export default MatchListView;
