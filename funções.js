function mostrar(a){

   var res = document.getElementById("resultado").innerHTML;

   if(res.length < 17){

      document.getElementById("resultado").innerHTML = res + a;
   }
   
}

function limpar(){
   document.getElementById("resultado").innerHTML = ""
}

function apagar(){
   var res = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = res.substring(0, res.length -1)
}

function conta(){
   var resultado = document.getElementById('resultado').innerHTML;

   document.getElementById('resultado').innerHTML = eval(resultado);

}