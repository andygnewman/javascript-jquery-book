// using querySelectorAll results in a STATIC nodelist which you can iterate over
var hotItems = document.querySelectorAll('li.hot'); // Store NodeList in array

// if you used getElementsByClassName it would be a LIVE nodelist which changes
// resulting in an incorrect behaviour when iterating over it.

  // var hotItems = document.getElementsByClassName('hot');

if (hotItems.length > 0) {                          // If it contains items

  for (var i = 0; i < hotItems.length; i++) {       // Loop through each item
    hotItems[i].className = 'cool';         // Change value of class attribute
  }

}
