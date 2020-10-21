// const number = 12.3445454
// console.log(number.toFixed(2));

// const random = Math.floor((Math.random() * 10) + 10)

// console.log(random);

// small number guessing game
const guestNumber = function(guset){
    const rnd = Math.floor(Math.random() * 4) + 1
    console.log('Random number ', rnd);
    if(guset == rnd){
        return console.log('True')
    }
    console.log('False');

}

guestNumber(1)