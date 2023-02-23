let container = document.getElementById("mainContainer");

fetch("https://swapi.dev/api/films/")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    container.innerHTML = `
    
    
    <h1>FILMS</h1>
    `;

    func1(data);
  });

function func1(data) {
  for (let i = 0; i < data.results.length; i++) {
    console.log(data.results[i].title);
    container.innerHTML += `<h2>${data.results[i].title}</h2>`;
  }
}
