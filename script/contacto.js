/*========================================
            JS HTML CONTACTO
=========================================*/

$(document).ready(() => {
  $(".contactoBoton").click(function () {
    // Variables de los Input
    let contactoNombre = document.querySelector("#contactoNombre").value;
    let contactoEmail = document.querySelector("#contactoEmail").value;
    let contactoTexto = document.querySelector("#contactoTexto").value;
    // Guardar los datos en LocalStorage
    localStorage.setItem("nombre", contactoNombre);
    localStorage.setItem("email", contactoEmail);
    localStorage.setItem("mensaje", contactoTexto);
    // Limpiar Inputs
    document.querySelector("#contactoNombre").value = "";
    document.querySelector("#contactoEmail").value = "";
    document.querySelector("#contactoTexto").value = "";
  });
});
