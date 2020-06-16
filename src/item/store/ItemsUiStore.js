import autobind from 'autobind-decorator';
import {action, observable} from "mobx";

@autobind
class ItemsUiStore {

  @observable
  popOpen = false;

  @observable
  itemNo = null;

  @observable
  dataType;

  @action
  clear() {
    this.popOpen = false;
    this.itemNo = null;
    this.dataType = null;
  }

  @action
  setPopOpen(popOpen) {
    this.popOpen = popOpen;
  }

  @action
  setItemNo(itemNo) {
    this.itemNo = itemNo;
  }

  @action
  setDataType(dataType) {
    this.dataType = dataType;
  }

}

export default ItemsUiStore;
