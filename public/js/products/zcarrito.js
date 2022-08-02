

window.addEventListener('load', () => {
    let divContenedor = document.querySelector('.pf__products')
    let cards = divContenedor.getElementsByClassName("pf__products__card")
    let into = divContenedor.getElementsByClassName('pf__products__info_container')
    let button = divContenedor.getElementsByClassName('agregarB')


    console.log(divContenedor) 
    console.log(cards) 
    console.log(into)
    console.log(button)

   


    
})





// class Carrito {

//     //a;adir el producto al carrito

//     comprarProducto(e){
//         e.preventDefault()
//         if(e.target.classList.contains('agregarB')){
//             const producto = e.target.parentElement.parentElement;
//             this.leerDatosProducto(producto);
//             console.log(producto)
//         }
//     }




// }


