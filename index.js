(function() {
    let tela = document.querySelector('.tela');
    let botoes = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let igual = document.querySelector('.btn-igual');

    //Estutura de repetição
    botoes.forEach(function(botoes) {
        botoes.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            //Primeira estrutura de tomada de decisão
            if (value !== undefined) {
                tela.value += value;
            }
        });
    });

    igual.addEventListener('click', function(e) {
        //Segunda estrutura de tomada de decisão
        if (tela.value === '') {
            tela.value = "Please enter";
        } else {
            try {
                let answer = eval(tela.value);
                tela.value = answer;
            } catch (error) {
                tela.value = "Error";
            }
        }
    });

    clear.addEventListener('click', function(e) {
        tela.value = "";
    });
})()
