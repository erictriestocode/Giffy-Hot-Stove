function getGif() {

    // var gifName = input;
    var queryURL = "https://api.giphy.com/v1/gifs/api_key=hjdE9lx9cGidHy5CN2GtAf1oyDZ9nEJN&limit=5&search?q=fire";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    });
  
  }

// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=dumpster+fire&api_key=hjdE9lx9cGidHy5CN2GtAf1oyDZ9nEJN&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

// function printGif(data) {
//     println(data.data[0].images.original.url);
// }