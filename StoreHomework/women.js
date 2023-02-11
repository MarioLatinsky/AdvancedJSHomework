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
      if (data[i].category === "women's clothing") {
        list.innerHTML += `<li id="test1">${data[i].title}</li>`;
      }
    }
  })
  .catch((err) => {
    console.log("Error", err);
  });
