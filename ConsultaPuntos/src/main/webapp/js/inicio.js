const inicio = document.getElementById("inicio");
const consulta = document.getElementById("consulta");
const button = document.getElementById("btn_inicio");

button.addEventListener("click",function(){
    consulta.style.display="block";
    inicio.style.display="none";
});
