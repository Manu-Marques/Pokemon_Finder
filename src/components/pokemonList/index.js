import evoli from "../../../src/assets/evoli.jpg";

export default function PokemonList() {
    return (
        <div>
            <figure class="max-w-lg">
              <img class="object-left-top max-w-96 h-auto rounded-lg" src={evoli} alt="image description"/>
              <figcaption class="mt-2 text-2xl text-center text-gray-500 dark:text-gray-900">Evoli N°1</figcaption>
            </figure>
            <figure class="max-w-lg">
              <img class="max-w-96 h-auto rounded-lg" src={evoli} alt="image description"/>
              <figcaption class="mt-2 text-2xl text-center text-gray-500 dark:text-gray-900">Evoli N°1</figcaption>
            </figure>
        </div>
    )
}