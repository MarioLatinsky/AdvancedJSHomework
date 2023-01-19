let url = "https://swapi.dev/api/people/1";

let button = document.getElementById("btn");

button.addEventListener("click", function () {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let h1 = document.getElementById("name");
      console.log(data);
      h1.innerHTML = JSON.stringify(data.name);
    });

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let td = document.getElementById("height");
      console.log(data);
      td.innerHTML = JSON.stringify(`Height: ${data.height}cm`);
    });
  3;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let td = document.getElementById("weight");
      console.log(data);
      td.innerHTML = JSON.stringify(`Weight: ${data.mass}kg`);
    });

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let td = document.getElementById("eyes");
      console.log(data);
      td.innerHTML = JSON.stringify(`Eye color: ${data.eye_color}`);
    });

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let td = document.getElementById("hair");
      console.log(data);
      td.innerHTML = JSON.stringify(`Hair color: ${data.hair_color}`);
    });
});
