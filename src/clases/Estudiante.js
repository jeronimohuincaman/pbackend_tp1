import { Persona } from "./Persona";

export class Estudiante extends Persona {
    static contador_numero_legajo = 1;
    constructor(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, carrera, curso_matriculado, clases) {
        super(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil);
        this.numero_legajo = Estudiante.contador_numero_legajo;
        Estudiante.contador_numero_legajo++;
        this.carrera = carrera;
        this.curso_matriculado = curso_matriculado;
        this.clases = clases;
    }

    cambiarCarrera(nombre_nueva_carrera) { }
    cambiarEstadoMaticulado() { }
    addClase(nombre, horario, docente, carrera) { }
    removeClase(idclase) { }
    cambiarCurso(idnuevocurso) { }
    //Sobre escribimos el metodo de la clase padre.
    verInformacion() { }
};