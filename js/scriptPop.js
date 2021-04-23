const API_KEY = 'cc8a996114ccd712c62e4ea4975135a9';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/movie/popular?api_key=' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const main = document.getElementById('main');
/*getPopular();
function getPopular() {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
  )
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function (err) {
      alert(err);
    });
  }*/
const form =  document.getElementById('form');


getPopular(API_URL);

function getPopular(API_URL) {

    fetch(API_URL)
    .then((result) => result.json())
    .then((data) => {
        console.log(data.results)
            showMovies(data.results);
        
       
    })

}


function showMovies(data) {
    main.innerHTML = '';
 console.log(data);
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        
        `

        main.appendChild(movieEl);
    })
}


function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}