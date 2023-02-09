import api from "../config/axios";
export default function useApiPokemon() {
  const getPokemonByName = async (name) => {
    const response = await api.get(`${name}`);
    return response.data;
  };

  return {
    getPokemonByName,
  };
}
