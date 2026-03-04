//select input field
const movieInput = document.getElementById("movieInput");

//select search button 
const searchBtn = document.getElementById("searchBtn");

//select result container
const movieResult = document.getElementById("movieResult");

//function that run when search button is clicked
async function searchMovie() {
    //get value typed by user 
    const movieName = movieInput.value.trim();

    //if input is empty stop function
    if (movieName === "") {
        movieResult.innerHTML = "<p>please enter a movie name.</p>";
        return;
    }

    //show loading while fetching data
    movieResult.innerHTML = "<p>loading...</p>";

    const apikey = "3914f2cb";

    const url = `https://www.omdbapi.com/?apikey=${apikey}&t=${movieName}`;

    try {
        //send request to api
        const response = await fetch(url);

        //convert response to json
        const data = await response.json();

        if (data.response === "false") {
            movieResult.innerHTML = "<p.Movie not found </p>";
            return;
        }

        let posterImage = data.Poster !== "N/A"
            ? data.Poster
            : "https://via.placeholder.com/300x450?text=No+Image";

        // Display movie details
        movieResult.innerHTML = `
    <div class="movie-card">
        <img src="${posterImage}" alt="${data.Title}">
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong> ${data.Year}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
    </div>`;

    //clear input after showing result 
    movieInput.value = "";

    } catch (error) {
        movieResult.innerHTML = `
        <p style="color:red;">
            Unable to fetch data. Please check your internet connection.
        </p>`;
    }

}

//attach fun to button 
searchBtn.addEventListener("click", searchMovie);

//to support enter key 

movieInput.addEventListener("keydown",function(event){
    if(event.key === "Enter")
    {
        searchMovie();
    }
})

