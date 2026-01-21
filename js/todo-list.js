let tareas = [];

function agregarTarea() {
    const input = document.getElementById('taskInput');
    const prioridad = document.getElementById('prioritySelect').value;
    const texto = input.value.trim();

    if (texto === '') {
        alert('Escribe una tarea');
        return;
    }

    tareas.push({
        id: Date.now(),
        texto: texto,
        prioridad: prioridad,
        completada: false
    });

    input.value = '';
    guardar();
    mostrar();
}

function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    guardar();
    mostrar();
}

function completarTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        guardar();
        mostrar();
    }
}

function mostrar() {
    const lista = document.getElementById('tareas-lista');
    lista.innerHTML = '';

    if (tareas.length === 0) {
        lista.innerHTML = '<p class="lista-vacia">Sin tareas</p>';
        return;
    }

    tareas.forEach(tarea => {
        const div = document.createElement('div');
        div.className = `tarea-item ${tarea.prioridad} ${tarea.completada ? 'completada' : ''}`;

        const info = document.createElement('div');
        info.className = 'tarea-info';

        const texto = document.createElement('span');
        texto.className = 'tarea-texto';
        texto.textContent = tarea.texto;

        const prioridad = document.createElement('div');
        prioridad.className = `tarea-prioridad ${tarea.prioridad}`;
        const textoProrid = tarea.prioridad.charAt(0).toUpperCase() + tarea.prioridad.slice(1);
        prioridad.textContent = textoProrid;

        info.appendChild(texto);
        info.appendChild(prioridad);

        const botones = document.createElement('div');
        botones.className = 'tarea-botones';

        const btnCompletar = document.createElement('button');
        btnCompletar.textContent = tarea.completada ? 'Deshacer' : 'Completado';
        btnCompletar.onclick = () => completarTarea(tarea.id);

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => eliminarTarea(tarea.id);

        botones.appendChild(btnCompletar);
        botones.appendChild(btnEliminar);

        div.appendChild(info);
        div.appendChild(botones);
        lista.appendChild(div);
    });
}

function guardar() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function cargar() {
    const guardadas = localStorage.getItem('tareas');
    if (guardadas) {
        tareas = JSON.parse(guardadas);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cargar();
    mostrar();
    document.getElementById('taskInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') agregarTarea();
    });
});
