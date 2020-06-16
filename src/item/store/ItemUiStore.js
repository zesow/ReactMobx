import autobind from 'autobind-decorator';
import {action, observable} from "mobx";

@autobind
class ItemUiStore {

  @observable
  folding = false;

  @action
  clear() {
    this.folding = false;
  }

  @action
  setFolding(folding) {
    this.folding =folding;
  }

}

export default ItemUiStore;
