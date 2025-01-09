var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");
var resultsContainer = document.getElementById("results-container");
var showAllButton = document.getElementById("show-all");

searchButton.addEventListener("click", function() {
  var query = searchInput.value.trim();
  if (!query) return;

   
   resultsContainer.innerHTML = "";
   showAllButton.style.display = "none";
 
   
   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
     .then(function(response) {
       return response.json();
     })
     .then(function(data) {
       if (data.meals) {
         displayMeals(data.meals);
       } else {
         resultsContainer.innerHTML = "<p>No meals found!</p>";
       }
     })
     .catch(function(error) {
       console.error("Error fetching data:", error);
     });
 });
 
 

