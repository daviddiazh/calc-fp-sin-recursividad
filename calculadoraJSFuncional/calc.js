const suma = (num1, num2) => num1 + num2;
console.log("El resúltado de la suma es: " + suma(1,4))

const resta = (num1, num2) => num1 - num2;
console.log("El resúltado de la resta: " + resta(10,4))

const multiplicacion = (num1, num2) => {
    return [...Array(num2)].reduce((acc) => suma(acc, num1),0);
}
console.log("El resúltado de la multiplicación es: " + multiplicacion(5,3));

const division = (num1, num2) => {
	return num2 == 0 || num1 == 0 ? 'No se puede dividir entre cero' : num2 > 1 ? [...Array(num1).keys()].reduce((acc, num) => multiplicacion(num, num2) <= num1 ? suma(acc, 1) : acc, -1) : num1;
}
console.log("El resúltado de la división es: " + division(15,3));