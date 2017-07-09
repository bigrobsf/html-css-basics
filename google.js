/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function() {

  // adds event listeners to the search text box and search buttons
  var searchBtn = document.getElementById('search');
  searchBtn.addEventListener('click', openGoogle);

  var searchBox = document.querySelector('.search-box');
  searchBox.focus();
  searchBox.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) openGoogle();
  });
});


// opens a new tab with the search results from Google
function openGoogle() {
  var searchText = document.querySelector('.search-box').value;
  if (searchText.length) {
    var url = `https://www.google.com/#q=${searchText}`;
    window.open(url);
    document.querySelector('.search-box').value = '';
  }
}
