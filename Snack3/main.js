//- Creo un array di numeri interi 
//- Imposto un ciclo che ha come variabile i=1 e incrementa di 2 ad ogni giro così da ottenere a ogni giro i numeri dispari
//- All'interno del ciclo passo la i come indicec dell'array e sommo mano mano i valori

//questo metodo non ha funzionato perciò ho deciso di selezionare solo gli indici i quali divisi per %2 restituivano resto


const numbers = [25, 78, 45, 902, 345, 81, 23, 50, 123, 45, 2, 104, 33, 5];
const length = numbers.length;

// creo una variabile vuota da rivalorizzare ad ogni giro per poi poterla stampare

let sumNumbers = 0;

for (i = 1; i < length; i++) {

    if (i % 2 != 0)
        console.log(sumNumbers += numbers[i])

}

alert(sumNumbers)


// da ritornare per sistemare la grafica