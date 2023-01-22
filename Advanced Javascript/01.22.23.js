// // Function that takes a number through a parameter and returns how many digits that number has

// const digits = (number, length) => {
//   length = ("" + number).length;
//   console.log(length);
// };

// digits(1252, length);

// // Function that takes a number through a parameter and returns if its even or odd

// const oddOrEven = (number) => {
//   if (number % 2 === 0) {
//     console.log("Even");
//   } else if (number % 2 != 0) {
//     console.log("Odd");
//   }
// };

// oddOrEven(20);

// // Function that takes a number through a parameter and returns if its positive or negative

// const check = (number) => {
//   if (number < 0) {
//     console.log("Negative");
//   } else {
//     console.log("Positive");
//   }
// };

// check(10);

// let url = "https://swapi.dev/api/people/1";

// let button = document
//   .getElementById("btn")

//   .addEventListener("click", function () {
//     fetch(url)
//       .then((response) => {
//         return response;
//       })
//       .then((data) => {
//         let td = document.getElementById("name");
//         console.log(data);
//         td.innerHTML = JSON.stringify(`planets name: ${data.name}`);
//       });
//   });

// let request = "https://swapi.dev/api/people/26/";

let planets = document.getElementById("tableOfPlanets");

let request = "https://swapi.dev/api/planets/?page=";

let button = document.getElementById("btn");

button.addEventListener("click", function () {
  debugger;
  if (button.innerHTML === "Next 10")
    fetch(request + "2")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        createTable(data.results, 2);
      });
  else
    fetch(request + "1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        createTable(data.results, 1);
      });
});

function createTable(planetsArray, param) {
  planets.innerHTML = "";
  for (let i = 0; i < planetsArray.length; i++) {
    planets.innerHTML += ` <table      width="250px" border="10px">
<tr>
<th>Stats</th>
</tr>
<td >Planet Name: ${planetsArray[i].name}</td>
<tr>
<td >Population: ${planetsArray[i].population}</td>
</tr>
<tr>
<td >Climate: ${planetsArray[i].climate}</td>
</tr>
<tr>
<td >Gravity: ${planetsArray[i].gravity}</td>
</tr>
</table>`;
  }

  button.innerHTML = param === 1 ? "Next 10" : "Previous 10";
}
