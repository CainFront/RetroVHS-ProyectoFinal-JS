/*========================================
            JS HTML CONFIRMACION
=========================================*/

$(document).ready(function () {
  $(".datepicker").datepicker({
    format: "dd-mm-yyyy",
    autoclose: true,
    startDate: "0d",
  });

  $(".cell").click(function () {
    $(".cell").removeClass("select");
    $(this).addClass("select");
  });
});

// Enviar datos al LocalStorage
$(document).ready(() => {
  $(".botonConfirmar").click(function () {
    // Variables de los Input
    let fecha = document.querySelector("#dp1").value;
    let confirmacionEmail = document.querySelector("#emailConfirmacion").value;
    let nombreConfirmacion = document.querySelector(
      "#nombreConfirmacion"
    ).value;
    let apellidoConfirmacion = document.querySelector(
      "#apellidoConfirmacion"
    ).value;
    // Guardar los datos en LocalStorage
    localStorage.setItem("Fecha", fecha);
    localStorage.setItem("Email de confirmacion", confirmacionEmail);
    localStorage.setItem("Nombre de cliente", nombreConfirmacion);
    localStorage.setItem("Apellido de cliente", apellidoConfirmacion);
    // Limpiar Inputs
    document.querySelector("#dp1").value = "";
    document.querySelector("#emailConfirmacion").value = "";
    document.querySelector("#nombreConfirmacion").value = "";
    document.querySelector("#apellidoConfirmacion").value = "";

    // Configurar Texto "Confirmacion"
    $(".confirmacionBtnTexto").css("visibility", "visible");
  });
});
