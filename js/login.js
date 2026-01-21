document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('contrasena', contrasena);

    const perfilUsuario = {
        usuario: usuario,
        nombreCompleto: usuario,
        correo: `${usuario}@ejemplo.com`,
        ciudad: 'Ciudad Central',
    };

    localStorage.setItem('perfilUsuario', JSON.stringify(perfilUsuario));
    window.location.href = 'contactos.html';
});
