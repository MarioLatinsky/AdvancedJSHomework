let list = document.getElementById("ul");
let container = document.getElementById("container");
let product1Container = document.getElementById("firstProductContainer");
let product2Container = document.getElementById("secondProductContainer");
let product3Container = document.getElementById("thirdProductContainer");
let product4Container = document.getElementById("fourthProductContainer");

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

    product1Container.innerHTML = `<h1 id="title1">${data[4].title}</h1> <br> <p id="paragraph"> ${data[4].description} </p> <p id="firstPrice">$${data[4].price}</p>`;
    product2Container.innerHTML = `<h1 id="title2">${data[5].title}</h1> <br> <p id="paragraph2"> ${data[5].description} </p> <p id="secondPrice">$${data[5].price}</p>`;
    product3Container.innerHTML = `<h1 id="title3">${data[6].title}</h1> <br> <p id="paragraph3"> ${data[6].description} </p> <p id="thirdPrice">$${data[6].price}</p>`;
    product4Container.innerHTML = `<h1 id="title4">${data[7].title}</h1> <br> <p id="paragraph4"> ${data[7].description} </p> <p id="fourthPrice">$${data[7].price}</p>`;
  })
  .catch((err) => {
    console.log("Error", err);
  });
