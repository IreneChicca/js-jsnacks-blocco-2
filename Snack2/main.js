//- Creo due array di equal numero contenenti uno i nomi e uno i cognomi 
//- Genero due variabili che producono un numero randomico 
//- Imposto un ciclo il quale *Per Ogni* elemento dell'array stampa un elemento per array con indice popolato da variabile randomica creata prima


const names = ['Alberto', 'Barbara', 'Claudio', 'Dayana', 'Elisa', 'Filippo', 'Giulietta', 'Ily', 'Luca', 'Mia']
const surnames = ['Apple', 'Pear', 'Orange', 'Apricot', 'Peach', 'Plum', 'Melon', 'Banana', 'Pumpkin', 'Lemon']



const lenght = names.length  // non ho capito perchè sono stata obbligata a impostare questa variabile anzichè passare name.lenght nel secondo argomento del for


for (let i = 0; i < 20; i++) {
    let randomNum1 = Math.round(Math.random() * (lenght - 1))
    let randomNum2 = Math.round(Math.random() * (lenght - 1))


    console.log(names[randomNum1] + " " + surnames[randomNum2])

}

// da ritornare per sistemare la grafica e renderlo un po piu complesso

