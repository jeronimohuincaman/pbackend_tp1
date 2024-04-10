import { Persona } from "./Persona";

export class Empleado extends Persona {
    static contador_numero_empleado = 1;
    constructor(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion) {
        super(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil);
        this.salario = salario;
        this.sindicato = sindicato;
        this.estado_empleado = estado_empleado;
        this.anio_incorporacion = anio_incorporacion;
        this.idempleado = Empleado.contador_numero_empleado;
        Empleado.contador_numero_empleado++;
    }

    cambiarSalario(nuevo_salario) { }
    cambiarSindicato(nombre_nuevo_sindicato) { }
    cambiarEstadoEmpleo() { }
    verInformacion() { }
}