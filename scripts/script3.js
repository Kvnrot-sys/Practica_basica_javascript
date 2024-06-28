

document.addEventListener('DOMContentLoaded', function () {

    window.cambiarColorDelTexto = cambiarColorDelTexto

    window.cambiarFondoDeColor = cambiarFondoDeColor



    let parrafo = document.querySelector('#parrafo')

    let articulo  = document.querySelector('#articulo')




    let alineacionTexto = document.querySelector('#alineacion')





    let textoIntroducir  = document.querySelector('#ingresar_texto')





    
    textoIntroducir.addEventListener('input',function(){

        parrafo.innerHTML = textoIntroducir.value



    })



    alineacionTexto.addEventListener('change',function(){

        let alineacionElegida = alineacionTexto.value

        if(alineacionElegida == 'izquierda'){
            parrafo.style.textAlign = 'left'
        }
        if(alineacionElegida == 'centrado'){
            parrafo.style.textAlign = 'center'
        }
        if(alineacionElegida == 'derecha'){
            parrafo.style.textAlign = 'right'
        }



    })


    function cambiarColorDelTexto(color) {


        if (color.checked) {
            if (color.value  == 'celeste'){
                parrafo.style.color = 'cyan'

            }
            if (color.value  == 'violeta'){
                parrafo.style.color = 'violet'

            }
            if (color.value  == 'purpura'){
                parrafo.style.color = 'purple'

            }
            if (color.value  == 'marron'){
                parrafo.style.color = 'brown'

            }
        }
    }



    function cambiarFondoDeColor(boton){
        if(boton.value == 'azul'){
            articulo.style.background = 'blue'
        }
        if(boton.value == 'rojo'){
            articulo.style.background = 'red'
        }
        if(boton.value == 'verde'){
            articulo.style.background = 'green'
        }
        if(boton.value == 'rosa'){
            articulo.style.background = 'pink'
        }
    }











})