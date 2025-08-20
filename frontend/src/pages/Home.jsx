import MovieCard from "../components/MovieCard"

function Home(){
    const movie = [
        {id : 1 , title : "Theri" , release_date : 2018},
        {id : 2 , title : "Goat" , release_date : 2022},
        {id : 3 ,title : "Mersal" , release_date : 2018}
    ]
    return (
        <>
        <div className="home">
            <div className="movies-grid">
                {movie.map((movie) => (<MovieCard movie={movie} key = {movie.id}/>))}
            </div>
        </div>
        </>
    )
}

export default Home;