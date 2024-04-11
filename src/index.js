const Estudianes = [];
const Profesores = [];
const AuxiliaresServicio = [];
const Administrativos = [];
const Directivos = [];

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addButton');

    document.addEventListener('submit', (e) => {
        e.preventDefault();

        const items_formulario = document.querySelectorAll('.form-control');
        const formValues = obtenerValoresFormulario(items_formulario);

        console.log(formValues)

        console.log(e.submitter.id);
        switch (e.submitter.id) {
            case 'boton-profesor':
                AgregarProfesor(formValues);
                break;
            case 'boton-estudiante':
                break;
            case 'boton-auxiliar':
                break;
            case 'boton-administrativo':
                break;
            case 'boton-directivo':
                break;
            default: return false;
        }


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
    console.log(profe)
}