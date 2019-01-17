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
var userVal = '';
var gifWad;


$(document).ready(function () {
    // Test log
    console.log("it works!");
        // Just get and console log out giphy return(code from Giphy API documentation, modified for assignment)
    // limit to 10 results per homework instructions
    // changed data to response to reduce confusion
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=dumpster+fire&api_key=hjdE9lx9cGidHy5CN2GtAf1oyDZ9nEJN&limit=10");
    xhr.done(function (response) { 
        console.log("success got data", response);
        var gifWad = response.data;
});
 
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
    // not really working and inspiring a lot of rage
    // EDIT 11:06 1/16: This to the rescue!
    $('#premade-buttons').on('click', '.term', function () {
        //button clicks and logs
        console.log("button clicked!");
        // somehow try and get the attribute of the button that is clicked and store as butVal
        var userVal = $(this).attr("data-name");
        // haha, butVal
        console.log(userVal);
        // Stuck here for the night
        console.log(gifWad[0].id);
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
        // Then dynamically generating buttons for each term in the array
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
CODE BELOW THAT DIDNT WORK OR MAYBE DID AND I USED IT IN A DIFFERENT WAY


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


