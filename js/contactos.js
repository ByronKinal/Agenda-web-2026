const contactos = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@email.com', telefono: '555-0101'},
    { id: 2, nombre: 'María', apellido: 'García', email: 'maria.garcia@email.com', telefono: '555-0102' },
    { id: 3, nombre: 'Carlos', apellido: 'Rodríguez', email: 'carlos.rodriguez@email.com', telefono: '555-0103' },
    { id: 4, nombre: 'Ana', apellido: 'López', email: 'ana.lopez@email.com', telefono: '555-0104' },
    { id: 5, nombre: 'Pedro', apellido: 'Martínez', email: 'pedro.martinez@email.com', telefono: '555-0105' }
];

const perfilUsuario = JSON.parse(localStorage.getItem('perfilUsuario') || 'null');

if (!perfilUsuario) {
    window.location.href = 'login.html';
}

function verContacto(id) {
    sessionStorage.setItem('contactoId', id);
    window.location.href = 'detalles-contacto.html';
}
