const movies = [
    {
        _id: "463732dcdch723323",
        title: "Terminator",
        genre: { _id: "463732dcdch723227", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "463732dcdch723324",
        title: "Die Hard",
        genre: { _id: "463732dcdch723227", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 2.5
    },
    {
        _id: "463732dcdch723325",
        title: "Get Out",
        genre: { _id: "463732dcdch723322", name: "Thriller" },
        numberInStock: 8,
        dailyRentalRate: 3.5
    },
    {
        _id: "463732dcdch723326",
        title: "Trip To Italy",
        genre: { _id: "463732dcdch723321", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "463732dcdch723327",
        title: "Airplane",
        genre: { _id: "463732dcdch723321", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "463732dcdch723328",
        title: "Wedding Crashers",
        genre: { _id: "463732dcdch723321", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "463732dcdch723329",
        title: "Gone Girl",
        genre: { _id: "463732dcdch723322", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 4.5
    },
    {
        _id: "463732dcdch723329a",
        title: "The Sixth Sense",
        genre: { _id: "463732dcdch723321", name: "Thriller" },
        numberInStock: 4,
        dailyRentalRate: 3.5
    },
    {
        _id: "463732dcdch723329b",
        title: "The Avengers",
        genre: { _id: "463732dcdch723227", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 3.5
    }
];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {};
    movieInDb.name = movie.name;
    //movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;
}

export function setMovie() {

}

//export function deleteMovie(index) {



export default movies;