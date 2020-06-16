import axios from 'axios';
import ItemModel from '../model/ItemModel';

class ItemRepository {

  findAllItems() {
    return axios.get('http://localhost:8087/')
      .then(response => {
        // console.log(response)
        return response.data
      });
  }

  findItem(itemNo) {
    return axios.get(`/firstmobx/items/${itemNo}`)
      .then(response => ItemModel.fromApiModels(response && response.data));
  }

}

export default ItemRepository;
