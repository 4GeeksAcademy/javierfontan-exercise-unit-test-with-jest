
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (moneda) => {
    return moneda * oneEuroIs.JPY;
}
const fromEuroToDollar  = (moneda) => {
    return moneda * oneEuroIs.USD;
}
const fromYenToPound = (moneda) => {
    return moneda * oneEuroIs.GBP;
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))
console.log(fromDollarToYen(2));
console.log(fromEuroToDollar(2));
console.log(fromYenToPound(2));


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromDollarToYen,fromEuroToDollar,fromYenToPound};