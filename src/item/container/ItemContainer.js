import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import {Popup} from "semantic-ui-react";
import ContentLayout from "../../etc/ContentLayout";
import ItemView from "../view/ItemView";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";

@inject('itemStore', 'itemUiStore')
@autobind
@observer
class ItemContainer extends Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  findItem(itemNo) {
    this.props.itemStore.findItem(itemNo);
  }

  handleConfirm() {
    alert('confirmed');
  }

  render() {

    const { itemStore, itemUiStore } = this.props;
    const { item } = itemStore;

    return (
      <ContentLayout>
        <ContentLayout.Header
          title={`Item ${item && item.itemNo ? ` > ${item.itemNo}` : ''}`}
        />

        <ItemView
          item = {item}
          folding={itemUiStore.folding}
        />

        <Button onClick={this.handleConfirm}>확인</Button>

      </ContentLayout>
    );
  }

}

export default ItemContainer;
