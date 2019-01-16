// Giphy API key: hjdE9lx9cGidHy5CN2GtAf1oyDZ9nEJN
// remember to query via https

// personal use: reference movie generator here: file:///C:/Users/eric/Google%20Drive/Northwestern/Trilogy/Session%201-8/09-ClickJSON/Unsolved/click-json.html
// Ended up referencing this file a lot.

var buttonsInit = ["salty", "Deal with it", "Dumpster Fire"]
// maybe use this below to debug and just pull trending
// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=hjdE9lx9cGidHy5CN2GtAf1oyDZ9nEJN";

function getGif() {

  var gifName = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=hjdE9lx9cGidHy5CN2GtAf1oyDZ9nEJN&limit=5&search?q=" + gifName;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });

}

// Function to generate the buttons dynamically per Movie in class assignment
function makeButtons(){
$("#buttons-view").empty();
for (var i = 0; i < buttonsInit.length; i++) {
  // Then dynamicaly generating buttons for each movie in the array
  // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
  var a = $("<button>");
  // Adding a class of movie to our button
  a.addClass("movie");
  // Adding a data-attribute
  a.attr("data-name", movies[i]);
  // Providing the initial button text
  a.text(movies[i]);
  // Adding the button to the buttons-view div
  $("#buttons-view").append(a);
}
}



