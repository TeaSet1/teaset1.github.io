
var keys = ["enter", "imes", "ai", "ober", "ufat"];
var vocales = ["e", "i", "a", "o", "u"];

//llamamos a todos los objetos. su valor lo seleccionaremos luego.

var main = document.getElementById("main");

/*var buttons = [
    document.getElementById("b-encriptar");
    document.getElementById("b-desencriptar");
    document.getElementById("b-copiar");
]*/

var noMesagges = document.getElementById("output-text-box"); //Texto "no hay mensajes".

var copiedMessage = document.getElementById("copied-message"); //mensaje "copiado".

var munheco = document.getElementById("munheco");

var output = document.getElementById("output"); //texto encriptado Y botón copiar.

var outputText = document.getElementById("output-text"); //<p> donde sale el resultado.


function transform(entrada, salida){

    let inputText = document.getElementById("input-text");
    
    var buffer = inputText.value; //El buffer nos permite almacenar los cambios de cada iteración for.

    for (let index = 0; index < vocales.length; index++) {

        buffer = buffer.replaceAll(entrada[index], salida[index]); 
    }
    
    munheco.style.display="none";
    noMesagges.style.display="none";
    output.style.display="flex";

    outputText.innerText = buffer;

    inputText.value = "";
}

function copiado(){

    navigator.clipboard.writeText(outputText.innerText); //innerText y no value por ser un <p>.
    
    output.style.display= "none";

    noMesagges.style.opacity = 0;
    noMesagges.style.display= "flex";
    
    copiedMessage.style.display = "block";

    setTimeout(function(){
        copiedMessage.style.display = "none"
        if (window.matchMedia('(min-width: 1280px)').matches) {
            munheco.style.display= "block";
        }else{
            munheco.style.display= "none";
        }
        noMesagges.style.opacity = 1;
    }, 1000);
}

main.addEventListener("click", function(event){ //Usaremos funciones anónimas para reducir el tamaño del código y poder establecer argumentos.
    
    let inputText = document.getElementById("input-text");
    
    if (inputText.value != "") {

       if(event.target.id === "b-encriptar"){
        transform(vocales, keys);
        }

        if(event.target.id === "b-desencriptar"){
        transform(keys, vocales);
        }
    }

    if(event.target.id === "b-copiar"){
    copiado();
    }
});

window.addEventListener("resize", function(){
    if(window.matchMedia("(max-width: 1280px)").matches){
        munheco.style.display = "none";
    }else{
        munheco.style.display = "block";
    }
})