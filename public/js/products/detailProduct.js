
window.addEventListener('load',async ()=>{
    /*Contador para carrito*/
    const btnLeft = document.querySelector('.box__button__left');
    const btnRight = document.querySelector('.box__button__right');
    const cant = document.querySelector('.description__cant')
    
    btnLeft.addEventListener('click',()=>{
        if(!(+cant.innerHTML === 0)){

            cant.innerHTML = +cant.innerHTML - 1
        }
    })

    btnRight.addEventListener('click',()=>{
        cant.innerHTML = +cant.innerHTML + 1
    })

    /*traer productos por categoria*/
    const containerProducts= document.querySelector('.description__similar')

    
    

    const addProducts = (productos) => {
        productos.forEach(producto=>{
            containerProducts.innerHTML += 
            `
            <a href="/productos/${producto.id}" class="description__similar__link">
                    <img src="${producto.images[0].src}" alt="${producto.name}" title="${producto.name}" class="description__similar__img">
            </a>
            `
        })
    }

    let response = await fetch(`${location.origin}/api/productos`)
    let data = await response.json()

    
    let idProducto = +location.pathname.split('/')[2]
    let productoBuscado = data.products.find(producto=>producto.id === idProducto)
    let productosFiltrados = data.products.filter(producto=>producto.category_id === productoBuscado.category_id)

    addProducts(productosFiltrados)
})