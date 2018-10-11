'use strict';

var username = prompt('Hello and welcome to my website, first what shall I call you?');

function questionOne() {

var speak = prompt('Hola ' + username +  ' Puede hablar espanol? y/n?').toLowerCase();

if (speak === 'y' ){
    alert('Bueno, Aprendi a hablar en Buenos Airies y Barcelona! ')
  console.log('User selected yes');
}
else{alert("That's okay I learned to speak Spanish in Buenos Airies and Barcelona!");
console.log('user selected no');};
}
questionOne();

function questionTwo() {
var hobby = confirm( 'Would you like to know my hobby?')
if( hobby === true){
    alert('I currently train Brazilian Ju Jitsu with my friend Ashton who is also a student at Codefellows');
    console.log('user confirmed the prompt')
}
else{alert('I will show myself out');
console.log('user did not confirm');}
}
questionTwo();

function questionThree () {
var joy = prompt('So ' + username + 'Did you enjoy learning about me? y/n?').toLowerCase();

if (joy === 'y' ){
    alert('Great I enjoyed meeting you too! ')
  console.log('User selected yes');
}
else{ alert('I will show myself out.');
console.log('user selected no');};
}
questionThree();

function questionFour() {
var creditCard = confirm('Since we are now such good friends can you please give me your credit card information?');
if (creditCard === true){alert('What a true friend');
console.log('user is a friend'); }
else{alert('some friend you are.');
console.log('user is not friend');
};
}
questionFour();

function questionFive() {
alert("Now lets play a game, guess how many countries I have been to in my life, you only have 4 chances to get this right so we need to focus")
var correctAnswer = 6;
var guess = prompt("Guess a number between 1-10");
var turn = 5;

for(var i=1; i< 4; i++){
  if( guess == correctAnswer){
    alert("You have chosen wisely. I have been to Argentina, Ireland, France, Spain, Italy & Mexico");
    break;

  } else{
    
    if( guess > correctAnswer){alert("Too high guess again")};
    if( guess < correctAnswer){alert("Too low guess again")};
    
    var guess = prompt("Guess again, you have made " + i + " attempts!");
  }


}
 if( guess != correctAnswer){alert("I'm sorry you have failed please leave my website");
 }

alert("Now let's guess which cities i have lived in, you have seven tries to complete it")
}
questionFive();

function questionSix() {
var city = ["Barcelona","Dublin","London"];
var guess = prompt("Guess a city");
var i = 0;
var attempts = 7;
while(i < 7)
if (guess === city[1] || guess === city[0] || guess === city[2] ){
  i++;
  attempts --;
  alert('you got it, it only took you' + i + ' attempts out of seven!');
  break;
} else {
  i++;
  attempts --;
  alert ("WRONG you have " + attempts + " more tries to get it right")
  var guess = prompt("Guess a city");
  if (attempts === 0){
    alert("Leave in shame.")
    break;
  }
}
}
questionSix();