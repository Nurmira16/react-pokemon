import axios from "axios";

const $api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  headers: { "X-Custom-Header": "foobar" },
});
export const fetchPokemonByName = async (name) => {
  try {
    const data = await $api.get(`/${name}`);
    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Handle 404 error (no such Pokemon)
      console.log(`No Pokemon found with name: ${name}`);
      return undefined;
    } else {
      // Handle other errors
      console.error("Error fetching Pokemon by name:", error);
      throw error; // Rethrow the error for other error handling mechanisms
    }
  }
};
export const fetchData = async (from, till) => {
  const result = [];
  for (let i = from; i <= till; i++) {
    const data = await $api.get("/" + i);
    result.push(data.data);
  }
  return result;
};
