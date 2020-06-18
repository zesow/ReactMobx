import autobind from 'autobind-decorator';
import LolRepository from '../repository/LolRepository';
import { observable, computed, action, toJS } from "mobx";

class LolStore {

  lolRepository = new LolRepository();

  @observable _searchParams = {};
  @computed get searchParams() { return toJS(this._searchParams);}

  @observable _matchList = [];
  @computed get matchList() { return toJS(this._matchList);}

  @action
  changeSearchParams = (e, {name,value}) => {

    console.log('name : ',name);
    console.log('value : ',value);


    this._searchParams = {
      ...this.searchParams,
      [name] : value
    };

    console.log(this.searchParams);
  };

  @action
  findList = async () => {
    await this.lolRepository.findList(this.searchParams)
      .then(action(data => {
        console.log(data);
        this._matchList = data.matches;
      } ));

    console.log(this.matchList);


  };


}

export default LolStore;
