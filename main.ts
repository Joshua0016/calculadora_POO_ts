//Herencia polimorfismo abstracción y encapsulación

abstract class Vehiculo {//las clases abstractas contienen los metodos que usaran las clases derivadas
    private velocidad : number;

    constructor (velocidad: number){
        this.velocidad = velocidad;
    }

    public getVelocidad():number {
        return this.velocidad;

    }

    public setVelocidad (velocidad :number): void{
        this.velocidad = velocidad;
    }

    public abstract mover(): void;//Método abstracto que deben usar todas las sub-clases (todos los vehículos se mueven)
}

class Coche extends Vehiculo {

    constructor(velocidad:number){
        super(velocidad);//super, es una palabra reservada para heredar el constructor de la superclase
    }
    public mover(): void {//Método heredado de la superclase
        console.log(`Este coche se mueve a una velocidad de ${this.getVelocidad()} K/H`);
    }

}

class Bicicleta extends Vehiculo {

    constructor(velocidad:number){
        super(velocidad);
    }

    public mover(): void {//Método heredado de la superclase
        console.log(`Esta Vicicleta se mueve a una velocidad de ${this.getVelocidad()} k/h`);
    }
}

//Polimorfismo, una función que me permite instanciar cualquier clase derivada de vehiculo
function iniciarMovimiento(Vehiculo :Vehiculo):void{
    Vehiculo.mover();
}

const miCoche = new Coche(180);
const miBicicleta = new Bicicleta(30);

iniciarMovimiento(miBicicleta);
iniciarMovimiento(miCoche);