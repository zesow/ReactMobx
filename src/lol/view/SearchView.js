import React, {Component, Fragment} from 'react';
import { observer } from 'mobx-react';
import {Input, Search, Container, Responsive, Segment, Button} from 'semantic-ui-react';
import autobind from "autobind-decorator";

@autobind
@observer
class SearchView extends Component {

  render() {

    const { searchParams, changeSearchParams, findList } = this.props;

    return (
      <Fragment>
        {/*<Responsive as={Segment}>*/}
          <Search
            size='massive'
            icon='search'
            name='username'
            placeholder='소환사명을 입력해 주세요...'
            style={{textAlign :'center'}}
            value={searchParams.username}
            onSearchChange={changeSearchParams}
          />
          <Button onClick={findList}>검색</Button>
        {/*</Responsive>*/}
      </Fragment>
    );
  }
}

export default SearchView;
