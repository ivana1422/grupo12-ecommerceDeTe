window.addEventListener('load',async ()=>{
    let containerCategory = document.querySelector('.containerCategory')
    let containerProducts = document.querySelector('.pf__products')
    let inputSearch = document.querySelector('#search__product')
    

    let response = await fetch(`${location.origin}/api/productos`)
    let data = await response.json()
    // console.log(data)

    //Tarjetas de categorias
    data.categories.forEach(category=>{
        containerCategory.innerHTML += `<a class="cardCategory cardCategory${category.id}" href="/productos/${category.id}">
                                                <h3 class="cardCategory_name">${category.name}</h3>
                                            </a>`
        
    })

    const cardCategoryAll = document.querySelector('.cardCategoryAll')
    const cardCategory1 = document.querySelector('.cardCategory1')
    const cardCategory2 = document.querySelector('.cardCategory2')
    const cardCategory3 = document.querySelector('.cardCategory3')
    const cardCategory4 = document.querySelector('.cardCategory4')

    //Funcion reutilizable para filtrar por categorias
    const FilterProducts = (card,num) =>{
        let productosFiltrados = []
        card.addEventListener('click',(e)=>{
            e.preventDefault();
            productosFiltrados = data.products.filter(product=>product.categories.id===num)
            
            containerProducts.innerHTML = null
            productosFiltrados.forEach(product=>{

                containerProducts.innerHTML += CardProduct(product.images[0].src,product.name,product.price,product.coment,product.id)
            })
        })
    }

    //Trae todos los productos cuando selecciona la tarjeta "todos"
    cardCategoryAll.addEventListener('click',(e)=>{
        e.preventDefault();
        containerProducts.innerHTML = null
        data.products.forEach(product=>{

            containerProducts.innerHTML += CardProduct(product.images[0].src,product.name,product.price,product.coment,product.id)
        })
    })

    //Se ejecuta la funcion para cada categoria
    
    FilterProducts(cardCategory1,1)
    FilterProducts(cardCategory2,2)
    FilterProducts(cardCategory3,3)
    FilterProducts(cardCategory4,4)

    //Seccion de productos

    //Tarjeta de productos guardada en funcion para ser reutilizada
    let CardProduct = (image,name,price,coment,id) =>{
        return (
            `<div class="pf__products__card">
                <img src="${image}" alt="${name}" class="pf__products__image">
                <div class="pf__products__info_container">
                    <h3 class="pf__products__title">${name}</h3>
                    <p class="pf__products__price">Precio: $${price}</p>
                    <p class="pf__products__coment">${coment}</p>
                    <div class="pf__products__links">
                        <button class="buttonProduct_responsive"><i class="fa-solid fa-cart-shopping styleFont"></i></button>
                        <button class="shareProduct" href="" onclick="navigator.share({url:'/productos/${id}',text:'Hey! Mira este producto!'})"><i class="fa-solid fa-share-nodes styleFont"></i></button>
                    <a href="/productos/${id}" class="buttonProduct">Detalle</a>
                    <a href="/productos/${id}" class="buttonProduct_responsive"><i class="fa-solid fa-circle-info styleFont"></i></a>
                </div>
                </div>
            </div>`
        )
    }

    //aca
    
    //Ingresa todos los productos una vez que carga la pagina
    data.products.forEach(product=> {
        containerProducts.innerHTML += CardProduct(product.images[0].src,product.name,product.price,product.coment,product.id)
    })

    //aca
    


    //Buscador live search
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    inputSearch.addEventListener('keyup',(e)=>{
        let search = e.target.value
        let results = data.products.filter(product=>{
                return removeAccents(product.name.toLowerCase()).includes(removeAccents(search.toLowerCase()))
        })
        containerProducts.innerHTML = null
        if(results.length > 0){
            
            results.forEach(product=> {
                containerProducts.innerHTML += CardProduct(product.images[0].src,product.name,product.price,product.coment,product.id)
            })
        } else {
            containerProducts.innerHTML = 'No existen resultados'
        }
    })

    //Ordenar elementos por precio
    let priceSelect = document.getElementById('price__filter')

    priceSelect.addEventListener('change',(e)=>{
        if(e && e.target.value == 'menor'){
            containerProducts.innerHTML = null
            let mayor = data.products.sort(function (a, b) {
                if (a.price > b.price) {
                  return 1;
                }
                if (a.price < b.price) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
            mayor.map(product=> {
                return containerProducts.innerHTML += CardProduct(product.images[0].src,product.name,product.price,product.coment,product.id)
            })

        } else if(e && e.target.value == 'mayor'){
            containerProducts.innerHTML = null
            let menor = data.products.sort(function (a, b) {
                if (a.price < b.price) {
                  return 1;
                }
                if (a.price > b.price) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
            menor.map(product=> {
                return containerProducts.innerHTML += CardProduct(product.images[0].src,product.name,product.price,product.coment,product.id)
            })
        }
    })


})