class Carrito {
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('buttonProduct')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto)
        }
    }

    leerDatosProducto(producto){
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h4').textContent,
            precio: producto.querySelector('.actual').textContent,
            id: producto.querySelector('button').getAttribute('id'),
            cantidad: producto.querySelector('#cantidadoculta').getAttribute('value')
        }

        let productosLS;
        productosLS = this.obtenerProductosLocalStorage()
        productosLS.forEach(function(productoLS){
            if(productoLS.id === infoProducto.id){
                productosLS = productoLS.id
            }
        })
        if(productosLS === infoProducto.id){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'El producto ya existe en el carrito',
                timer: 1500,
                showConfirmButton: false
              })
        }else{
            this.insertarCarrito(infoProducto)
        }

       
    }

    insertarCarrito(producto){
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href=# class="borrar-producto fas fa-times-circle" id="${producto.id}"></a>
            </td>
        `
        listaCompra.appendChild(row)
        this.guardarProductosLocalStorage(producto)
    } 

    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement
            productoID = producto.querySelector('a').getAttribute('id')
        }

        this.eliminarProductoLocalStorage(productoID);
        this.calcularTotal()
    }

    vaciarCarrito(e){
        e.preventDefault()
        while(listaCompra.firstChild){
            listaCompra.removeChild(listaCompra.firstChild);

        }
        this.vaciarLocalStorage();
        let section = document.getElementById('carrito')
            section.style.display = 'none'
            let botones = document.getElementById('botonesCRT')
            botones.style.display = 'none'
            let divpagar = document.getElementById('PAGARcarritot')
            divpagar.style.display='none'
            
            const rowClean = document.createElement('div')
            rowClean.innerHTML = `
                <p class="mensajevaciocarrito">El carrito esta vacio! Agregue productos para llenarlo</p>
                <a href="/" class="botondelcarritoA">Ir a comprar</a>
            `
            // rowClean.classList.add('mensajevaciocarrito')
            listaCompra.appendChild(rowClean)
        return false;
    }

    guardarProductosLocalStorage(producto){
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto)
        localStorage.setItem('productos', JSON.stringify(productos))

    }

    obtenerProductosLocalStorage(){
        let productoLS;
        if(localStorage.getItem('productos') === null){
            productoLS = [];
        }else{
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    eliminarProductoLocalStorage(productoID){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage()
        productosLS.forEach(function(productoLS, index){
            if(productoLS.id == productoID){
                productosLS.splice(index, 1);
            }
        })

        localStorage.setItem('productos', JSON.stringify(productosLS))
    }

    leerLocalStorage(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage()
        productosLS.forEach(function(producto){
            const row = document.createElement('tr')
            row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <a href=# class="borrar-producto fas fa-times-circle" id="${producto.id}"></a>
                </td>
            `
            listaCompra.appendChild(row)
        })
    }

    leerLocalStorageEnLaPag(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage()
        console.log(productosLS)
        if(productosLS.length != 0){
            productosLS.forEach(function(producto){
                const row = document.createElement('div')
                row.innerHTML = `
                    <div class="divClassCarrito">
                        <img src="${producto.imagen}" width=100>
                    </div>
                    <div class="divClassCarrito">${producto.titulo}</div>
                    <div class="divClassCarrito">${producto.precio}</div>
                    <div class="divClassCarrito">
                        <input type="number" class="inputPLS" min="1" max="6" id="cantidadoculta" value=${producto.cantidad}>
                    </div>
                    <div class="divClassCarrito">
                        <a href=# class="borrar-producto fas fa-times-circle" style="font-size: 30px" id="${producto.id}"></a>
                    </div>
                `
                row.classList.add('divPrincipalCarrito')
                listaCompra.appendChild(row)
            })
        }else{
            let section = document.getElementById('carrito')
            section.style.display = 'none'
            let botones = document.getElementById('botonesCRT')
            botones.style.display = 'none'
            let divpagar = document.getElementById('PAGARcarritot')
            divpagar.style.display='none'
            
            const rowClean = document.createElement('div')
            rowClean.innerHTML = `
                <p class="mensajevaciocarrito">El carrito esta vacio! Agregue productos para llenarlo</p>
                <a href="http://localhost:3030/" class="botondelcarritoA">Ir a comprar</a>
            
            `
            // rowClean.classList.add('mensajevaciocarrito')
            listaCompra.appendChild(rowClean)
        }
        
    }

    vaciarLocalStorage(){
        localStorage.clear()
    }

    procesarPedido(e){
        e.preventDefault()
        if(this.obtenerProductosLocalStorage().length === 0){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Carrito vacio, agregue productos',
                timer: 1500,
                showConfirmButton: false
              })
        }else{
            location.href = "/carrito"
        }
        
    }

    continuarComprando(e){
        e.preventDefault()
        location.href = "/"
    }

    calcularTotal(){
        let productoLS;
        let total = 0;
        productoLS = this.obtenerProductosLocalStorage()
        for(let i = 0; i < productoLS.length; i++){
            let precio1 = +productoLS[i].precio.replace('$','')
            let cantidad1 = Number(productoLS[i].cantidad)
            let element = precio1 * cantidad1
            total = total + element
        }
        document.getElementById('total').innerHTML = "$ " + total.toFixed(2) 
    }
}

const compra = new Carrito();
const listaCompra = document.getElementById('listaCarrito')
const vaciarCarritoBtn = document.getElementById('vaciarCarro')
const carrito = document.querySelector('.carritouwu')
const continuarComprando = document.getElementById('continuarCarrito')
const realizarCompra = document.getElementById('irAPagar')


cargarEventos()

 function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageEnLaPag());
    
    carrito.addEventListener('click', (e) => {
        compra.eliminarProducto(e)
    })

    vaciarCarritoBtn.addEventListener('click', (e) => {
        compra.vaciarCarrito(e)
    })

    continuarComprando.addEventListener('click', (e) => {
        compra.continuarComprando(e)
    })

    compra.calcularTotal()

    realizarCompra.addEventListener('click', procesarCompra)
 }

 function procesarCompra(e){
    e.preventDefault()

    if(compra.obtenerProductosLocalStorage().length === 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay productos, seleccione alguno',
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location = "/"
        })
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Perfecto!',
            text: 'Compra realizada con exito',
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location = "/"
        })
    }
 }