const API_key = '25b79eaa9accac42e101edbaa62b2eb7'

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/tv/popular?api_key=${API_key}&language=en-US&page=1`,
    fetchTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_key}&language=en-US&page=1`
}
export default requests