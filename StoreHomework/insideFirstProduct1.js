let container = document.getElementById("mainContainer");

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

    container.innerHTML = `<h1 id="test1">${data[14].title}</h1> <br> <p> ${data[14].description} </p>`;
    // container.innerHTML = `<p> ${data[14].description} </p>`;
  })
  .catch((err) => {
    console.log("Error", err);
  });
