
//------ Botão Blog -------//

const targetDiv = document.getElementById("blog");
const btn = document.getElementById("btn");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};

//------- Botão ler mais ------------ // 

const lermais = document.getElementById("mais");
const bt = document.getElementById("vermais");
bt.onclick = function () {
  if (lermais.style.display !== "none") {
    lermais.style.display = "none";
  } else {
    lermais.style.display = "block";
  }
}




