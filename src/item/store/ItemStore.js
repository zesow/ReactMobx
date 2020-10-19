import {observable, computed, action, toJS} from 'mobx';
import autobind from 'autobind-decorator';
import ItemRepository from "../repository/ItemRepository";

@autobind
class ItemStore {

  itemRepository = new ItemRepository();

  @observable
  _items = [];

  @observable
  item = null;

  @computed
  get items() {
    return toJS(this._items);
  }

  @action
  clearItems() {
    this._items = null;
  }

  @action
  clearItem() {
    this.item = null;
  }

  @action
  async findAllItems() {
    await this.itemRepository.findAllItems()
      .then(action(items => {
        console.log(items);
        this._items = items
      }));
  }

  @action
  findItem(itemNo) {
    return this.itemRepository.findItem(itemNo)
      .then(action(item => this.item = item));
  }

  @action
  setItemProp(name, value) {
    this.item[name] = value;
  }

}

export default ItemStore;
