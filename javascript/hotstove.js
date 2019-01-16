// Giphy API key: hjdE9lx9cGidHy5CN2GtAf1oyDZ9nEJN
// remember to query via https

// personal use: reference movie generator here: file:///C:/Users/eric/Google%20Drive/Northwestern/Trilogy/Session%201-8/09-ClickJSON/Unsolved/click-json.html

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=hjdE9lx9cGidHy5CN2GtAf1oyDZ9nEJN";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});