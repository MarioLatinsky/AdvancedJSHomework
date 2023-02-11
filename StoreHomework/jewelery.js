let list = document.getElementById("ul");
let container = document.getElementById("container");
fetch("https://fakestoreapi.com/products/categories")
  .then((resolve) => {
    return resolve.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error", err);
  });

fetch("https://fakestoreapi.com/products")
  .then((resolve) => {
    return resolve.json();
  })
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      if (data[i].category === "jewelery") {
        list.innerHTML += `<li>${data[i].title}</li>`;
      }
    }
  })
  .catch((err) => {
    console.log("Error", err);
  });

// .then((resolve) => {
//   return resolve.json();
// })
// .then((data) => {
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);

//     let test = data[i];
//     console.log(test.title);

//     switch (data[i].category) {
//       case "electronics":
//         firstTitle.innerHTML += `<li>${test.title}, ${test.price}$</li>`;
//         break;

//       case "jewelery":
//         secondTitle.innerHTML += `<li>${test.title}</li>`;
//         break;
//       case "men's clothing":
//         thirdTitle.innerHTML += `<li>${test.title}</li>`;
//         break;

//       case "women's clothing":
//         fourthTitle.innerHTML += `<li>${test.title}</li>`;
//         break;
//       default:
//         return alert("Something went wrong, please try agian later.");
//         break;
//     }
//   }
// });
