class Persona {

    constructor(nombre, edad, genero,) {

        this.nombre = nombre;

        this.edad = edad;

        this.genero = genero;

    }

    obtDetalles() {

        console.log(`Me llamo ${this.nombre} tengo ${this.edad} años y soy ${this.genero}.`);

    }

}

let miPersona = new Persona("Sergio", "31", "Hombre");

miPersona.obtDetalles();



class Estudiante extends Persona {

    constructor(nombre, edad, genero, curso, grupo) {

        super(nombre, edad, genero)

        this.curso = curso;

        this.grupo = grupo;

    }
    registrar() {

        console.log(`Me llamo ${this.nombre} tengo ${this.edad} años y soy ${this.genero}. Estudio ${this.curso} en ${this.grupo}.`)}

};

let miEstudiante = new Estudiante("Sergio", "31", "Hombre", "Full Stack", "el mejor grupo");

miEstudiante.registrar();


class Profesor extends Estudiante {

    constructor(nombre, edad, genero, curso, grupo, asignatura, nivel) {

        super(nombre, edad, genero, curso, grupo)

        this.asignatura = asignatura;

        this.nivel = nivel;

    }
    asignar() {

        console.log(`Me llamo ${this.nombre} tengo ${this.edad} años y soy ${this.genero}. Estudio ${this.curso} en ${this.grupo} y mi asignatura favorita es ${this.asignatura} nivel ${this.nivel}.`)}

};

let miProfesor = new Profesor("Sergio", "31", "Hombre", "Full Stack", "el mejor grupo", "Javascript", "Avanzado");

miProfesor.asignar();

