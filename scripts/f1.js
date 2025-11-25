const primeiroName = document.getElementById("primeiroName")
const primeiroFoto = document.getElementById("primeiroImg")
const primeiroTime = document.getElementById("primeiroTeam")
const primeiroTempo = document.getElementById("primeiroTempo")
const segundoName = document.getElementById("segundoName")
const segundoFoto = document.getElementById("segundoImg")
const segundoTime = document.getElementById("segundoTeam")
const segundoTempo = document.getElementById("segundoTempo")
const terceiroName = document.getElementById("terceiroName")
const terceiroFoto = document.getElementById("terceiroImg")
const terceiroTime = document.getElementById("terceiroTeam")
const terceiroTempo = document.getElementById("terceiroTempo")
const raceStats = document.getElementById("raceStats")
const tabela = document.getElementById("tble")

const url = "https://api.jolpi.ca/ergast/f1/current/last/results/?format=json"
const cores = {
    mclaren: "#F47600",
    mercedes: "#00D7B6",
    ferrari: "#ED1131",
    red_bull: "#4781D7",
    rb: "#6C98FF",
    williams: "#1868DB",
    aston_martin: "#229971",
    sauber: "#01C00E",
    haas: "#9C9FA2",
    alpine: "#00A1E8"

}

function insertLine(stats){
    console.log(stats)
    const linha = document.createElement("tr")
    const colocacao = document.createElement("td")
    colocacao.innerHTML  = stats.position +'º' 
    colocacao.innerHTML += stats.positionText == "R" ? "- DNF": ""
    colocacao.className = "colocacao"
    const nome  = document.createElement("td")
    nome.innerHTML = stats.Driver.givenName+" "+stats.Driver.familyName+" - "+stats.number
    nome.className = "piloto"
    const construtora = document.createElement("td")
    const logoRow = document.createElement("td")
    logoRow.className = "logoRow"
    const construLogo = document.createElement("img")
    construLogo.src = "../assets/images/teams/"+stats.Constructor.constructorId+".svg"
    construtora.innerHTML = stats.Constructor.name
    logoRow.appendChild(construLogo)
    construtora.className = "construtora"
    construtora.style.background = cores[stats.Constructor.constructorId]

    linha.appendChild(colocacao)
    linha.appendChild(nome)
    linha.appendChild(logoRow)
    linha.appendChild(construtora)
    return linha
}

function formatTime(msString) {
  const ms = parseInt(msString, 10);

  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = ms % 1000;

  // Formata com zeros à esquerda para minutos e segundos
  const formatted =
    `${hours}:${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')}.` +
    `${String(milliseconds).padStart(3, '0')}`;

  return formatted;
}

async function requisicao(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

requisicao(url).then((dados) => {
    let corrida = dados.MRData.RaceTable.Races[0]
    let podium = corrida.Results
    console.log(corrida)
    raceStats.children[0].innerHTML = corrida.raceName
    raceStats.children[1].innerHTML = new Date(corrida.date).toLocaleDateString()

    primeiroName.innerHTML = podium[0].Driver.familyName.toUpperCase()
    primeiroFoto.src = "../assets/images/pilotos/"+podium[0].Driver.driverId+".avif"
    primeiroFoto.style.background = "linear-gradient(0deg, black, "+cores[podium[0].Constructor.constructorId]+")"
    primeiroTime.src = "../assets/images/teams/"+podium[0].Constructor.constructorId+".svg"
    primeiroTempo.innerHTML = formatTime(podium[0].Time.millis)

    segundoName.innerHTML = podium[1].Driver.familyName.toUpperCase()
    segundoFoto.src = "../assets/images/pilotos/"+podium[1].Driver.driverId+".avif"
    segundoFoto.style.background = "linear-gradient(0deg, black, "+cores[podium[1].Constructor.constructorId]+")"
    segundoTime.src = "../assets/images/teams/"+podium[1].Constructor.constructorId+".svg"
    segundoTempo.innerHTML = formatTime(podium[1].Time.millis)


    terceiroName.innerHTML = podium[2].Driver.familyName.toUpperCase()
    terceiroFoto.src = "../assets/images/pilotos/"+podium[2].Driver.driverId+".avif"
    terceiroFoto.style.background = "linear-gradient(0deg, black, "+cores[podium[2].Constructor.constructorId]+")"
    terceiroTime.src = "../assets/images/teams/"+podium[2].Constructor.constructorId+".svg"
    terceiroTempo.innerHTML = formatTime(podium[2].Time.millis)

    podium.forEach(element => {
        if (element.position >=4){
            const linha = insertLine(element)
            tabela.appendChild(linha)
        }  
    });
})

