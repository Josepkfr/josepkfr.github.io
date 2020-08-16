// filtros = [{consulta:"html"},{consulta:"css"}];
// // declaracion de variables
// inputsearch = document.getElementById('input-search');
//  boton = document.getElementById('boton');
// resultado = document.getElementById('resultados');



// inputsearch.onkeyup = function filtrar(){
//     resultado.innerHTML = "";
//     valor = inputsearch.value.toLowerCase();
//     // filtrado de datos
//     for(let filtro of filtros){
//         let nombre = filtro.consulta.toLowerCase();
//         if(nombre.indexOf(valor) !== -1){
//             resultado.innerHTML += `
//             <a><li class="lista" style="cursor:pointer;">${nombre}</a>
//             `
//         }
//     }
//     if(resultado.innerHTML == ""){
//         resultado.innerHTML += `
//             <a><li>No encontrado...</a>`
//     }
// }



inputsearch = document.getElementById('input-search');
box_search = document.getElementById('resultados');

document.getElementById('input-search').addEventListener("keyup",buscador_interno);

function buscador_interno(){
    filter = inputsearch.value.toUpperCase();
    li = document.getElementsByClassName('li');
    // filtrando datos
    for (i = 0; i < li.length; i++){
        // alert(li.length);
        // etiqueta = document.getElementsByTagName('a');
        a = li[i].getElementsByTagName('a')[0];
        text = a.textContent || a.innerText;

        if(text.toUpperCase().indexOf(filter) != -1 ){
            li[i].style.display = "";
            box_search.style.display = "block";


            if (inputsearch.value == ""){
                box_search.style.display = "none";
            }
            
        }else{
            li[i].style.display = "none";
        }

    }
}
