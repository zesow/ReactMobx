import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import autobind from 'autobind-decorator';
import { Header, Divider } from "semantic-ui-react";
// import Link from "react-router-dom/modules/Link";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

@autobind
@observer
class ItemListView extends Component {

  static propTypes = {
    items : PropTypes.arrayOf(PropTypes.object),
    onClickItemWindow : PropTypes.func,
  };

  render() {

    const { items, onClickItemWindow } = this.props;

    return (
      <div className="table-row">
        <table className="ui table center">
          <thead>
            <tr>
              <th>재료번호</th>
              <th>이름</th>
              <th>가격</th>
              {/*<th>스테이지</th>*/}
              {/*<th>가공일시</th>*/}
              {/*<th>상세보기</th>*/}
            </tr>
          </thead>
          <tbody>
          {
            Array.isArray(items) && items.length > 0 ?
              items.map((item) =>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  {/*<td>{item.itemNo}</td>*/}
                  {/*<td>{item.parentNo}</td>*/}
                  {/*<td>{item.shapeType}</td>*/}
                  {/*<td>{item.stage}</td>*/}
                  {/*<td>{item.curDateTime}</td>*/}
                  {/*<td>*/}
                  {/*  /!*<Link to={`/item/${item.itemNo}`}><Icon name="angle right" /></Link>*!/*/}
                  {/*  <a onClick={(e) => onClickItemWindow(e, {itemNo : item.itemNo})}><Icon name="clone outline"></Icon></a>*/}
                  {/*</td>*/}
                </tr>
              )
              :
              <tr>
                <td colSpan="6">데이터가 없습니다</td>
              </tr>
          }
          </tbody>
        </table>
      </div>
    );
  }

}

export default ItemListView;
