import MovieCard from "../components/MovieCard"
import { useState } from "react";
function Home(){
    const [searchQuery,setSearchQuery] = useState("")
    const movie = [
        {id : 1 , title : "Theri" , release_date : 2018},
        {id : 2 , title : "Goat" , release_date : 2022},
        {id : 3 ,title : "Mersal" , release_date : 2018}
    ]
    const handleSearch = (e)=>{
        e.preventDefault()
        alert(searchQuery)
    };
    return (
        <>
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" placeholder="Search for movies ....." 
                className="search-input" 
                value = {searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search </button>

            </form>
            <div className="movies-grid">
                {movie.map((movie) => (<MovieCard movie={movie} key = {movie.id}/>))}
            </div>
        </div>
        </>
    )
}

export default Home;