'use strict';

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito")

  // Array de objetos que representan los productos
 const productos = [
    {
      filtro: 'jordan',
      imagen: 'img/Jordan1.jpg',
      nombre: "Air Jordan 1 Retro High OG",
      descripcion: 'Presenta un estilo desteñido en los paneles de gamuza de alta calidad, con pieles Light Smoke Grey que adornan los cuellos y los cuadros.',
      precio: 300,
      marca: 'Air Jordan',
      id: 1,
      cantidad: 1,
    },
    {
      categoria: 'jordan',
      imagen: 'img/Jordan11.jpg',
      nombre: "Air Jordan 11 Retro",
      descripcion: 'Desde su debut en 2001, el Air Jordan 11 Cool Grey se ha convertido en una de las combinaciones de colores más famosas del catálogo de Jordan 11.',
      precio: 350,
      marca: 'Air Jordan',
      id: 2,
      cantidad: 1,
    },
    {
      categoria: 'adidas',
      imagen: 'img/Yeezy380.jpg',
      nombre: "Adidas Yeezy Boost 380",
      descripcion: 'Con un patrón camuflaje en tonos tostados y oliva, la parte superior de la zapatilla Primeknit un reflectante 3M cuando se expone al flash.',
      precio: 360,
      marca: 'Adidas Yeezy',
      id: 3,
      cantidad: 1,
    },
    {
      categoria: 'jordan',
      imagen: 'img/Jordan4.jpg',
      nombre: "Air Jordan 4 Retro",
      descripcion: 'Esta renovación presenta un estilo completamente negro sigiloso. Los detalles ojales característicos en las alas y el logotipo de Jumpman en Light Graphite.',
      precio: 800,
      marca: 'Air Jordan',
      id: 4,
      cantidad: 1,
    },
    {
      categoria: 'nike',
      imagen: 'img/Nike720.jpg',
      nombre: "Nike Air Max 720",
      descripcion: 'Es un calzado de rendimiento con un diseño simple pero elegante, esta zapatilla es perfecta para deportistas que buscan estilo y comodidad en su calzado.',
      precio: 250,
      marca: 'Nike Air Max',
      id: 5,
      cantidad: 1,
    },
    {
      categoria: 'adidas',
      imagen: 'img/Yeezy700.jpg',
      nombre: "Adidas Yeezy 700 V3",
      descripcion: 'Es una de las creaciones más esperadas de Kanye West, la V3 Alvah. Este es para ti si eres fan de las zapatillas futuristas y de tonos oscuros.',
      precio: 400,
      marca: 'Adidas Yeezy',
      id: 6,
      cantidad: 1,
    },
  ];  

// Array de productos en el carrito
let carrito = [];

//--------------------- Card de los productos ---------------------------------

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = 'card';
  content.innerHTML = `
    <img src="${product.imagen}">
    <h3>${product.nombre}</h3>
    <h4>$${product.precio}</h4>
  `;

  // boton "Mas Info" para cada card

  let masInfo = document.createElement("button");
  masInfo.innerText = "Más Info";
  masInfo.className = "masInfo";

  
  // Evento click al boton "Mas Info"

  masInfo.addEventListener("click", () => {
    abrirVentanaModal(product);
  });

  content.append(masInfo);

  shopContent.append(content);

// Función para abrir la ventana modal con la información detallada del producto

  function abrirVentanaModal(producto) {

// elementos HTML para la ventana modal
    
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";
  
    const modalContent = document.createElement("div");
    modalContent.className = "modal-contentVentana";
  
    const modalImg = document.createElement("img");
    modalImg.src = producto.imagen;
  
    const modalTitle = document.createElement("h3");
    modalTitle.innerText = producto.nombre;
  
    const modalDescription = document.createElement("p");
    modalDescription.innerText = producto.descripcion;
  
    const modalPrice = document.createElement("p");
    modalPrice.innerText = `Precio: $${producto.precio}`;
  
    const modalAgregar = document.createElement("button");
    modalAgregar.innerText = "Comprar";
    modalAgregar.className = "agregar-modal";

// Logica para agregar el producto al carrito
    
      modalAgregar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id);
      
        if (repeat) {
          carrito.map((prod) => {
            if (prod.id === producto.id) {
              prod.cantidad++;
            }
          });
        } else {
          carrito.push({
            id: producto.id,
            imagen: producto.imagen,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1,
          });
        }
        carritoCounter();

// Mostramos la notificacion una vez agregado el producto al carrito

  const notificacion = document.getElementById("aviso");
  notificacion.innerText = "¡Este producto fue agregado exitosamente al carrito!";
  notificacion.style.display = "block";

// Ocultar la notificación despues de 3 segundos

  setTimeout(() => {
    notificacion.style.display = "none";
  }, 3000);

});      

// Boton para cerrar la ventana modal
  
    const modalCerrar = document.createElement("button");
    modalCerrar.innerText = "Cerrar";
    modalCerrar.className = "cerrar-modal";
  
    modalCerrar.addEventListener("click", () => {
      modalOverlay.remove();
    });

// Agregar elementos a la ventana modal
  
    modalContent.appendChild(modalImg);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalDescription);
    modalContent.appendChild(modalPrice);
    modalContent.appendChild(modalAgregar);
    modalContent.appendChild(modalCerrar);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
  }


  //  Boton "Agregar" producto al carrito

  let agregar = document.createElement("button");
  agregar.innerText = "agregar";
  agregar.className = 'agregar';

  content.append(agregar);

  agregar.addEventListener("click", () => {

// Logica para agregar el producto al carrito

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        imagen: product.imagen,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
    }
    carritoCounter ();

// Mostrar notificación

  const notificacion = document.getElementById("aviso");
  notificacion.innerText = "¡Este producto fue agregado exitosamente al carrito!";
  notificacion.style.display = "block";

// Ocultar la notificación despues de 3 segundos

  setTimeout(() => {
    notificacion.style.display = "none";
  }, 3000);

  });
});

// Ventana modal del carrito 

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (indice) => {
  carrito.splice(indice, 1);
  pintarCarrito();
};

function pintarCarrito() {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <p class="modal-header-title">Carrito</p>
  `;

  // Boton para salir de la ventana modal del carrito

  const modalButton = document.createElement("p");
  modalButton.innerText = "X";
  modalButton.className = "modal-header-button";
  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.appendChild(modalButton);
  modalContainer.appendChild(modalHeader);

  carrito.forEach((product, index) => {
    const carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
      <img src="${product.imagen}">
      <h3>${product.nombre}</h3>
      <p>$${product.precio}</p>
      <p>Cantidad: ${product.cantidad}</p>
      <p>Total: $${product.cantidad * product.precio}</p>
    `;

// Boton para quitar productos del carrito

    const eliminar = document.createElement("span");
    eliminar.innerText = "X";
    eliminar.className = "delete-product";
    eliminar.addEventListener("click", () => eliminarProducto(index));

    carritoContent.appendChild(eliminar);
    modalContainer.appendChild(carritoContent);
  });

  // Suma del total de todos los productos sumados al carrito

  const total = carrito.reduce((acumulador, el) => acumulador + el.precio * el.cantidad, 0);

  const totalFooter = document.createElement("div");
  totalFooter.className = "total-content";
  totalFooter.innerHTML = `Total a pagar: <span class="precio-color">$${total}</span>`;

  modalContainer.appendChild(totalFooter);
  carritoCounter ();
}

// Contador visible de los items agregados al carrito

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";
  cantidadCarrito.innerText = carrito.length;
}



  
  