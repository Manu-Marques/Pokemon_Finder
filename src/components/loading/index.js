export default function Loading() {
    return (
        <div className="flex justify-center flex-col items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-8 border-yellow-400"></div>
        <h1 className="pt-4 font-mono text-2xl text-center">Chargement des pokemons...</h1>
        </div>
    )
    }