const usuario = localStorage.getItem('usuario');
const contrasena = localStorage.getItem('contrasena');
document.getElementById('usuarioActual').textContent = usuario;
document.getElementById('contrasenaActual').textContent = contrasena;

function verContacto(id) {
    localStorage.setItem('contactoId', id);
    window.location.href = 'detalle-contacto.html';
}
