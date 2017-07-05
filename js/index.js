console.log("Hello from the JavaScript console!");

$.ajax ({
  url: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b",
  type: "GET",
  success: function(weather) {
    console.log("Here is your weather:")
    console.log(weather);
  }
});

console.log("AJAX away!")

// Your AJAX request here

// Add another console log here, outside your AJAX request
