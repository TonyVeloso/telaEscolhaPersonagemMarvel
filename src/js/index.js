/*  
  objetivos:   
    ao passar mouse em cima do elemento =>
  1-  mudar aurea azul para o mesmo;
  2-  tirar a aurea do elemento anterior;
  3-  trocar o nome do personagem;
  4-  trocar a imagem grande para o personagem selecionado

*/

//selecionando todos os elementos da classe "personagem" e colocando em uma Nodelist[]
const personagens = document.querySelectorAll(".personagem");

//tratamento com cada um dos elementos da Nodelist[] com um forEach()
//criando um evento do mouse "ao passar" (mouseenter); inserindo uma função com todos
//os objetivos dentro dentro do evento
personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    //objetivo 1 e 2
    //manipulando as classes dos elementos através da função "classList"
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
    personagem.classList.add("selecionado");

    //objetivo 4
    //manipulando os valores dos atributos no DOM através da função "getAttribute e
    //setAttribute"
    //aterando o diretório da imagem inserindo o valor de uma variável
    const idSelecionado = personagem.getAttribute("id");
    const imagemGrande = document.querySelector("#personagemJogador1");
    imagemGrande.setAttribute("src", "./src/img/" + idSelecionado + ".png");

    //objetivo 3
    //pegando a string de um "h3" e o valor de um atributo "data" e trocando-as
    //através da propriedade "textContent"
    const nome = document.querySelector(".nome h3");
    const dataName = personagem.getAttribute("data-name");
    nome.textContent = dataName;
  });
});

/*  

##########   -OUTRA FORMA DE FAZER POREM COM MAIS CODIGO- ################

 const idPersonagem = personagem.id;
    const personagemImagemGrande = document.querySelector(
      "#personagemJogador1"
    );
    const nome = document.querySelector(".nome h3");
    const dataName = personagem.getAttribute("data-name");

    if (idPersonagem === "capitaoAmerica") {
      personagemImagemGrande.setAttribute(
        "src",
        "./src/img/capitao-america.png"
      );
      nome.textContent = dataName;
    }

    if (idPersonagem === "doutorDoom") {
      personagemImagemGrande.setAttribute("src", "./src/img/doutor-doom.png");
      nome.textContent = dataName;
    }

    if (idPersonagem === "fenix") {
      personagemImagemGrande.setAttribute("src", "./src/img/fenix.png");
      nome.textContent = dataName;
    }

    if (idPersonagem === "homemDeFerro") {
      personagemImagemGrande.setAttribute(
        "src",
        "./src/img/homem-de-ferro.png"
      );
      nome.textContent = dataName;
    }

    if (idPersonagem === "hulk") {
      personagemImagemGrande.setAttribute("src", "./src/img/hulk.png");
      nome.textContent = dataName;
    }

    if (idPersonagem === "nova") {
      personagemImagemGrande.setAttribute("src", "./src/img/nova.png");
      nome.textContent = dataName;
    }

    if (idPersonagem === "thor") {
      personagemImagemGrande.setAttribute("src", "./src/img/thor.png");
      nome.textContent = dataName;
    }

    if (idPersonagem === "ultron") {
      personagemImagemGrande.setAttribute("src", "./src/img/ultron.png");
      nome.textContent = dataName;
    }

    if (idPersonagem === "viuvaNegra") {
      personagemImagemGrande.setAttribute("src", "./src/img/viuva-negra.png");
      nome.textContent = dataName;
    }

*/
