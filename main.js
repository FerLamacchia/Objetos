class Productos {
    constructor(nombre, precio, cantidad) {

        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    vender() {

        if (this.cantidad >= 1) {
            this.cantidad = this.cantidad - 1

        };

    }

}

const producto1 = new Productos("papa", "80", "5");
const producto2 = new Productos("cebolla", "70", "3");
const producto3 = new Productos("tomate", "100", "2");
const producto4 = new Productos("zanahoria", "30", "0");

producto1.vender()
console.log(producto1)
producto2.vender()
console.log(producto2)
producto3.vender()
console.log(producto3)
producto4.vender()
console.log(producto4)
