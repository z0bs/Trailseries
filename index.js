// ? the moviedb api was used, and the api key was issued on the website
// let movieId = Math.floor(Math.random() * (max-min) + min)

// -------------------------- Golbal Variables -----------------------------

const key = "e4eaa314f879c2192d6abf43a0bd124b";
const baseUrl = `https://image.tmdb.org/t/p/w500/`;

// ------------------------- Dom Elements-----------------------------

const check = document.getElementById("check");
const show = document.getElementById("display");
const movieBanner = document.querySelector(".movie-banner");

// -------------------------Making api call to get Movies -----------------

const getMovies = async () => {
  let movieId = Math.floor(Math.random() * (600 - 100) + 100);
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`;


  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw "Something went Wrong";
    }
    const data = await res.json();
    ;
    // console.log(data);
    console.log(`${data.original_title} ${data.poster_path}`)
    // movieBanner.setAttribute("src", `${baseUrl}${data.poster_path}`)
  } catch (err) {
    console.log(err);
  }
};

// const showMovie = (moviedata) => {
//   console.log(moviedata);
//   console("in show me")
// };

document.addEventListener("click", getMovies);

//how to adjust padding on different screen with bootstrap ?