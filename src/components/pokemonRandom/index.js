import React, { useState, useEffect, useRef, useCallback } from 'react'

export default function PokemonRandom({pokemon}) {
    const Salut = ({ pokemon }) => {
        return (
   <div> 
    <h1 className="text-4xl text-center text-gray-50 dark:bg-bluekemon">Pokemon aléatoire</h1>
    </div>
        )
}

function Movies() {
    const movies = useRef([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
  
    async function getMovies() {
      const movieData = await Promise.resolve({
          data: [{ id: 1, title: "123" }, { id: 1, title: "456" }, { id: 1, title: "789" }]
        });

      movies.current = movieData.data.sort((a, b) => a.title.localeCompare(b.title));
      setFilteredMovies(movies.current);
    }
    console.log(movies.current)
  
    useEffect(() => {
      getMovies();
    }, []);
    
  
    const onSearchSubmit = useCallback(async (term) => {
      if (term) {
        const _ = movies.current.filter(({ title }) => (title === term));
        setFilteredMovies(_);
      } else {
        setFilteredMovies(movies.current);
      }
    }, [movies]);

return (
    <div>
        <form  className="ui form">
          <div className="field">
            <label>Movie Search</label>
            <input
              type="text"
              className="bg-red-500"
            />
          </div>
        </form>
    <Salut pokemon={pokemon} />
    </div>
)
}
}