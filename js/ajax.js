
function bodyLoad() {
  // Declare an empty object to store product information.
  var product = {};

  // Create a new XMLHttpRequest object.
  // It allows JavaScript to send HTTP requests to a server.
  let r = new XMLHttpRequest();

  // Configure the HTTP request.
  // GET: Request data from the server.
  // "../data/product.json": Location of the JSON file.
  // true: Make the request asynchronous (non-blocking).
  r.open("GET", "../data/product.json", true);

  // Send the HTTP request to the server.
  r.send();

  // This function runs whenever the request state changes.
  r.onreadystatechange = function () {

    // readyState 4 means the request is complete.
    if (r.readyState === 4) {

      // Convert the JSON response text into a JavaScript object.
      // responseText contains the data received from the server.
      product = JSON.parse(r.responseText);

      // Find the HTML element with ID "imgProduct".
      // Set its src attribute to the product image path.
      document.getElementById("imgProduct").src = product.img;

      // Find the HTML element with ID "lblTitle".
      // Display the product title inside that element.
      document.getElementById("lblTitle").innerHTML = product.title;

      // Find the HTML element with ID "lblPrice".
      // Convert the product price into Indian currency format.
      document.getElementById("lblPrice").innerHTML =
        product.price.toLocaleString("en-IN", {

          // Display the value as currency.
          style: "currency",

          // Use Indian Rupees.
          currency: "INR",

          // Do not show decimal digits.
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });

      // Find the HTML element with ID "lblRating".
      // Insert dynamically generated HTML using a template literal.
      document.getElementById("lblRating").innerHTML = `

        <!-- Display the product rating inside a green badge. -->
        <span class="badge bg-success text-white rounded">
          ${product.rating.rate}

          <!-- Display a filled star icon. -->
          <span class="bi bi-star-fill text-white"></span>
        </span>

        <!-- Display the total ratings and reviews. -->
        <span class="fw-bold text-secondary ms-3">

          <!-- Convert ratings count into Indian number format. -->
          ${product.rating.ratings.toLocaleString("en-IN")}

          ratings &

          <!-- Convert reviews count into Indian number format. -->
          ${product.rating.reviews.toLocaleString("en-IN")}

          reviews
        </span>
      `;

      // Iterate through every item in the features array.
      // map() executes the callback function for each feature.
      product.features.map(function (feature) {

        // Create a new HTML <li> element.
        var li = document.createElement("li");

        // Insert the current feature text into the <li> element.
        li.innerHTML = feature;

        // Assign Bootstrap and Bootstrap Icons CSS classes.
        li.className = "text-secondary my-3 bi bi-dot";

        // Find the HTML element with ID "lstFeatures".
        // Append the newly created <li> element inside it.
        document.getElementById("lstFeatures").appendChild(li);

        // This statement selects an element with an empty ID.
        // It does not perform any useful operation.
        document.getElementById("");
      });
    }
  };
}

