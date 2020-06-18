import { stores as itemStores } from './item';
import { stores as lolStores } from './lol';

export default {
  ...itemStores,
  ...lolStores
};
