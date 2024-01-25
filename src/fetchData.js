import axios from "axios";

const $api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  headers: { "X-Custom-Header": "foobar" },
});
export const fetchPokemonByName = async (name) => {
  const data = await $api.get(`/${name}`);
  return data.data;
};
export const fetchData = async () => {
  const data = await $api.get();
  return data;
};
