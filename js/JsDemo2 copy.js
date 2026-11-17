function bodyLoad() {
  let dt = new Date();
  document.querySelector("pre").innerHTML = `Page loaded on ${dt.toLocaleString(
    "default"
  )}`;
}
function fnLoad() {
  var product = {};
  let http = new XMLHttpRequest();
  http.open("GET", "../data/product.json", true);
  http.send();
  http.onreadystatechange = function () {
    if (http.readyState === 4) {
      product = JSON.parse(http.responseText);
      document.querySelector("img").src = product.img;
      document.querySelector("p").innerHTML = product.title;
      document.querySelector("p").style = "font-weight:bold";
      document.getElementById("priceH").innerText =
        product.price.toLocaleString("default", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumfractionDigits: 0,
        });
      document.getElementById(
        "ratingH"
      ).innerHTML = `<span class="badge bg-success " >${product.rating.rate}<span class= "bi bi-star-fill "></span></span>
      <span class=" fs-7" color="grey">${product.rating.ratings}</span>`;
      product.features.map(function (feature) {
        let li = document.createElement("li");
        li.innerHTML = feature;
        li.className = "bi bi-dot text   ";
        document.getElementById("featureH").appendChild(li);
      });
    }
  };
}
