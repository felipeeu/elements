import axios from 'axios'

export const getElements = (url: string, hook:Function ) => {
  return axios
    .get(url)
    .then(response => hook(response.data))
    .catch(e => alert("Erro ao tentar carregar elementos  --> " + e));
};