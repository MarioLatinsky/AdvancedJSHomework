let container = document.getElementById("container");
let firstTitle = document.getElementById("electronics");
let secondTitle = document.getElementById("jewelery");
let thirdTitle = document.getElementById("mens_clothing");
let fourthTitle = document.getElementById("womens_clothing");
let firstUl = document.getElementById("first-ul");
let secondUl = document.getElementById("second-ul");

let jeweleryLink = document.getElementById("jeweleryLink");
let electronicsLink = document.getElementById("electronicsLink");
let mens_clothingLink = document.getElementById("mens_clothingLink");
let womens_clothingLink = document.getElementById("womens_clothingLink");

// jeweleryLink.addEventListener("click", function () {
//   fetch("https://fakestoreapi.com/products")
//     .then((resolve) => {
//       return resolve.json();
//     })
//     .then((data) => {
//       for (let i = 0; i < data.length; i++) {
//         console.log(data[i]);

//         let test = data[i];
//         console.log(test.title);

//         switch (data[i].category) {
//           case "electronics":
//             firstTitle.innerHTML += `<li>${test.title}, ${test.price}$</li>`;
//             break;

//           case "jewelery":
//             secondTitle.innerHTML += `<li>${test.title}</li>`;
//             break;
//           case "men's clothing":
//             thirdTitle.innerHTML += `<li>${test.title}</li>`;
//             break;

//           case "women's clothing":
//             fourthTitle.innerHTML += `<li>${test.title}</li>`;
//             break;
//           default:
//             return alert("Something went wrong, please try agian later.");
//             break;
//         }
//       }
//     });
// });

fetch("https://fakestoreapi.com/products/categories")
  .then((resolve) => {
    return resolve.json();
  })
  .then((data) => {
    console.log(data);

    firstTitle.innerHTML = `<h3>${data[0]}</h3>`;
    secondTitle.innerHTML = `<h3>${data[1]}</h3>`;
    thirdTitle.innerHTML = `<h3>${data[2]}</h3>`;
    fourthTitle.innerHTML = `<h3>${data[3]}</h3>`;
  })
  .catch((err) => {
    console.log("Error", err);
  });

// fetch("https://fakestoreapi.com/products")
//   .then((resolve) => {
//     return resolve.json();
//   })
//   .then((data) => {
//     for (let i = 0; i < data.length; i++) {
//       console.log(data[i]);

//       let test = data[i];
//       console.log(test.title);

//       switch (data[i].category) {
//         case "electronics":
//           firstTitle.innerHTML += `<li>${test.title}, ${test.price}$</li>`;
//           break;

//         case "jewelery":
//           secondTitle.innerHTML += `<li>${test.title}</li>`;
//           break;
//         case "men's clothing":
//           thirdTitle.innerHTML += `<li>${test.title}</li>`;
//           break;

//         case "women's clothing":
//           fourthTitle.innerHTML += `<li>${test.title}</li>`;
//           break;
//         default:
//           return alert("Something went wrong, please try agian later.");
//           break;
//       }
//     }
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });
