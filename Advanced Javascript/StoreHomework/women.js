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

    product1Container.innerHTML = `<h1 id="title1">${data[14].title}</h1> <br> <p id="paragraph"> ${data[14].description} </p> <p id="firstPrice">$${data[14].price}</p>`;
    product2Container.innerHTML = `<h1 id="title2">${data[15].title}</h1> <br> <p id="paragraph2"> ${data[15].description} </p> <p id="secondPrice">$${data[15].price}</p>`;
    product3Container.innerHTML = `<h1 id="title3">${data[16].title}</h1> <br> <p id="paragraph3"> ${data[16].description} </p> <p id="thirdPrice">$${data[16].price}</p>`;
    product4Container.innerHTML = `<h1 id="title4">${data[17].title}</h1> <br> <p id="paragraph4"> ${data[17].description} </p> <p id="fourthPrice">$${data[17].price}</p>`;
    product5Container.innerHTML = `<h1 id="title5">${data[18].title}</h1> <br> <p id="paragraph5"> ${data[18].description} </p> <p id="fifthPrice">$${data[18].price}</p>`;
    product6Container.innerHTML = `<h1 id="title6">${data[19].title}</h1> <br> <p id="paragraph6"> ${data[19].description} </p> <p id="sixhtPrice">$${data[19].price}</p>`;
    // container.innerHTML = `<p> ${data[14].description} </p>`;
  })
  .catch((err) => {
    console.log("Error", err);
  });

// fetch("https://fakestoreapi.com/products")
//   .then((resolve) => {
//     return resolve.json();
//   })
//   .then((data) => {
//     console.log(data);

//     for (let i = 0; i < data.length; i++) {
//       if (data[i].category === "women's clothing") {
//         list.innerHTML += `<li id="test1">${data[i].title}</li>`;
//       }
//     }
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });
