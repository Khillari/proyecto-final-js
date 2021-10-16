                                    //DESCRIPCIÓN CARDS 

            //GATI
$("#titulo-gati").click(() => { 
    $("#descripcion-gati").toggle("fast");
    $("#precio-gati").toggle("fast");
});

$("#titulo-gati").css({
    "text-decoration": "none",
    "color": "black"
});

            //RAZA
$("#titulo-raza").click(() => { 
    $("#descripcion-raza").toggle("fast");
    $("#precio-raza").toggle("fast");
});

$("#titulo-raza").css({
    "text-decoration": "none",
    "color": "black"
});

            //WHISKAS
$("#titulo-whiskas").click(() => { 
    $("#descripcion-whiskas").toggle("fast");
    $("#precio-whiskas").toggle("fast");
});

$("#titulo-whiskas").css({
    "text-decoration": "none",
    "color": "black"
});

            //EXCELLENT
$("#titulo-excellent").click(() => { 
    $("#descripcion-excellent").toggle("fast");
    $("#precio-excellent").toggle("fast");
});

$("#titulo-excellent").css({
    "text-decoration": "none",
    "color": "black"
});



                                    //CALCULANDO PRECIOS Y EVENTOS

const productos = [{id:0, producto: "Alimento Gati", precio:295, stock:20, comprado:0},
                {id:1, producto: "Alimento Raza", precio:1750, stock:20, comprado:0},
                {id:2, producto: "Alimento Whiskas", precio:2820, stock:20, comprado:0},
                {id:3, producto: "Alimento Excellent", precio:670, stock:20, comprado:0}];

let total = 0; 

function añadirAlCarrito(id){
    if(productos[id].stock > 0){
        total += productos[id].precio;
        productos[id].stock -= 1;
        productos[id].comprado +=1;
        $('#listaCompras').prepend(`<li class="productoLista">${productos[id].producto}, el precio es de: $${productos[id].precio}</li>`);
    }else{
        alert(`Lo sentimos, ya no hay stock de este producto.`);
    }
}

function totalCarrito(){
    let gatiTotal = productos[0].precio * productos[0].comprado;
    let razaTotal = productos[1].precio * productos[1].comprado;
    let whiskasTotal = productos[2].precio * productos[2].comprado;
    let excellentTotal = productos[3].precio * productos[3].comprado;
    let finalTotal = gatiTotal + razaTotal + whiskasTotal + excellentTotal;
    return finalTotal
}

let noSpam = 0;

$("#btn-calcular").click(function (){
    if (noSpam == 0) {
    $('#listaCompras').append(`<h3 class="total">Total: $${totalCarrito()}</h3>`);
    noSpam += 1;}
});

$("#btn-gati").click(function () {
    alert("Alimento Gati añadido a la lista.");
    añadirAlCarrito(0);
});

$("#btn-raza").click(function () {
    alert("Alimento Raza añadido a la lista.");
    añadirAlCarrito(1);
});

$("#btn-whiskas").click(function () {
    alert("Alimento Whiskas añadido a la lista.");
    añadirAlCarrito(2);
});

$("#btn-excellent").click(function () {
    alert("Alimento Excellent añadido a la lista.");
    añadirAlCarrito(3);
});



                                    //API JSON

const URLGET = "./assets/js/proximosingresos.json";

$("#btn-ver").click(() => { 

    $.getJSON(URLGET, function(respuesta, estado){
        console.log("hola")
        if(estado === "success"){
            let ingresos = respuesta;
            for(const ingreso of ingresos){
                $("#listaProx").append (`<h3 class="listaProximosIngresos">${ingreso.nombre}, el precio será de ${ingreso.precioProducto}.</h3>`);
            }
        }
    })
})



