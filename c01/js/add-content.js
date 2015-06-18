var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 17) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Hello!';
}

var el = document.getElementById('greeting');
el.textContent = greeting;
