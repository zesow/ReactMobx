import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import ContentLayout from "../../etc/ContentLayout";
import ItemListView from "../view/ItemListView";
import {Button} from "semantic-ui-react";

@inject('itemStore', 'itemUiStore')
@autobind
@observer
class ItemListContainer extends Component {

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  async findAllItems() {
    console.log('find');
    await this.props.itemStore.findAllItems();
    console.log('items : ', this.props.itemStore.items)
  }

  handleClickItemWindow(e, {itemNo}) {

    const { itemUiStore } = this.props;

    itemUiStore.setItemNo(itemNo);
    itemUiStore.setPopOpen(true);
  }


  render() {


    const { itemStore, itemUiStore } = this.props;

    return (
      <ContentLayout>
        {/*<ContentLayout.Header title="Item List" />*/}

        <Button onClick={this.findAllItems}>전체검색</Button>

        <ItemListView
          items = {itemStore.items}
          onClickItemWindow={this.handleClickItemWindow}
        />

      </ContentLayout>
    );
  }


}

export default ItemListContainer;
