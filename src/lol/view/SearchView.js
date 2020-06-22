import React, {Component, Fragment} from 'react';
import { observer } from 'mobx-react';
import {Input, Search, Container, Responsive, Segment, Button} from 'semantic-ui-react';
import autobind from "autobind-decorator";
import {Link} from "react-router-dom";


@autobind
@observer
class SearchView extends Component {

  render() {

    const { searchParams, changeSearchParams, findList } = this.props;

    return (
      <Fragment>
        {/*<Responsive as={Segment}>*/}
          <Input
            size='massive'
            name='username'
            icon='search'
            iconPosition='left'
            placeholder='소환사명을 입력해 주세요...'
            style={{width :'800px'}}
            value={searchParams.username}
            onChange={changeSearchParams}

          />
          <Button
            onClick={findList}
            size='massive'
            primary
          >검색</Button>
        {/*</Responsive>*/}
      </Fragment>
    );
  }
}

export default SearchView;
