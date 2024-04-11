import { Profesor } from './clases/Profesor.js'
import { Estudiante } from './clases/Estudiante.js'
import { Administrativo } from './clases/Administrativo.js';
import { AuxiliarDeServicio } from './clases/AuxiliarDeServicio.js';
import { Directivo } from './clases/Directivo.js';

const Estudiantes = [];
const Profesores = [];
const AuxiliaresServicio = [];
const Administrativos = [];
const Directivos = [];
const Personas = [];

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('submit', (e) => {
        e.preventDefault();

        const items_formulario = document.querySelectorAll('.form-control');
        const formValues = obtenerValoresFormulario(items_formulario);


        switch (e.submitter.id) {
            case 'boton-profesor':
                AgregarProfesor(formValues);
                break;
            case 'boton-estudiante':
                AgregarEstudiante(formValues)
                break;
            case 'boton-auxiliar':
                AgregarAuxiliar(formValues);
                break;
            case 'boton-administrativo':
                AgregarAdministrativo(formValues);
                break;
            case 'boton-directivo':
                AgregarDirectivo(formValues);
                break;
            default: return false;
        }

        console.log(Personas)

    })

});

function obtenerValoresFormulario(formulario) {
    const formValues = [];

    formulario.forEach(item => {
        let clave = item.id;
        let valor = document.getElementById(clave).value;
        let objetoPersonalizado = {};

        objetoPersonalizado[clave] = valor;
        formValues.push(objetoPersonalizado);
    })

    return formValues;
}

function AgregarProfesor(values) {
    const profesor = {};

    values.forEach(item => {
        let clave = Object.keys(item)[0];
        let valor = item[clave];

        profesor[clave] = valor;
    })

    let profe = new Profesor(profesor);
    Personas.push(profe);

}

function AgregarEstudiante(values) {
    const alumno = {};

    values.forEach(item => {
        let clave = Object.keys(item)[0];
        let valor = item[clave];

        alumno[clave] = valor;
    })

    let estudiante = new Estudiante(alumno);
    Personas.push(estudiante);

}

function AgregarAdministrativo(values) {
    const admins = {};

    values.forEach(item => {
        let clave = Object.keys(item)[0];
        let valor = item[clave];

        admins[clave] = valor;
    })

    let administrativo = new Administrativo(admins);
    Personas.push(administrativo);
    ;
}

function AgregarAuxiliar(values) {
    const auxiliar_servicio = {};

    values.forEach(item => {
        let clave = Object.keys(item)[0];
        let valor = item[clave];

        auxiliar_servicio[clave] = valor;
    })

    let auxiliar = new AuxiliarDeServicio(auxiliar_servicio);
    Personas.push(auxiliar);

}

function AgregarDirectivo(values) {
    const directivo = {};

    values.forEach(item => {
        let clave = Object.keys(item)[0];
        let valor = item[clave];

        directivo[clave] = valor;
    })

    let dire = new Directivo(directivo);
    Personas.push(dire);

}