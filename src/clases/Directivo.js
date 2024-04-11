import { Empleado } from "./Empleado.js";

export class Directivo extends Empleado {
    constructor(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion, cargo, horarios) {
        super(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion)
        this.cargo = cargo;
        this.horarios = horarios;
    }
    addHorario() { }
    removeHorario() { }
    cambiarCargo() { }
}