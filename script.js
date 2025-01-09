var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");
var resultsContainer = document.getElementById("results-container");
var showAllButton = document.getElementById("show-all");

searchButton.addEventListener("click", function() {
  var query = searchInput.value.trim();
  if (!query) return;