// 2. Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

// function evenNumbers(num: number) {
//     for (let i: number = 0; i < num; i++) {
//         if (i % 2 != 0) {
//             console.log(i);
//         }
//     }
// }

// evenNumbers(65)

// 3. Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)

let myArr = [7, 1, 6, 4, 3, 10]

function myRevert(myArr: number[]) {
    let wardrobe: number[] = []
    for (let i = myArr.length - 1; i >= 0; i--) {
        wardrobe.push(myArr[i]);
    }
    return wardrobe
}
console.log(myRevert(myArr));


// 4. Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)

let myColorsRainbow = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"];
let myColors = ["rojo", "granate", "blanco"];


function isRainbow(myColors: string[]): void {
    for (let i = 0; i < myColors.length; i++) {
        if (myColorsRainbow.includes(myColors[i])) {
            console.log("El color indicado " + myColors[i] + " se encuentra en los colores del arcoiris");
        } else {
            console.log("El color indicado " + myColors[i] + " no se encuentra en los colores del arcoiris");

        }
    }
}

isRainbow(myColors);


// 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

let elementos: string[] = ["terrier", "labrador", "galgo", "doberman"];
export function add(myWords: string[]): number {
    let numero: number[] = [];
    for (let i = 0; i < elementos.length; i++) {
        numero.push(myWords[i].length)
    }
    let long = numero.reduce((numeroPalabras, acumulator) => numeroPalabras + acumulator)
    return long;

}
console.log(add(elementos));

