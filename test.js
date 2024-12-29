const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {


    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
test ("One dollar should be 110 yens", () => {
    expect(fromDollarToYen(1)).toBe(110); 
})
test ("One yen should be 0.0069 pounds", () => {
    expect(fromYenToPound(1)).toBe(0.0069); 
})
