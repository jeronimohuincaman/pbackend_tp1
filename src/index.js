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

export class Administrativo extends Empleado {
    constructor(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion, cargo, horarios) {
        super(nombre, apellido, dni, numero_telefono, direccion, correo_electronico, edad, fecha_nacimiento, estado_civil, salario, sindicato, estado_empleado, anio_incorporacion)
        this.cargo = cargo;
        this.horarios = horarios;
    }

    addHorario() { }
    removeHorario() { }
    cambiarCargo() { }

}
