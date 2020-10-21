const name = 'thilina Dilshan'

//length
console.log(name.length);

//upper case
console.log(name.toUpperCase())

// to check include something
console.log(name.includes('dil'));

// trim the data
let value = ' this is the value  '
console.log(value);
console.log(value.trim());

// challenge
const isValidPassword = function(password){
    if(password.length < 8 || password.includes('password')){
        return 'Invalid password'
    }
    return 'valid password'
}

console.log(isValidPassword('passwordss'));
console.log(isValidPassword('pass'));
console.log(isValidPassword('thisisthemyName'));