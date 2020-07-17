import React, {Component, Fragment} from 'react';
import { observer } from 'mobx-react';
import {Input, Search, Container, Responsive, Segment, Button} from 'semantic-ui-react';
import autobind from "autobind-decorator";
import {Link} from "react-router-dom";


@autobind
@observer
class SearchView extends Component {

  render() {

    const { searchParams, changeSearchParams, findInfo } = this.props;

    return (
      <Fragment>
        {/*<Responsive as={Segment}>*/}

          <Input
            size='massive'
            name='username'
            icon='search'
            iconPosition='left'
            placeholder='소환사명을 입력해 주세요...'
            // fluid
            value={searchParams.username}
            onChange={changeSearchParams}

          />
          <Button
            onClick={findInfo}
            size='massive'
            primary
          >검색</Button>
        {/*</Responsive>*/}
      </Fragment>
    );
  }
}

export default SearchView;
