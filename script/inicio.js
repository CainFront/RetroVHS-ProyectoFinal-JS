/*========================================
              JS HTML INICIO
=========================================*/
// Suscripcion Hero

$("#btnSub").click(function () {
  let emailSub = document.querySelector("#emailSub").value;

  let enviarSub = {
    title: emailSub,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      enviarSub,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (infoServidor) {
      console.log(infoServidor);
    });
  // Limpiar Inputs
  document.querySelector("#emailSub").value = "";
});

// Acordeon Preguntas
$("#FaqUno").click(function () {
  $("#FAQTextoUno").toggle(500);
});
$("#FaqDos").click(function () {
  $("#FAQTextoDos").toggle(500);
});
$("#FaqTres").click(function () {
  $("#FAQTextoTres").toggle(500);
});
$("#FaqCuatro").click(function () {
  $("#FAQTextoCuatro").toggle(500);
});
