import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Login {

}

export const loginApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Login, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = loginApi