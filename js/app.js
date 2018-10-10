'use strict';

var username = prompt('Hello and welcome to my website, first what shall I call you?');

var speak = prompt('Hola ' + username +  ' Puede hablar espanol? y/n?').toLowerCase();

if (speak === 'y' ){
    alert('Bueno, Aprendi a hablar en Buenos Airies y Barcelona! ')
  console.log('User selected yes');
}
else{alert("That's okay I learned to speak Spanish in Buenos Airies and Barcelona!");
console.log('user selected no');};

var hobby = confirm( 'Would you like to know my hobby?')
if( hobby === true){
    alert('I currently train Brazilian Ju Jitsu with my friend Ashton who is also a student at Codefellows');
    console.log('user confirmed the prompt')
}
else{alert('I will show myself out');
console.log('user did not confirm');}

var joy = prompt('So ' + username + 'Did you enjoy learning about me? y/n?').toLowerCase();

if (joy === 'y' ){
    alert('Great I enjoyed meeting you too! ')
  console.log('User selected yes');
}
else{ alert('I will show myself out.');
console.log('user selected no');};

var creditCard = confirm('Since we are now such good friends can you please give me your credit card information?');
if (creditCard === true){alert('What a true friend');
console.log('user is a friend'); }
else{alert('some friend you are.');
console.log('user is not friend');
};