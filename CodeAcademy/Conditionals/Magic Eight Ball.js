let userName = 'Onur';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will I adpot a new puppy soon?';
console.log(`${userName} has asked, ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightball = randomNumber;

if (eightball === 0) {
    eightball = ('It is certain');
}
else if (eightball === 1) {
    eightball = ('It is decidedly so');
}
else if (eightball === 2) {
    eightball = ('Reply hazy try again');
}
else if (eightball === 3) {
    eightball = ('It is certain');
}
else if (eightball === 4) {
    eightball = ('It is certain');
}
else if (eightball === 5) {
    eightball = ('It is certain');
}
else if (eightball === 6) {
    eightball = ('It is certain');
}
else if (eigthball === 7) {
    eightball = ('It is certain');
}
else {
    eightball = ('It is certain');
}
console.log(`The magic 8 ball says, ${eightball}`);

//switch (eightball) {
//    case 0:
//        eightball = ('It is certain');
//        break;

//    case 1:
//        eightball = ('It is decidedly so');
//        break;

//    case 2:
//        eightball = ('Reply hazy try again');
//        break;

//    case 3:
//        eightball = ('Cannot predict now');
//        break;

//    case 4:
//        eightball = ('Do not count on it');
//        break;

//    case 5:
//        eightball = ('My sources say no');
//        break;

//    case 6:
//        eightball = ('Outlook not so good');
//        break;

//    case 7:
//        eightball = ('Signs point to yes');
//        break;
//}