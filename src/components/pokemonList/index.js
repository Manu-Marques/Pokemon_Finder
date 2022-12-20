import { Link } from "react-router-dom";
import evoli from "../../../src/assets/evoli.jpg";

export default function PokemonList({pokemon}) {
    return (
      <div class="flex flex-wrap">
      {pokemon.map((poke) => {
        return (
            <figure key={poke.id} class="max-w-lg">
              <Link to="/pokemon/1">
              <img class="pr-1 max-w-96 h-auto rounded-lg" src={poke.sprites.front_default} alt="image description"/>
              </Link>
              <figcaption class="mt-2 text-2xl text-center text-gray-500 dark:text-gray-900">{poke.name}</figcaption>
            </figure>
      )
    })
    }
        </div>
    )
}