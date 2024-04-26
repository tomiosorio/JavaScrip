 const productos = [
    { id: 1, nombre: "JBL", precio: 1000, img:'img/jbl.jpeg' },
    { id: 2, nombre: "Samsung", precio: 700, img:'img/descarga.jpeg'},
    { id: 3, nombre: "Sony", precio: 520, img:'img/sony.jpeg'},
    { id: 4, nombre: "Noblex", precio: 374, img:'img/noblex.jpeg' },
    { id: 5, nombre: "LG", precio: 350,img:'img/lg.jpeg' },
 ];

 localStorage.setItem("carrito", JSON.stringify(productos));

 const carrito = [];
 let boton = document.getElementById("boton");
 let contenedor = document.getElementById("contenedor");

 //funcion para agregar el producto al carrito
 const agregar = (id) => {
   let productoEncontrado = productos.find((item) => item.id === id);
   carrito.push(productoEncontrado);
   console.log(carrito);
 };

 productos.forEach((item) => {
   let div = document.createElement("div");
   div.innerHTML = `
    <img src="${item.img}" />
    <h2 class="azul"> ${item.nombre}</h2>
    <p class="azul">$${item.precio}</p>
    <button id="boton${item.id}">Agregar</button>
    
   `;
   div.className = "verde"
   //boton personalizado con el id
   contenedor.append(div);

  let boton = document.getElementById(`boton${item.id}`); 
   boton.addEventListener("click", () => agregar(item.id)); 
 });

 boton.addEventListener("click", () => {
   carrito.forEach((item) => {
     let div = document.createElement("div");
     div.innerHTML = `
     <img src="${item.img}" />
     <h2 class="azul"> ${item.nombre}</h2>
     <p class="azul">$${item.precio}</p>
   `;
   div.className = "verde"
     document.body.append(div);
   });
   
});


//formulario

const arreglo = [];

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;


  if (inputs[0].value != "" && inputs[1].value != "") {
    arreglo.push({ nombre: inputs[1].value, edad: inputs[2].value });
    console.log(arreglo); 
    
  } 
  Swal.fire({
    title: "Bienvenido",
    text: "Usuario registrado",
    icon: "success"
  });
});

let listado = document.getElementById("listado");

 fetch("./data.json")
   .then((response) => response.json())
   .then((response) => {
     response.forEach((producto) => {
      const li = document.createElement("li");
       li.innerHTML = `
       <img  src="${producto.img}" />
        <p class="azul">Nombre: ${producto.nombre}</p>
         <b class="azul">$${producto.precio}</b>
       `;
       li.className = "prox"

       listado.append(li);
     });
   });