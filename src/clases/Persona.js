export class Persona {
    constructor(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil) {
        // Atributos de la clase persona.
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.numero_telefono = numero_telefono;
        this.direccion = direccion;
        this.correo_electronico = correo_electronico;
        this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.estado_civil = estado_civil;
    }

    cambiarNumeroTelefono() { }
    cambiarDireccion() { }
    cambiarCorreoElectronico() { }
    cambiarEstadoCivil() { }
    verInformacion() { }
}
