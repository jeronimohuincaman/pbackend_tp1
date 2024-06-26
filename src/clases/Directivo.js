import { Empleado } from "./Empleado.js";

export class Directivo extends Empleado {
    constructor({nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion, cargo, horarios}) {
        super(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion)
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.numero_telefono = numero_telefono;
        this.direccion = direccion;
        this.correo_electronico = correo_electronico;
        this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.estado_civil = estado_civil;
        this.salario = salario;
        this.sindicato = sindicato;
        this.estado_empleado = estado_empleado;
        this.anio_incorporacion = anio_incorporacion;
        this.cargo = cargo;
        this.horarios = horarios;
        this.tipo = 'Directivo';
    }
    addHorario() { }
    removeHorario() { }
    cambiarCargo() { }
}