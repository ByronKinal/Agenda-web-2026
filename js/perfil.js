const perfilUsuario = JSON.parse(localStorage.getItem('perfilUsuario') || 'null');

if (!perfilUsuario) {
    window.location.href = 'login.html';
}

const setText = (id, value) => {
    const node = document.getElementById(id);
    if (node) {
        node.textContent = value || '-';
    }
};

if (perfilUsuario) {
    setText('perfilNombre', perfilUsuario.nombreCompleto || perfilUsuario.usuario);
    setText('perfilCorreo', perfilUsuario.correo);
    setText('perfilUsuario', perfilUsuario.usuario || localStorage.getItem('usuario'));
    setText('perfilCiudad', perfilUsuario.ciudad);
    const contrasena = perfilUsuario.contrasena || localStorage.getItem('contrasena');
    setText('cuentaContrasena', contrasena);
}
