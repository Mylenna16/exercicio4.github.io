function contaVogais(){
    var texto = document.getElementById("idTexto").value;
    
    const vogais = texto.match(/[aeiou]/gi);
    const cont = vogais.length;
    
    document.getElementById("idTexto2").innerHTML = "Número de vogais: " + cont; 
}
