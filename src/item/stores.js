import ItemStore from "./store/ItemStore";
import ItemUiStore from "./store/ItemUiStore";
import ItemsUiStore from "./store/ItemsUiStore";

export default {
  itemStore : new ItemStore(),
  itemUiStore : new ItemUiStore(),
  itemsUiStore : new ItemsUiStore()
};
