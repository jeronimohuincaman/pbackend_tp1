// Este evento se dispara cuando el HTML ha sido completamente cargado y analizado.
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el botón de 'add' mediante su ID y lo asigna a la variable addButton.
    const addButton = document.getElementById('addButton');
    // Selecciona el contenedor del select mediante la clase CSS .selectCargo y lo asigna a la variable selectCargoDiv.
    const selectCargoDiv = document.querySelector('.selectCargo');
    // Selecciona el elemento select mediante su ID y lo asigna a la variable selectPersona.
    const selectPersona = document.getElementById('tipo_persona');
    // Selecciona el formulario mediante su ID y lo asigna a la variable formulario.
    const formulario = document.getElementById('formulario');

    // Agrega un evento de escucha al botón de agregar que se activa cuando se hace clic en él.
    addButton.addEventListener('click', function () {
        // Esta linea se encarga de cambiar el estilo de display 'none' a display 'block'.
        selectCargoDiv.style.display = 'block';
    });

    // Agrega un evento de escucha al select que se activa cuando cambia su valor.
    selectPersona.addEventListener('change', function () {
        // Obtiene el valor seleccionado del select y lo asigna a la variable 'selectedOption'.
        const selectedOption = selectPersona.value;
        // Llama a la función mostrarFormularioSegunOpcion dandole como argumento el valor seleccionado del select.
        mostrarFormularioSegunOpcion(selectedOption);
    });

    // Declaro la función, tomando como parametro la 'opcion'
    function mostrarFormularioSegunOpcion(opcion) {
        // Ocultar el formulario por defecto
        //  Estableciendo la propiedad innerHTML como una cadena vacia, limpiamos el formulario.
        formulario.innerHTML = '';
        // Cambiamos el estilo del formulario a 'bloc' para que sea visible en la pantalla.
        formulario.style.display = 'block';

        // Mostrar el formulario según la opción seleccionada
        // Implementamos el Switch pensado en clase, recibe como parametro la opción seleccionada.
        switch (opcion) {
            case 'estudiante':
                mostrarFormularioEstudiante();
                break;
            case 'profesor':
                mostrarFormularioProfesor();
                break;
            case 'personalServicio':
                mostrarFormularioPersonalServicio();
                break;
            default:
                // Ocultar el formulario si no se selecciona ninguna opción válida
                formulario.style.display = 'none';
                break;
        }
    }

    function mostrarFormularioEstudiante() {
        const fields = [
            'nombre',
            'apellido',
            'dni',
            'numero_telefono',
            'direccion',
            'correo_electronico',
            'edad',
            'fecha_nacimiento',
            'estado_civil',
            'carrera',
            'curso_matriculado',
            'clases'
        ];

        fields.forEach(field => {
            const label = document.createElement('label');
            label.textContent = capitalizeFirstLetter(field) + ':';
            const input = document.createElement('input');
            input.type = 'text';
            input.id = field;
            input.name = field;
            input.required = true;
            const div = document.createElement('div');
            div.classList.add('form-group');
            div.appendChild(label);
            div.appendChild(input);
            formulario.appendChild(div);
        });
    }

    function mostrarFormularioProfesor() {
        const fields = [
            'nombre',
            'apellido',
            'dni',
            'numero_telefono',
            'direccion',
            'correo_electronico',
            'edad',
            'fecha_nacimiento',
            'estado_civil',
            'salario',
            'sindicato',
            'estado_empleado',
            'anio_incorporacion',
            'materias',
            'carreras',
            'grado_academico',
            'clases',
            'departamento',
            'boton'
        ];

        const form = document.createElement('form');
        form.classList.add('form-group');
        form.id = 'form';

        fields.forEach(field => {
            const div_form = document.createElement('div');
            div_form.classList.add('form-control');


            if (field === 'boton') {
                const button = document.createElement('button');
                button.innerHTML = 'Guardar';
                button.id = field;
                button.type = 'submit';
                div_form.appendChild(button);
            } else {
                const label = document.createElement('label');
                label.textContent = capitalizeFirstLetter(field) + ':';
                const input = document.createElement('input');
                input.type = 'text';
                input.id = field;
                input.name = field;
                input.required = true;
                div_form.appendChild(label);
                div_form.appendChild(input);
            }
            form.appendChild(div_form);
        });
        formulario.appendChild(form);
    }

    function mostrarFormularioPersonalServicio() {
        const fields = [
            'nombre',
            'apellido',
            'dni',
            'numero_telefono',
            'direccion',
            'correo_electronico',
            'edad',
            'fecha_nacimiento',
            'estado_civil',
            'salario',
            'sindicato',
            'estado_empleado',
            'anio_incorporacion',
            'turno',
            'cargo',
            'seccion_asignada'
        ];

        fields.forEach(field => {
            const label = document.createElement('label');
            label.textContent = capitalizeFirstLetter(field) + ':';
            const input = document.createElement('input');
            input.type = 'text';
            input.id = field;
            input.name = field;
            input.required = true;
            const div = document.createElement('div');
            div.classList.add('form-group');
            div.appendChild(label);
            div.appendChild(input);
            formulario.appendChild(div);
        });
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
