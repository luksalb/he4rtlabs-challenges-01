function send(){
    let hdia = document.getElementById("hdia").value;
    let tdia = document.getElementById("tdia").value;
    let fdia = document.getElementById("fdia").value;
    let vproj = document.getElementById("vproj").value;

    valorHora = (vproj / (tdia * 4 * hdia) ) + ( ( fdia * tdia * hdia ) )
    let resultado = document.getElementById("result");
    resultado.innerHTML = valorHora;
}