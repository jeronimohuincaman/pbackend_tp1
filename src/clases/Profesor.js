import { Empleado } from "./Empleado.js";

export class Profesor extends Empleado {
    static contador_numero_legajo = 1;
    constructor(
        {
            nombre,
            apellido,
            dni,
            numero_telefono,
            direccion,
            correo_electronico,
            edad,
            fecha_nacimiento,
            estado_civil,
            salario,
            sindicato,
            estado_empleado,
            anio_incorporacion,
            materias,
            carreras,
            grado_academico,
            clases,
            departamento,
        }) {
        super(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion);
        this.numero_legajo = Profesor.contador_numero_legajo;
        Profesor.contador_numero_legajo++;
        this.materias = materias;
        this.carreras = carreras;
        this.clases = clases;
        this.grado_academico = grado_academico;
        this.departamento = departamento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo_electronico = correo_electronico;
        this.edad = edad;
        this.direccion = direccion;
        this.fecha_nacimiento = fecha_nacimiento;
        this.dni = dni;
        this.estado_empleado = estado_empleado;
        this.salario = salario;
        this.anio_incorporacion = anio_incorporacion;
        this.estado_civil = estado_civil;
        this.tipo = 'Profesor'
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
