const arr1 = ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'elemento5', 'elemento6', 'elemento7', 'elemento8', 'elemento9', 'elemento10', 'elemento11', 'elemento12'];

const arr2 = ['elementoA', 'elementoB', 'elementoC'];


const arr1length = arr1.length
let arr2length = arr2.length










for (let i = 0; i < arr1length; i++) {

    if (arr1length > arr2length) {

        arr2.push('newelemento')
        arr2length = arr2.length
        console.log("si aggiungo")
        console.log(arr2.length)

    }

    else { console.log("basta") }


}