const API_KEY = 'api_key=cc8a996114ccd712c62e4ea4975135a9';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const genres = [
    {
      "id": 28,
      "name": "Bélier"
    },
    {
      "id": 12,
      "name": "Capricorne"
    },
    {
      "id": 16,
      "name": "Vierge"
    },
    {
      "id": 35,
      "name": "Taureau"
    },
    {
      "id": 80,
      "name": "Lion"
    },
    {
      "id": 99,
      "name": "Cancer"
    },
    {
      "id": 18,
      "name": "Gémeaux"
    },
    {
      "id": 10751,
      "name": "Balance"
    },
    {
      "id": 14,
      "name": "Scorpion"
    },
    {
      "id": 36,
      "name": "Poisson"
    },
    {
      "id": 27,
      "name": "Sagitaire"
    },
  ]

const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

  var selectedGenre = []
setGenre();
function setGenre() {
    tagsEl.innerHTML= '';
    genres.forEach(genre => {
        const t = document.createElement('div');
        t.classList.add('tag');
        t.id=genre.id;
        t.innerText = genre.name;
        t.addEventListener('click', () => {
            if(selectedGenre.length == 0){
                selectedGenre.push(genre.id);
            }else{
                if(selectedGenre.includes(genre.id)){
                    selectedGenre.forEach((id, idx) => {
                        if(id == genre.id){
                            selectedGenre.splice(idx, 1);
                        }
                    })
                }else{
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre)
            getMovies(API_URL + '&with_genres='+encodeURI(selectedGenre.join(',')))
            highlightSelection()
        })
        tagsEl.append(t);
    })
}