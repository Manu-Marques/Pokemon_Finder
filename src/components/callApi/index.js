import axios from 'axios';


export default async function callApi() {
    const url = 'https://pokebuildapi.fr/api/v1/pokemon/limit/6';
    console.log(url);
  try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
}