import { Empleado } from "./Empleado";

export class Profesor extends Empleado {
    static contador_numero_legajo = 1;
    constructor(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion, materias, carreras, grado_academico, clases, departamento) {
        super(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion);
        this.numero_legajo = Profesor.contador_numero_legajo;
        Profesor.contador_numero_legajo++;
        this.materias = materias;
        this.carreras = carreras;
        this.clases = clases;
        this.grado_academico = grado_academico;
        this.departamento = departamento;
    }

    addClase() { }
    removeClase() { }
    addMateria() { }
    removeMateria() { }
    addCarrera() { }
    removeCarrera() { }
    cambiarGracdoAcademico() { }
    cambiarDepartamento() { }
}
