//clicking animal pic should alert the page
//with "The Cat Says Moo"

var animal = document.getElementById('animalPic');
//alert('animal.innerHTML');

animal.onclick = function() {
  var animalSounds = [
    'moo',
    'meow',
    'quack',
    'tweet tweet',
    'woof'
  ];

var beginningOfPhrase = 'The cat says ';
var sound;

var randomIndex = Math.floor( Math.random() * animalSounds.length)
sound = animalSounds[randomIndex]

 alert(beginningOfPhrase + sound);
};


var dogePic = document.getElementById('dogePic');
//alert('animal.innerHTML');

dogePic.onclick = function() {
  var animalSounds = [
    'moo',
    'meow',
    'quack',
    'tweet tweet',
    'woof'
  ];
var beginningOfPhrase = 'The doge says ';
var sound;

var randomIndex = Math.floor( Math.random() * animalSounds.length)
sound = animalSounds[randomIndex]

 alert(beginningOfPhrase + sound);
};
