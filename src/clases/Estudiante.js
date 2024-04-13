import { Persona } from "./Persona.js";

export class Estudiante extends Persona {
    static contador_numero_legajo = 1;
    constructor(
        { nombre,
            apellido,
            dni,
            numero_telefono,
            direccion,
            correo_electronico,
            edad,
            fecha_nacimiento,
            estado_civil,
            carrera,
            curso_matriculado,
            clases }
    ) {
        super(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil);
        this.numero_legajo = Estudiante.contador_numero_legajo;
        Estudiante.contador_numero_legajo++;
        this.carrera = carrera;
        this.curso_matriculado = curso_matriculado;
        this.clases = clases;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.numero_telefono = numero_telefono;
        this.direccion = direccion;
        this.correo_electronico = correo_electronico;
        this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.estado_civil = estado_civil;
        this.tipo = 'Estudiante';
    }

    cambiarCarrera(nombre_nueva_carrera) { }
    cambiarEstadoMaticulado() { }
    addClase(nombre, horario, docente, carrera) { }
    removeClase(idclase) { }
    cambiarCurso(idnuevocurso) { }
    //Sobre escribimos el metodo de la clase padre.
    verInformacion() { }
};