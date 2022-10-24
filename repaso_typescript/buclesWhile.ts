// 1. Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

// let myNumber: number[] = [25, 21, 1, 7, 5, 13];
// function hasEven(myNumber: number[]) {
//     let i = 1
//     while (i < myNumber.length) {
//         if (myNumber[i] % 2 == 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// console.log(hasEven(myNumber));

// 2. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)

let myNames: string[] = ["Manolo", "Maria", "Marta", "Mario", "Manuel"];
function startWithM(myNames: string[]) {
    let i = 0
    while (i < myNames.length) {
        if (myNames[i][0] !== "M") {
            return false

        }
        i++;
    }
    return true
}


console.log(startWithM(myNames));
