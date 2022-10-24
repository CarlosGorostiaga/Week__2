// ----------------------------------------------------------SUPERSTICIONES------------------------------------------
const zodiac = (day: number, month: string) => {
    if (((day >= 20 && day <= 31) && (month === "marzo")) || ((day >= 1 && day <= 19) && (month === "abril"))) {
        console.log("Tu signo del Zodiaco es Aries");
    }
    else if (((day >= 20 && day <= 31) && (month === "abril")) || ((day >= 1 && day <= 20) && (month === "mayo"))) {
        console.log("Tu signo del Zodiaco es Tauro");
    }
    else if (((day >= 21 && day <= 31) && (month === "mayo")) || ((day >= 1 && day <= 20) && (month === "junio"))) {
        console.log("Tu signo del Zodiaco es Geminis");
    }
    else if (((day >= 21 && day <= 31) && (month === "junio")) || ((day >= 1 && day <= 22) && (month === "julio"))) {
        console.log("Tu signo del Zodiaco es Cancer");
    }
    else if (((day >= 23 && day <= 31) && (month === "julio")) || ((day >= 1 && day <= 22) && (month === "agosto"))) {
        console.log("Tu signo del Zodiaco es Leo");
    }
    else if (((day >= 23 && day <= 31) && (month === "agosto")) || ((day >= 1 && day <= 22) && (month === "septiembre"))) {
        console.log("Tu signo del Zodiaco es Virgo");
    }
    else if (((day >= 23 && day <= 31) && (month === "septiembre")) || ((day >= 1 && day <= 22) && (month === "octubre"))) {
        console.log("Tu signo del Zodiaco es Libra");
    }
    else if (((day >= 23 && day <= 31) && (month === "octubre")) || ((day >= 1 && day <= 21) && (month === "noviembre"))) {
        console.log("Tu signo del Zodiaco es Escorpio");
    }
    else if (((day >= 22 && day <= 31) && (month === "noviembre")) || ((day >= 1 && day <= 21) && (month === "diciembre"))) {
        console.log("Tu signo del Zodiaco es Sagitario");
    }
    else if (((day >= 22 && day <= 31) && (month === "diciembre")) || ((day >= 1 && day <= 19) && (month === "enero"))) {
        console.log("Tu signo del Zodiaco es Capricornio");
    }
    else if (((day >= 20 && day <= 31) && (month === "enero")) || ((day >= 1 && day <= 18) && (month === "febrero"))) {
        console.log("Tu signo del Zodiaco es Acuario");
    }
    else if (((day >= 19 && day <= 31) && (month === "febrero")) || ((day >= 1 && day <= 20) && (month === "marzo"))) {
        console.log("Tu signo del Zodiaco es Piscis");
    } else console.log("Wey no tienes signo ");

}

zodiac(27, "octubre");

// ------------------------------------------------------------------------CONTINENTES----------------------------------------------------
const continent = (country: string) => {
    if (country === "españa" || (country === "francia") || (country === "italia") || (country === "portugal") || (country === "grecia")) {
        console.log("Este pais se encuentra en el continente Europeo");
    }
    else if ((country === "china") || (country === "japon") || (country === "tailandia") || (country === "taiwan") || (country === "corea")) {
        console.log("Este pais se encuentra en el continente Asiatico");
    }
    else if ((country === "usa") || (country === "chile") || (country === "mexico") || (country === "argentina") || (country === "canada")) {
        console.log("Este pais se encuentra en el continente Americano");
    }
    else if ((country === "marruecos") || (country === "nigeria") || (country === "libia") || (country === "egipto") || (country === "costa de marfil")) {
        console.log("Este pais se encuentra en el continente Africano");
    }
    else if ((country === "australia") || (country === "nueva kiribati") || (country === "tanzania") || (country === "samoa") || (country === "fiyi")) {
        console.log("Este pais se encuentra en el continente Oceania");

    }
    else console.log("Tu pais no se encuentra en la base de datos ERROR 404");

}

continent("tonga")

//---------------------------------------------------------NUMEROS PARES E INPARES --------------------------------------------------------

export const isEven = (numero: number) => {
    if (numero % 2 == 0) {
        console.log("El numero introducido" + numero + "es Par");
    }
    else {
        console.log("El numero introducido " + numero + " es Impar");
        
    }
}

isEven( 17 )