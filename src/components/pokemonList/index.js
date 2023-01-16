import { Link } from "react-router-dom";

export default function PokemonList({ pokemon }) {
    return (
        <div className="grid grid-auto-fit gap-8">
            {pokemon.map((poke) => {
                return (
                    <div key={poke.id} className="pt-4 pr-2 pl-2 pb-2 dark:bg-grey-50 text-center text-4xl font-bold ">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 inline-block align-middle">
                            <div className="p-5">
                                <Link to={`/details-card/${poke.name}`}>
                                    <img className="rounded-t-lg" src={poke.image} alt="" />
                                </Link>
                                <h5 className="mb-2 font-normal font-bold tracking-tight text-gray-900 underline dark:text-white">{poke.name}</h5>
                                <ul className="space-y-1 text-xs list-none list-inside text-gray-500 dark:text-gray-400">
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}