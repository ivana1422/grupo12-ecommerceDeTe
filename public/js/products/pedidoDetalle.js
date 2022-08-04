window.addEventListener('load', () => {
    class Carrito {
        comprarProducto(e){
            e.preventDefault();
            if(e.target.classList.contains('tttttt')){
                const producto = e.target.parentElement.parentElement.parentElement;
                this.leerDatosProducto(producto)
                // console.log(producto)
            }
        }

        leerDatosProducto(producto){
            const infoProducto = {
                imagen: producto.querySelector('#imagencarrodetalle').src,
                titulo: producto.querySelector('#namedetallecarro').textContent,
                precio: producto.querySelector('#preciodetallecarro').textContent,
                id: producto.querySelector('.primerCaja').getAttribute('id'),
                cantidad: producto.querySelector('#cantidad').textContent
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
            listaProductos.appendChild(row)
            this.guardarProductosLocalStorage(producto)
            Swal.fire({
                backdrop: false,
                position: 'center-right',
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1000
            })
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
        }

        vaciarCarrito(e){
            e.preventDefault()
            while(listaProductos.firstChild){
                listaProductos.removeChild(listaProductos.firstChild);

            }
            this.vaciarLocalStorage();
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
                listaProductos.appendChild(row)
            })
        }

        leerLocalStorageEnLaPag(){
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
                        <input type="number" class="" min="1" value=${producto.cantidad}>
                    </td>
                    <td>${producto.precio * producto.cantidad}</td>
                    <td>
                        <a href=# class="borrar-producto fas fa-times-circle" id="${producto.id}"></a>
                    </td>
                `
                listaCompra.appendChild(row)
            })
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
    }


    const carro = new Carrito();
    const listaProductos = document.querySelector('#listaCarrito')
    // const carrito = document.querySelector('.carritouwu')
    const productos = document.getElementById('botoncarritodetalle')
    // const vaciarCarritoBtn = document.getElementById('vaciarCarro')
    // const procesarPedidoBtn = document.getElementById('irACarritoEntero')

    cargarEventos()
    function cargarEventos(){
        productos.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
    }
    
    
})




