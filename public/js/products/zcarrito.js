window.addEventListener('load', () => {
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
                cantidad: 1
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
    const carrito = document.querySelector('.carritouwu')
    const productos = document.querySelectorAll(`.buttonProduct`)
    const vaciarCarritoBtn = document.getElementById('vaciarCarro')
    const procesarPedidoBtn = document.getElementById('irACarritoEntero')




    const producto1 = productos[0]
    const producto2 = productos[1]
    const producto3 = productos[2]
    const producto4 = productos[3]
    const producto5 = productos[4]
    const producto6 = productos[5]
    const producto7 = productos[6]
    const producto8 = productos[7]
    const producto9 = productos[8]
    const producto10 = productos[9]
    const producto11 = productos[10]
    const producto12 = productos[11]
    const producto13 = productos[12]
    const producto14 = productos[13]
    const producto15 = productos[14]
    const producto16 = productos[15]
    const producto17 = productos[16]
    const producto18 = productos[17]
    const producto19 = productos[18]
    
    console.log(carrito)

    cargarEventos()
    function cargarEventos(){
        producto1.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })

        carrito.addEventListener('click', (e) => {
            carro.eliminarProducto(e)
        })

        vaciarCarritoBtn.addEventListener('click', (e) => {
            carro.vaciarCarrito(e)
        })  

        producto2.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto3.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto4.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto5.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto6.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto7.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto8.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto9.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto10.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto11.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto12.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto13.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto14.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto15.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto16.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto17.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto18.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })
        producto19.addEventListener('click', (e) => {
            carro.comprarProducto(e)
        })

        document.addEventListener('DOMContentLoaded', carro.leerLocalStorage())

        procesarPedidoBtn.addEventListener('click', (e) => {carro.procesarPedido(e)})
    }
    
    
})




