import axios from "axios";

const getPokemonData = () =>
  axios
    .get("https://pokebuildapi.fr/api/v1/pokemon/")
    .then((res) => res.data.name)
    .catch((err) => console.error(err));

export default getPokemonData;