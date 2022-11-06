class Auto {
    constructor(marca, modelo, años, precio, id) {
        this.marca = marca;
        this.modelo = modelo;
        this.años = años
        this.precio = precio;
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }
}

const autos = [
    new Auto("Ford", "Fiesta", 2013, 2500000, 1),
    new Auto("Chevrolet", "Onix", 2015, 2850000, 2),
    new Auto("Peugeot", "208", 2014, 2700000, 3),
    new Auto("Renault", "Clio", 2016, 2189900, 4),
    new Auto("Volkswagen", "Gol", 2013, 1900000, 5),

]

console.log(autos);

let continuar = true;
while (continuar) {
    let ingreso = prompt("Queres Vender tu auto? Ingresa los datos de tu vehiculos: Marca, modelo, año y el precio. separados por una barra de diagonal (/). Ingresa X para finalizar ");

    if (ingreso.toUpperCase() == "X") {
        continuar = false;
        break;
    }

    const datos = ingreso.split("/");
    console.log(datos);

    const auto = new Auto(datos[0], datos[1], datos[2], datos[3], datos[4],);

    autos.push(auto);
    auto.asignarId(autos);
    console.log(autos);

}

let criterios = prompt("Eligi el criterio deseado:\n1 - Marcas (A -Z)\n2 - Modelos (Z-A)\n3 - Precios de mas caro a mas barato \n4 - fecha de publicacion(Mas viejas a mas nuevo)");

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);

    switch (criterio) {
        case "1":
            let nombreAsecendente = arrayOrdenado.sort((a, b) => a.marca.localeCompare(b.marca))
            return nombreAsecendente;
            break;
        case "2":
            return arrayOrdenado.sort((a, b) => b.marca.localeCompare(a.marca));
            break;
        case "3":
            return arrayOrdenado.sort((a, b) => b.precio - a.precio);
            break;
        case "4":
            return arrayOrdenado.sort((a, b) => a.años - b.años);
            break;

        default:
            alert("No es un criterio valido");
            break;
    }
}

function CrearStringResultado(array){
    let info ="";

    array.forEach(elemento => {
        info += "Marca:" + elemento.marca + "\nAño:" + elemento.años + "\nPrecio:" + elemento.precio + "pesos.\n\n"
    });

    return info;
}
alert(CrearStringResultado(ordenar(criterios,autos)))