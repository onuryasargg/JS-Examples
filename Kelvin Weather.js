const kelvin = 293;
console.log(kelvin);
// kelvin derecesinin 293 olduğunu belirttik ve konsola yazdırdık.

const celsius = kelvin - 273;
console.log(celsius);
// celcius'un kelvin den 273 derece daha az olduğunu söyledik

let fahrenheit = celsius * (9/5) + 32;
// fahrenheit'ın (celsius çarpı (dokuz bölü beş)) + 32 olduğunu söyledik
// parantez içi işlemden sonra çarpı işlemi daha sonra toplama işlemi.

fahrenheit = Math.floor(fahrenheit);
// ondalık bir sayı elde etme halimizde math.floor metodu ile sayıyı yuvarlıyoruz.

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Fahrenheit.`)