let container = document.getElementById("mainContainer");

fetch("https://swapi.dev/api/people/")
  .then((data) => data.json())
  .then((data) => {
    func1(data);
    console.log(data);
  });

function func1(data) {
  for (let i = 0; i < data.results.length; i++) {
    console.log(data.results[i].name);
    container.innerHTML += `<h2>${data.results[i].name}</h2>`;
  }
}
