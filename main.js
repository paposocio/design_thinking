const mostrarAlertaExito = () => {
    return Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido',
        showConfirmButton: false,
        timer: 1500
    });
};

const mostrarAlertaError = () => {
    Swal.fire({
        icon: 'error',
        title: 'Informacion incorrecta',
        text: 'Revisa tu correo y/o contraseña e inténtalo nuevamente',
        footer: '<a href="">Olvidaste tu usuario o contraseña?</a>',
        confirmButtonColor: '#8CD4F5',
    });
};

const botonLogin = document.getElementById('btnIngresar');
const emailInput = document.getElementById('inputCorreo');
const passwordInput = document.getElementById('inputClave');

botonLogin.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === 'correo@ucentral.edu.co' && password === 'contraseña123') {
        //mostrarAlertaExito().then(() => {
            window.location.href = './views/dashboard.html';
        //});
    } else {
        mostrarAlertaError();
    }
});