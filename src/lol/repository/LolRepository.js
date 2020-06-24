import axios from 'axios';

class LolRepository {

  findList(searchParams) {
    return axios.get(`http://54.180.178.139:8087/lol/findUserMatchHistoryByUsername/${searchParams.username}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      });
  }

  findUserInfo(searchParams) {
    return axios.get(`http://54.180.178.139:8087/lol/findUserInfo/${searchParams.username}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      });
  }

}

export default LolRepository;
