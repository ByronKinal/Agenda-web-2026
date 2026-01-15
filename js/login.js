document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('contrasena', contrasena);
    window.location.href = 'contactos.html';
});
