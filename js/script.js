let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let btnReiniciar = document.querySelector('#btnReiniciar');

btnReiniciar.addEventListener('click', function(){
    location.reload();
});

const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "PORTUGAL",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "CHILE",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "FRANCA",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "HOLANDA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "PARAGUAI",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "URUGUAI",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "ARGENTINA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "JAPAO",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria: "TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria: "TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria: "TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria: "TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria: "TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria: "TRANSPORTE"
    },
    palavra020 = {
        nome: "FUNICULAR",
        categoria: "TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria: "OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria: "OBJETOS"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria: "OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria: "OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria: "OBJETOS"
    },
    palavra026 = {
        nome: "TAMBORETE",
        categoria: "OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria: "OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria: "OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria: "OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria: "OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria: "ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria: "ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria: "ALIMENTOS"
    },
    palavra034 = {
        nome: "GOROROBA",
        categoria: "ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria: "ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria: "ALIMENTOS"
    },
    palavra037 = {
        nome: "DESJEJUM",
        categoria: "ALIMENTOS"
    },
    palavra038 = {
        nome: "MASTIGAR",
        categoria: "ALIMENTOS"
    },
    palavra039 = {
        nome: "ENGOLIR",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "DOCERIA",
        categoria: "ALIMENTOS"
    },
    palavra041 = {
        nome: "DRAGAO",
        categoria: "ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria: "ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria: "ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria: "ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria: "ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria:"ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria:"ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria:"ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria:"ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    }
];

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById('categoria');
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById('palavra-secreta');
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++) {
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById('tecla-' + letra).disabled = true;

    if(tentativas > 0) {
        mudarStyleLetra('tecla-' + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#c71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra);
    if(pos < 0) {
        tentativas--;
        carregaImagemForca();

        if(tentativas == 0) {
            abreModal("OPS!", "N??o foi dessa vez .... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    } else {
        for(i = 0; i < palavraSecretaSorteada.length; i++) {
            if(palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;

    for(i = 0; i < palavraSecretaSorteada.length; i++) {
        if(palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if(vitoria == true) {
        abreModal("PARAB??NS!!", "Voc?? venceu....");
        tentativas = 0;
    }
}

function carregaImagemForca() {
    switch(tentativas) {
        case 5:
            document.getElementById('imagem').style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById('imagem').style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById('imagem').style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById('imagem').style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById('imagem').style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById('imagem').style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById('imagem').style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById('exampleModalLabel');
    modalTitulo.innerText = titulo;

    let modalMensagem = document.getElementById('modalBody');
    modalMensagem.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}