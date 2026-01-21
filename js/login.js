document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('contrasena', contrasena);

    const perfilUsuario = {
        nombreCompleto: usuario,
        correo: `${usuario}@ejemplo.com`,
        telefono: '555-0110',
        ciudad: 'Ciudad Central',
    };

    localStorage.setItem('perfilUsuario', JSON.stringify(perfilUsuario));
    window.location.href = 'contactos.html';
});
