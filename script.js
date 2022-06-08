perguntas = Math.floor(Math.random() * 3)


console.log(perguntas)

questao = document.getElementById("questao")
escolha1 = document.getElementById("escolha1")
escolha2 = document.getElementById("escolha2")
escolha3 = document.getElementById("escolha3")
resposta = document.getElementById("resposta")

if (perguntas == 0) {
    questao.innerHTML = "Qual a população do mundo?"
    escolha1.innerHTML = "8 a 7 bilhões"
    escolha2.innerHTML = "6 a 7 bilhões"
    escolha3.innerHTML = "7 a 8 bilhões"
    resposta_certa = 3
} else if (perguntas == 1) {
    questao.innerHTML = "segunda revolução industrial foi em qual seculo?"
    escolha1.innerHTML = "XVIII"
    escolha2.innerHTML = "XIV"
    escolha3.innerHTML = "XX"
    resposta_certa = 2
} else if (perguntas == 2) {
        questao.innerHTML = "Qual a media de vida de uma baleia-azul?"
        escolha1.innerHTML = "70 a 80 anos"
        escolha2.innerHTML = "80 a 90 anos"
        escolha3.innerHTML = "90 a 100 anos"
        resposta_certa = 2
}

function mudar(somar) {
    resposta.innerHTML = ""
    perguntas += somar
    if (perguntas == 0) {
        questao.innerHTML = "Qual a população do mundo?"
        escolha1.innerHTML = "8 a 7 bilhões"
        escolha2.innerHTML = "6 a 7 bilhões"
        escolha3.innerHTML = "7 a 8 bilhões"
        resposta_certa = 3
    } else if (perguntas == 1) {
        questao.innerHTML = "segunda revolução industrial foi em qual seculo?"
        escolha1.innerHTML = "XVIII"
        escolha2.innerHTML = "XIV"
        escolha3.innerHTML = "XX"
        resposta_certa = 2
    } else if (perguntas == 2) {
        questao.innerHTML = "Qual a media de vida de uma baleia-azul?"
        escolha1.innerHTML = "70 a 80 anos"
        escolha2.innerHTML = "80 a 90 anos"
        escolha3.innerHTML = "90 a 100 anos"
        resposta_certa = 2
    }
}

function opcao(escolha) {
    if (resposta_certa == escolha) {
        resposta.innerHTML = "Resposta correta"
    } else {
        resposta.innerHTML = "Resposta errada"
    }
}