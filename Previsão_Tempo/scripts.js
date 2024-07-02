

const key = "01f6521a053fc3b31ea7bcc6d62255df"

function colocarDadosNaTela(dados){
    console.log(dados)
   document.querySelector(".cidade").innerHTML = " Tempo em " + dados.name
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
   document.querySelector(".texto-previsão").innerHTML = dados.weather[0].description 
   document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
   document.querySelector(".img-previsão").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade) {
     
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},{country code}&appid=${key}&lang=pt_br&units=metric `).then(resposta => resposta.json())
   
     
   colocarDadosNaTela(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}