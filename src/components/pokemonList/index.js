import { Link } from "react-router-dom";

export default function PokemonList({pokemon}) {
  // console.log(pokemon);
    return (
      <div class="flex flex-wrap">
      {pokemon.map((poke) => {
        return (
            <figure key={poke.id} class="max-w-lg">
              <Link to={`/details-card/${poke.name}`}>
              <img class="pr-1 w-48 h-auto rounded-lg" src={poke.sprites.front_default} alt="pokemon"/>
              </Link>
              <figcaption class="mt-2 text-2xl text-center text-gray-500 dark:text-gray-900">{poke.name}</figcaption>
            </figure>
      )
    })
    }
        </div>
    )
}