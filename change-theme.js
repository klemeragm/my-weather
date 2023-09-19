//change acessibility 
var icon = document.getElementById("icon");

// Verifica o tema salvo no localStorage
// Se estiver vazio, o tema será colocado como dark
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "dark");
}

// Busca o valor salvo no localStorage
let localData = localStorage.getItem("theme"); 

// Se o valor estiver salvo como dark, a página será carregada no modo dark
if (localData == "dark") {
    icon.src = "./img/cloud-svgrepo-com.svg";
    document.body.classList.remove("light-theme");
}



// Se o valor estiver salvo como light, a página será carregada no modo light
else if(localData == "light") {
    icon.src = "./img/cloud-svgrepo-com-dark.svg";
    document.body.classList.add("light-theme");
}

// Altera o ícone ao clicar 
icon.onclick = function() {
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")) {
        icon.src= "./images/cloud-svgrepo-com-dark.svg";
        localStorage.setItem("theme", "light");
    }
    else{
        icon.src= "./images/day.png";
        localStorage.setItem("theme", "dark");
    }
}