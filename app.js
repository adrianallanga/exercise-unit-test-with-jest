const dollar_to_yen = 110; // un dollar = 110 yenes
const yen_to_pound = 0.0069; // una libra = 0.0069 yenes


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
const fromDollarToYen = (dollarAmount) => {
return dollarAmount * dollar_to_yen;
}

const fromYenToPound = (yenAmount) => {
return yenAmount * yen_to_pound;

}

module.exports = {  fromEuroToDollar, fromYenToPound, fromDollarToYen }
