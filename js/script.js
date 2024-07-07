let productos = []

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                productos = data
                principal(productos)
            })
function principal(productos){
    console.log(productos)
    renderizarProductos(productos)
            
}

function renderizarProductos(productos){

    let contenedorProductos = document.querySelector("#productos")

    productos.forEach(producto => {
        let tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta-producto"
        tarjeta.innerHTML = `
            <img src = ${producto.image} >
            <h3>${producto.title}</h3>
            <div>
                <strong>US$ ${producto.price}</strong>
                <strong>${producto.rating.rate}<i class="bi bi-star"></i></strong>
            </div>
            <button id="${producto.id}">AGREGAR AL CARRITO</button>
        `
        contenedorProductos.appendChild(tarjeta)

        let botonAgregar = document.getElementById(producto.id)

        botonAgregar.addEventListener("click", () => {
            console.log(producto.id)
        })
        
    });

}
