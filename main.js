//1.1
const button = document.getElementById('myButton');
const div = document.getElementById('myDiv');

button.addEventListener('click', function() {
  div.style.display = 'none';
});


//1.2

// შექმენით <div> ელემენტი
const divv = document.createElement('div');
div.setAttribute('id', 'card');

// შექმენით <h2> ელემენტი
const h2 = document.createElement('h2');
h2.textContent = 'Gandalf';

// შექმენით <a> ელემენტი
const a = document.createElement('a');
a.setAttribute('href', '#');
a.textContent = 'Go to profile';

// დაამატეთ <h2> ელემენტი <div> -ში
div.appendChild(h2);
// დაამატეთ <a> ელემენტი <div> -ში
div.appendChild(a);

// დაამატეთ <div> -ი DOM-ში
const container = document.getElementById('container');
container.appendChild(div);

console.log(div, h2, a);


