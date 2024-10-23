// Importar la función sum del archivo app.js
const { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});



test('2 Dollar TO Yen = 313 ', () => {
    let total = fromDollarToYen(2);

    expect(total).toBe(313);
});


test('2 Euro TO Dollar = 2.14 ', () => {
    let total = fromEuroToDollar(2);
    expect(total).toBe(2.14);
});


test('2 Yen TO Pound = 1.74 ', () => {
    let total = fromYenToPound(2);

    expect(total).toBe(1.74);
});