var short = document.getElementById('output-mail');
var check;

var eMail = prompt ('Inserisci la tua e-mail');

var authMails = ['a@gmail.com', 'b@gmail.com', 'c@gmail.com', 'd@gmail.com']

for (var m = 0; m < authMails.length; m++) {
    if (eMail === authMails[m]) {
        check = true;
        break;
    }
}

if (check) {
    short.innerHTML = '<br/><br/> is authorized!';
} else {
    short.innerHTML = '<br/><br/> is NOT authorized!';
}

// ---------------  Dice game start --------------- //

var short2 = document.getElementById('winner');

// MY EYES BLEED NOT USING A FUNCTION HERE, DAMN IT!

// function diceGame () {
    var number = Math.floor(Math.random() * 6) + 1; //Range increase from 0-5 to 1-6
    var number2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('output-dice').innerHTML ='<br/><br/>' + number;
    document.getElementById('output2-dice').innerHTML ='<br/><br/>' + number2;

    if (number > number2) {
        /* return */ short2.innerHTML = 'You win!!';
    } else if (number < number2) {
        /* return */ short2.innerHTML = 'You lose...';
    } else {
        /* return */ short2.innerHTML = "It's a draw!";
    }
//}
//diceGame();

