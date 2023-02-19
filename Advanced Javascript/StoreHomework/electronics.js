let list = document.getElementById("ul");
let container = document.getElementById("container");
let product1Container = document.getElementById("firstProductContainer");
let product2Container = document.getElementById("secondProductContainer");
let product3Container = document.getElementById("thirdProductContainer");
let product4Container = document.getElementById("fourthProductContainer");
let product5Container = document.getElementById("fifthProductContainer");
let product6Container = document.getElementById("sixhtProductContainer");

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

    product1Container.innerHTML = `<h1 id="title1">${data[8].title}</h1> <br> <p id="paragraph"> ${data[8].description} </p> <p id="firstPrice">$${data[8].price}</p>`;
    product2Container.innerHTML = `<h1 id="title2">${data[9].title}</h1> <br> <p id="paragraph2"> ${data[9].description} </p> <p id="secondPrice">$${data[9].price}</p>`;
    product3Container.innerHTML = `<h1 id="title3">${data[10].title}</h1> <br> <p id="paragraph3"> ${data[10].description} </p> <p id="thirdPrice">$${data[10].price}</p>`;
    product4Container.innerHTML = `<h1 id="title4">${data[11].title}</h1> <br> <p id="paragraph4"> ${data[11].description} </p> <p id="fourthPrice">$${data[11].price}</p>`;
    product5Container.innerHTML = `<h1 id="title5">${data[12].title}</h1> <br> <p id="paragraph5"> ${data[12].description} </p> <p id="fifthPrice">$${data[12].price}</p>`;
    product6Container.innerHTML = `<h1 id="title6">${data[13].title}</h1> <br> <p id="paragraph6"> ${data[13].description} </p> <p id="sixhtPrice">$${data[13].price}</p>`;
  })
  .catch((err) => {
    console.log("Error", err);
  });
