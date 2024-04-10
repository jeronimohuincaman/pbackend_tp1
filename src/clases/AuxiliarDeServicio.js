import { Empleado } from "./Empleado";

export class AuxiliarDeServicio extends Empleado {
    constructor(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion, turno, cargo, seccion_asignada) {
        super(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion)
        this.seccion_asignada = seccion_asignada;
        this.turno = turno;
        this.cargo = cargo;
    }
    addTurno() { }
    removeTurno() { }
    cambiarCargo() { }
    cambiarSeccion() { }
    cambiarTurno() { }
} 