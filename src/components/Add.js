import React, { useState } from 'react';
import ResultCart from './ResultCard';

const Add = () => {

    const[query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    function onChange(e) {
        setQuery(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {if(!data.errors){setResults(data.results);}else{setResults([]);}}
            //setResults(data.results)
        );
    }

  return (
    <div className='add-page'>
        <div className='container'>
            <div className='add-content'>
                <img src='https://wallpapercave.com/dwp1x/wp8302980.jpg' alt=''/>
                <div className='titles'>
                    <h1>Wellcome!</h1>
                    <h2>Millions of movies, TV shows to discover. Discover now!</h2>
                </div>
                <div className='input-wrapper'>
                    <input type='text' value={query} onChange={onChange} placeholder='Search a Movie or TV show...' />
                </div>

                {results.length > 0 && (
                    <ul className='results'>
                        {results.map((movie) => (
                            <li key={movie.id}>
                                <ResultCart movie={movie} />
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </div>
    </div>
  );
};

export default Add;
