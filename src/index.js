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
    const contenedor_cards = document.getElementById('contenedor-cards');
    const profesor = {};

    values.forEach(item => {
        let clave = Object.keys(item)[0];
        let valor = item[clave];

        profesor[clave] = valor;
    })

    let profe = new Profesor(profesor);
    Personas.push(profe);

    const card = dibujarCard(profe);
    contenedor_cards.innerHTML += card;
}

function AgregarEstudiante(values) {
    const contenedor_cards = document.getElementById('contenedor-cards');
    const alumno = {};

    values.forEach(item => {
        let clave = Object.keys(item)[0];
        let valor = item[clave];

        alumno[clave] = valor;
    })

    let estudiante = new Estudiante(alumno);
    Personas.push(estudiante);

    const card = dibujarCard(estudiante);
    contenedor_cards.innerHTML += card;
}

function AgregarAdministrativo(values) {
    const contenedor_cards = document.getElementById('contenedor-cards');
    const admins = {};
    values.forEach(item => {
        let clave = Object.keys(item)[0];
        let valor = item[clave];

        admins[clave] = valor;
    })

    let administrativo = new Administrativo(admins);
    Personas.push(administrativo);
    const card = dibujarCard(administrativo);
    contenedor_cards.innerHTML += card;
}

function AgregarAuxiliar(values) {
    const contenedor_cards = document.getElementById('contenedor-cards');
    const auxiliar_servicio = {};

    values.forEach(item => {
        let clave = Object.keys(item)[0];
        let valor = item[clave];

        auxiliar_servicio[clave] = valor;
    })

    let auxiliar = new AuxiliarDeServicio(auxiliar_servicio);
    Personas.push(auxiliar);

    const card = dibujarCard(auxiliar);
    contenedor_cards.innerHTML += card;
}

function AgregarDirectivo(values) {
    const contenedor_cards = document.getElementById('contenedor-cards');
    const directivo = {};

    values.forEach(item => {
        let clave = Object.keys(item)[0];
        let valor = item[clave];

        directivo[clave] = valor;
    })

    let dire = new Directivo(directivo);
    Personas.push(dire);

    const card = dibujarCard(dire);
    contenedor_cards.innerHTML += card;
}

function dibujarCard(persona) {
    const card = `    
        <div class='cardPerson'>
            <img src='./assets/Person.png' alt='' class='avatar'>
                <div class='personInfo'>
                    <h1 class='namePersona'>${persona.nombre}</h1>
                    <h2 class='cargoPersona'>${persona.tipo}</h2>
                </div>
            <a href='#' class='image-button'>
                <img src='./assets/options.png' alt='Botón de Imagen'>
            </a>
        </div>
        `;
        return card;
}