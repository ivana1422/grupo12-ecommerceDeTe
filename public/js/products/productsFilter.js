let container = document.querySelector(".container-products")
let selectCategories = document.getElementById("categories__filter")
let selectPrice = document.getElementById('price__filter')
let searchProduct = document.getElementById('search__product')

URL_API = "http://localhost:5000/api/productos/"

fetch(`${URL_API}`)
    .then(result=>result.json())
    .then(data=>{
        let productos = data.products
        console.log(productos)
        
        productos.forEach(producto => {
            container.innerHTML +=`<div class="item-products">
            <a href="/productos/${producto.id}">
            <img src="${producto.images[0].src}" alt="${producto.name}" class="img-products">
                                        <div>
                                            <h4>${producto.name}</h4>
                                            <p class="offer">$${(producto.price - (producto.price * (producto.discount / 100)))}</p>
                                            <p class="actual">$${producto.price}</p>
                                            </div>
                                            </a>
                                            </div>`
                                        });
                                        
                                        let categorias = data.categories
        categorias.forEach(categoria => {
            selectCategories.innerHTML += `<option value="${categoria.id}" id="categoria${categoria.id}">${categoria.name}</option>`
        })

        selectCategories.addEventListener("click",(e)=>{
            e.preventDefault()
            let productoPorCategoria = []
            
            productos.forEach(producto=>{
                producto.categories.forEach(category=>{
                    if(category.id == +e.target.value){
                        productoPorCategoria.push(producto)
                    }
                })
            })
            container.innerHTML = 'cargando...'
            container.innerHTML = ''
            productoPorCategoria.forEach(producto => {
                container.innerHTML +=`<div class="item-products">
                <a href="/productos/${producto.id}">
                <img src="${producto.images[0].src}" alt="${producto.name}" class="img-products">
                                            <div>
                                                <h4>${producto.name}</h4>
                                                <p class="offer">$${(producto.price - (producto.price * (producto.discount / 100)))}</p>
                                                <p class="actual">$${producto.price}</p>
                                                </div>
                                                </a>
                                                </div>`
                                            });
        })

        selectPrice.addEventListener("click",(e)=>{
            e.preventDefault()
            if(e.target.value == 'mayor'){
                productos.sort(function (a, b) {
                    if (a.price < b.price) {
                      return 1;
                    }
                    if (a.price > b.price) {
                      return -1;
                    }
                    // a must be equal to b
                    return 0;
                  });
                  container.innerHTML = ''
                  productos.forEach(producto => {
                    container.innerHTML +=`<div class="item-products">
                    <a href="/productos/${producto.id}">
                    <img src="${producto.images[0].src}" alt="${producto.name}" class="img-products">
                                                <div>
                                                    <h4>${producto.name}</h4>
                                                    <p class="offer">$${(producto.price - (producto.price * (producto.discount / 100)))}</p>
                                                    <p class="actual">$${producto.price}</p>
                                                    </div>
                                                    </a>
                                                    </div>`
                                                });
            } else if(e.target.value == 'menor'){
                productos.sort(function (a, b) {
                    if (a.price > b.price) {
                      return 1;
                    }
                    if (a.price < b.price) {
                      return -1;
                    }
                    return 0;
                  });
                  container.innerHTML = ''
                  productos.forEach(producto => {
                    container.innerHTML +=`<div class="item-products">
                    <a href="/productos/${producto.id}">
                    <img src="${producto.images[0].src}" alt="${producto.name}" class="img-products">
                                                <div>
                                                    <h4>${producto.name}</h4>
                                                    <p class="offer">$${(producto.price - (producto.price * (producto.discount / 100)))}</p>
                                                    <p class="actual">$${producto.price}</p>
                                                    </div>
                                                    </a>
                                                    </div>`
                                                });
            }
        })
        searchProduct.addEventListener("keyup",(e)=>{
            container.innerHTML=''
            productos.forEach(producto=>{
                if(producto.name.toLowerCase().includes(e.target.value.toLowerCase())){
                    container.innerHTML += //html
                        `<div class="item-products">
                                <a href="/productos/${producto.id}">
                                    <img src="/img/products/${producto.images[0].src}" alt="${producto.name}" class="img-products">
                                    <div>
                                        <h4>${producto.name}</h4>
                                        <p class="offer">$${(producto.price - (producto.price * (producto.discount / 100)))}</p>
                                        <p class="actual">$${producto.price}</p>
                                    </div>
                                </a>
                            </div>`
                } 
            })
        })


        })


