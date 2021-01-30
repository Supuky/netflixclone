const API_KEY = "fb174c4f94b3f8dc4d4006f88611144a";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ja-JP`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=ja-JP`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ja-JP`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=ja-JP`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ja-JP`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ja-JP`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ja-JP`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=ja-JP`
}

export default requests;