export default function func1(data) {
  for (let i = 0; i < data.results.length; i++) {
    console.log(data.results[i].name);
    container.innerHTML += `<h2>${data.results[i].name}</h2>`;
  }
}

let container = document.getElementById("mainContainer");

fetch("https://swapi.dev/api")
  .then((data) => data.json())
  .then((data) => console.log(data));

// films
// :
// "https://swapi.dev/api/films/"
// people
// :
// "https://swapi.dev/api/people/"
// planets
// :
// "https://swapi.dev/api/planets/"
// species
// :
// "https://swapi.dev/api/species/"
// starships
// :
// "https://swapi.dev/api/starships/"
// vehicles
// :
// "https://swapi.dev/api/vehicles/

container.innerHTML = `

<h1 id="title">Welcome To StarWars APPI</h1>
<div> 
<a id="films" href="./insideCards/films.html">Films</a>
<a id="people" href="./insideCards/people.html" >People</a>
<a id="planets" href="./insideCards/planets.html">Planets</a>
<a id="species" href="./insideCards/species.html">Species</a>
<a id="starships" href="./insideCards/starships.html">Starships</a>
<a id="vehicles" href="./insideCards/vehicles.html">Vehicles</a>


</div> `;

fetch("https://swapi.dev/api/films/")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  });
fetch("https://swapi.dev/api/people")
  .then((data) => data.json())
  .then((data) => {
    // container.innerHTML = `<h1>${data.results[0].name} </h1> <br> <h2>  ${data.results[0].height}</h2>`;
    console.log(data);
  });
