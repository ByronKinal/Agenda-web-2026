// Base de datos de contactos
const contactos = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@email.com', telefono: '555-0101', direccion: 'Calle Principal 123' },
    { id: 2, nombre: 'María', apellido: 'García', email: 'maria.garcia@email.com', telefono: '555-0102', direccion: 'Avenida Central 456' },
    { id: 3, nombre: 'Carlos', apellido: 'Rodríguez', email: 'carlos.rodriguez@email.com', telefono: '555-0103', direccion: 'Calle Secundaria 789' },
    { id: 4, nombre: 'Ana', apellido: 'López', email: 'ana.lopez@email.com', telefono: '555-0104', direccion: 'Plaza Mayor 321' },
    { id: 5, nombre: 'Pedro', apellido: 'Martínez', email: 'pedro.martinez@email.com', telefono: '555-0105', direccion: 'Calle 5 de Mayo 654' }
];

// Obtener el ID del contacto seleccionado
const contactoId = sessionStorage.getItem('contactoId');

// Buscar el contacto
const contacto = contactos.find(c => c.id == contactoId);

// Mostrar los datos del contacto
if (contacto) {
    document.getElementById('nombreCompleto').textContent = contacto.nombre + ' ' + contacto.apellido;
    document.querySelector('[data-field="nombre"]').textContent = contacto.nombre;
    document.querySelector('[data-field="apellido"]').textContent = contacto.apellido;
    document.querySelector('[data-field="email"]').textContent = contacto.email;
    document.querySelector('[data-field="telefono"]').textContent = contacto.telefono;
    document.querySelector('[data-field="direccion"]').textContent = contacto.direccion;
} else {
    window.location.href = 'contactos.html';
}
