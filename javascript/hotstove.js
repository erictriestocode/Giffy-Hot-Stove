/*

Start of File!

// Giphy API key: hjdE9lx9cGidHy5CN2GtAf1oyDZ9nEJN
// remember to query via https
// personal use: reference movie generator here: file:///C:/Users/eric/Google%20Drive/Northwestern/Trilogy/Session%201-8/09-ClickJSON/Unsolved/click-json.html
// Ended up referencing this file a lot.
// jquery createImg!
*/

//  ************** START ATTEMPT AT REAL CODE **************

// Array of initial buttons, named topics per instructions
var topics = ["Salty", "Deal with it", "Dumpster Fire"];



$(document).ready(function () {
    // Test log
    console.log("it works!");
    // Just get and console log out giphy return(code from Giphy API documentation, modified for assignment)
    // limit to 10 results per homework instructions
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=dumpster+fire&api_key=hjdE9lx9cGidHy5CN2GtAf1oyDZ9nEJN&limit=10");
    xhr.done(function (data) { console.log("success got data", data); });
    // $("#results").html("<img src =" + xhr.data[0].images.original.url + ">");
    renderButtons();

    //  Function to generate buttons based on initial topics array and additional terms from users. 
    // function definitely lifted and modified from json click assignment
    $("#search-term").on("click", function (event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var gif = $("#gif-search").val().trim();
        // Adding the movie from the textbox to our array
        topics.push(gif);
        console.log(gif);
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
    });

    // primary gif click functionality
    $("#term").on('click', function() {
        console.log("button clicked!");

    });

});





// function definitely lifted and modified from the json click assignment
function renderButtons() {

    // Deleting the buttons prior to adding new gif search terms
    // (this is necessary otherwise you will have repeat buttons)
    $("#premade-buttons").empty();
    console.log("renderbuttons fired!")
    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {
        console.log("loop has worked " + i);
        // Then dynamically generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("term");
        // Adding a data-attribute
        a.attr("data-name", topics[i]);
        // Providing the initial button text
        a.text(topics[i]);
        // Adding the button to the buttons-view div
        $("#premade-buttons").append(a);
    }
};






// ************** END ATTEMPT AT REAL CODE **************












/*
SHIT CODE BELOW THAT DIDNT WORK


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
*/


