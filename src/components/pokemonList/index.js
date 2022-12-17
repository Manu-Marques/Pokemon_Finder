import { Link } from "react-router-dom";
import evoli from "../../../src/assets/evoli.jpg";

export default function PokemonList({pokemon}) {
    return (
        <div class="flex flex-wrap">
            <figure class="max-w-lg">
              <Link to="/pokemon/1">
              <img class="pr-1 max-w-96 h-auto rounded-lg" src={evoli} alt="image description"/>
              </Link>
              <figcaption class="mt-2 text-2xl text-center text-gray-500 dark:text-gray-900">{pokemon}</figcaption>
            </figure>
            <figure class="max-w-lg">
              <img class="pr-1 max-w-96 h-auto rounded-lg" src={evoli} alt="image description"/>
              <figcaption class="mt-2 text-2xl text-center text-gray-500 dark:text-gray-900">Evoli N°1</figcaption>
            </figure>
            <figure class="max-w-lg">
              <img class="pr-1 max-w-96 h-auto rounded-lg" src={evoli} alt="image description"/>
              <figcaption class="mt-2 text-2xl text-center text-gray-500 dark:text-gray-900">Evoli N°1</figcaption>
            </figure>
            <figure class="max-w-lg">
              <img class="pr-1 max-w-96 h-auto rounded-lg" src={evoli} alt="image description"/>
              <figcaption class="mt-2 text-2xl text-center text-gray-500 dark:text-gray-900">Evoli N°1</figcaption>
            </figure>
            <figure class="max-w-lg">
              <img class="pr-1 max-w-96 h-auto rounded-lg" src={evoli} alt="image description"/>
              <figcaption class="mt-2 text-2xl text-center text-gray-500 dark:text-gray-900">Evoli N°1</figcaption>
            </figure>            <figure class="max-w-lg">
              <img class="pr-1 max-w-96 h-auto rounded-lg" src={evoli} alt="image description"/>
              <figcaption class="mt-2 text-2xl text-center text-gray-500 dark:text-gray-900">Evoli N°1</figcaption>
            </figure>
            <figure class="max-w-lg">
              <img class="pr-1 max-w-96 h-auto rounded-lg" src={evoli} alt="image description"/>
              <figcaption class="mt-2 text-2xl text-center text-gray-500 dark:text-gray-900">Evoli N°1</figcaption>
            </figure>


        </div>
    )
}