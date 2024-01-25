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
  const result = [];
  for (let i = 1; i <= 7; i++) {
    const data = await $api.get("/" + i);
    result.push(data.data);
  }
  return result;
};
