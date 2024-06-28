
document.addEventListener('DOMContentLoaded',function(){



    let universidad = document.querySelector('#universidad')
    let direccion = document.querySelector('#direccion')

    let info = document.querySelector('#info')

    let web = document.querySelector('#web')


    let articulo = document.querySelector('#articulo')


let texto_ingresado = document.querySelector('#texto_ingresado')




texto_ingresado.addEventListener('input', function(){

    universidad.innerHTML = texto_ingresado.value
    


})




    window.clickColor = clickColor




    function clickColor(color){


        if(color.value == 'azul'){
            articulo.style.background = 'blue'
            direccion.style.color = 'white'
            info.style.color = 'white'
            web.style.color = 'white'

        }
        if(color.value == 'verde'){
            articulo.style.background = 'green'
            direccion.style.color = 'white'
            info.style.color = 'white'
            web.style.color = 'white'

        }
        if(color.value == 'amarillo'){
            articulo.style.background = 'yellow'
            direccion.style.color = 'white'
            info.style.color = 'white'
            web.style.color = 'white'

        }
        if(color.value == 'reestablecer'){
            articulo.style.background = 'white'
            direccion.style.color = 'black'
            info.style.color = 'black'
            web.style.color = 'black'

        }
        
    }







})