/* Máscaras ER */
function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id( el ){
return document.getElementById( el );
}
window.onload = function(){
id('whatsapp').onkeyup = function(){
  mascara( this, mtel );
}
}


// Data
function mascaraData(val) {
  var pass = val.value;
  var expr = /[0123456789]/;

  for (i = 0; i < pass.length; i++) {
    // charAt -> retorna o caractere posicionado no índice especificado
    var lchar = val.value.charAt(i);
    var nchar = val.value.charAt(i + 1);

    if (i == 0) {
      // search -> retorna um valor inteiro, indicando a posição do inicio da primeira
      // ocorrência de expReg dentro de instStr. Se nenhuma ocorrencia for encontrada o método retornara -1
      // instStr.search(expReg);
      if (lchar.search(expr) != 0 || lchar > 3) {
        val.value = "";
      }
    } else if (i == 1) {
      if (lchar.search(expr) != 0) {
        // substring(indice1,indice2)
        // indice1, indice2 -> será usado para delimitar a string
        var tst1 = val.value.substring(0, i);
        val.value = tst1;
        continue;
      }

      if (nchar != "/" && nchar != "") {
        var tst1 = val.value.substring(0, i + 1);

        if (nchar.search(expr) != 0)
          var tst2 = val.value.substring(i + 2, pass.length);
        else var tst2 = val.value.substring(i + 1, pass.length);

        val.value = tst1 + "/" + tst2;
      }
    } else if (i == 4) {
      if (lchar.search(expr) != 0) {
        var tst1 = val.value.substring(0, i);
        val.value = tst1;
        continue;
      }

      if (nchar != "/" && nchar != "") {
        var tst1 = val.value.substring(0, i + 1);

        if (nchar.search(expr) != 0)
          var tst2 = val.value.substring(i + 2, pass.length);
        else var tst2 = val.value.substring(i + 1, pass.length);

        val.value = tst1 + "/" + tst2;
      }
    }

    if (i >= 6) {
      if (lchar.search(expr) != 0) {
        var tst1 = val.value.substring(0, i);
        val.value = tst1;
      }
    }
  }

  if (pass.length > 10) val.value = val.value.substring(0, 10);
  return true;
}

//   E-mail validacao
function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    document.getElementById("msgemail").innerHTML = "E-mail válido";
    alert("E-mail valido");
  } else {
    document.getElementById("msgemail").innerHTML =
      "<font color='red'>E-mail inválido </font>";
    alert("E-mail invalido");
  }
}

/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector("#header .container");
const toggle = document.querySelectorAll(".container .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

for (const element of toggle) {
  element.addEventListener("click", function () {
    body.classList.toggle("show");
  });
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}
