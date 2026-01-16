// Base de datos de contactos
const contactos = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@email.com', telefono: '555-0101', direccion: 'Calle Principal 123' },
    { id: 2, nombre: 'María', apellido: 'García', email: 'maria.garcia@email.com', telefono: '555-0102', direccion: 'Avenida Central 456' },
    { id: 3, nombre: 'Carlos', apellido: 'Rodríguez', email: 'carlos.rodriguez@email.com', telefono: '555-0103', direccion: 'Calle Secundaria 789' },
    { id: 4, nombre: 'Ana', apellido: 'López', email: 'ana.lopez@email.com', telefono: '555-0104', direccion: 'Plaza Mayor 321' },
    { id: 5, nombre: 'Pedro', apellido: 'Martínez', email: 'pedro.martinez@email.com', telefono: '555-0105', direccion: 'Calle 5 de Mayo 654' }
];

const usuario = localStorage.getItem('usuario');
const contrasena = localStorage.getItem('contrasena');
if(document.getElementById('usuarioActual')) {
    document.getElementById('usuarioActual').textContent = usuario;
}
if(document.getElementById('contrasenaActual')) {
    document.getElementById('contrasenaActual').textContent = contrasena;
}

function verContacto(id) {
    sessionStorage.setItem('contactoId', id);
    window.location.href = 'detalles-contacto.html';
}
