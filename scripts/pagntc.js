// Recupera a notícia salva
var elementonoticia = JSON.parse(localStorage.getItem("noticia"));

if (elementonoticia) {
  console.log("Título:", elementonoticia.titulo);

  // Atualiza o título da página
  document.getElementById("titulopgnoticia").innerText = elementonoticia.titulo;

  // Atualiza o texto principal
  document.getElementsByClassName("textoMain")[0].innerText = elementonoticia.conteudo;

  // Atualiza o crédito do autor
  document.getElementsByClassName("criado")[0].innerText =
    "Por " + elementonoticia.autor + " — g2, Presidente Prudente";

  // Atualiza imagem de fundo da notícia
  var imgDiv = document.getElementsByClassName("imgMain")[0];
  imgDiv.style.backgroundImage = `linear-gradient(#0000002d, #0000002d), url(../assets/${elementonoticia.url})`;
  imgDiv.style.backgroundSize = "cover";
  imgDiv.style.backgroundPosition = "center";
} else {
  console.warn("Nenhuma notícia encontrada no localStorage.");
}
