const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
//My Predoction
//The code is likely to encounter an error because cardNumber is defined as a number type. In JavaScript, the slice method is a string method and cannot be directly applied to a number.
//slice method is not available on numbers.
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4); // This will throw an error
//Uncaught TypeError: cardNumber.slice is not a function.
//We need to convert cardNumber to a string literal
//Correcting
const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits); 
