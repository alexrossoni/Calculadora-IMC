
const btnCalc = document.getElementById("btn-calc");

function calcIMC() {
    const namePerson = document.getElementById("name-person").value;
    const heightPerson = document.getElementById("height-person").value;
    const weightPerson = document.getElementById("weight-person").value;
    const resultIMC = document.getElementById("result-IMC");


    if(namePerson !== '' && heightPerson !== '' && weightPerson !== '' && heightPerson > 0 && weightPerson > 0){
        
        valorIMC = (weightPerson / Math.pow(heightPerson, 2)).toFixed(2);

        let classification = ''

        if(valorIMC < 18.5) {
            classification = "abaixo do peso!"
        } else if(valorIMC < 25) {
            classification = "com peso ideal!"
        } else if(valorIMC < 30) {
            classification = "levemente acima do peso!"
        } else if(valorIMC < 35) {
            classification = "com obesidade de 1° grau!"
        } else if(valorIMC < 40) {
            classification = "com obesidade de 2° grau!"
        } else {
            classification = "com obesidade mórbida!"
        }


        resultIMC.textContent = `${namePerson}, seu IMC é de ${valorIMC} e você está ${classification}`;

    } else {
        resultIMC.textContent = "Preencha corretamente todos os campos!";
    }


}

btnCalc.addEventListener('click', calcIMC)
