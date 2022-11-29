
//the forecast today is 293 kelvin, this variable will stay a constant 
const kelvin = 293; 

//celsius is 273 degrees less then kelvin
const celsius = kelvin - 273; 

//the equation to fahrenheit 
var fahrenheit = celsius * (9/5) + 32; 

//round the result 
fahrenheit = Math.floor(fahrenheit); 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`); 
