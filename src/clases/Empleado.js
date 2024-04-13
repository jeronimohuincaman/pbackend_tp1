import { Persona } from "./Persona.js";

export class Empleado extends Persona {
    static contador_numero_empleado = 1;
    constructor(
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
        anio_incorporacion
    ) {
        super(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil);
        this.salario = salario;
        this.sindicato = sindicato;
        this.estado_empleado = estado_empleado;
        this.anio_incorporacion = anio_incorporacion;
        this.idempleado = Empleado.contador_numero_empleado;
        Empleado.contador_numero_empleado++;
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.numero_telefono = numero_telefono
        this.direccion = direccion
        this.correo_electronico = correo_electronico
        this.edad = edad
        this.fecha_nacimiento = fecha_nacimiento
        this.estado_civil = estado_civil;
    }

    cambiarSalario(nuevo_salario) { }
    cambiarSindicato(nombre_nuevo_sindicato) { }
    cambiarEstadoEmpleo() { }
    verInformacion() { }
}