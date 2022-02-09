/*========================================
            JS HTML QUIZ
=========================================*/

let quizTotal = 0;
console.log(quizTotal);

// PREGUNTA N°1

$(".bienUno").click(function () {
  $(".bienUno").css({
    backgroundColor: "#329F5B",
  });
  $(".malUno").css({
    backgroundColor: "#D64933",
  });
  quizTotal++; //SUMATORIA
  console.log(quizTotal);
});
$(".malUno").click(function () {
  $(".malUno").css({
    backgroundColor: "#D64933",
  });
  $(".bienUno").css({
    backgroundColor: "#329F5B",
  });
});

// PREGUNTA N°2

$(".bienDos").click(function () {
  $(".bienDos").css({
    backgroundColor: "#329F5B",
  });
  $(".malDos").css({
    backgroundColor: "#D64933",
  });
  quizTotal++; //SUMATORIA
  console.log(quizTotal);
});
$(".malDos").click(function () {
  $(".malDos").css({
    backgroundColor: "#D64933",
  });
  $(".bienDos").css({
    backgroundColor: "#329F5B",
  });
});

// PREGUNTA N°3

$(".bienTres").click(function () {
  $(".bienTres").css({
    backgroundColor: "#329F5B",
  });
  $(".malTres").css({
    backgroundColor: "#D64933",
  });
  quizTotal++; //SUMATORIA
  console.log(quizTotal);
});
$(".malTres").click(function () {
  $(".malTres").css({
    backgroundColor: "#D64933",
  });
  $(".bienTres").css({
    backgroundColor: "#329F5B",
  });
});

// PREGUNTA N°4

$(".bienCuatro").click(function () {
  $(".bienCuatro").css({
    backgroundColor: "#329F5B",
  });
  $(".malCuatro").css({
    backgroundColor: "#D64933",
  });
  quizTotal++; //SUMATORIA
  console.log(quizTotal);
});
$(".malCuatro").click(function () {
  $(".malCuatro").css({
    backgroundColor: "#D64933",
  });
  $(".bienCuatro").css({
    backgroundColor: "#329F5B",
  });
});

// PREGUNTA N°5

$(".bienCinco").click(function () {
  $(".bienCinco").css({
    backgroundColor: "#329F5B",
  });
  $(".malCinco").css({
    backgroundColor: "#D64933",
  });
  quizTotal++; //SUMATORIA
  console.log(quizTotal);
});
$(".malCinco").click(function () {
  $(".malCinco").css({
    backgroundColor: "#D64933",
  });
  $(".bienCinco").css({
    backgroundColor: "#329F5B",
  });
});

// Configuracion Boton "Resultado"

$(".resultadoBtn").click(function () {
  if (quizTotal == 1) {
    document.querySelector(
      ".resultadoTexto"
    ).textContent = `"1 de 5" Fatal ¿Que te paso?, te tenia fe.`;
  } else if (quizTotal == 2) {
    document.querySelector(
      ".resultadoTexto"
    ).textContent = `"2 de 5" Al parecer solo conoces el Blu-ray.`;
  } else if (quizTotal == 3) {
    document.querySelector(
      ".resultadoTexto"
    ).textContent = `"3 de 5" Falta un poco, pero sin duda te gustan los VHS.`;
  } else if (quizTotal == 4) {
    document.querySelector(
      ".resultadoTexto"
    ).textContent = `"4 de 5" Casi, pero esta excelente.`;
  } else if (quizTotal == 5) {
    document.querySelector(
      ".resultadoTexto"
    ).textContent = `"5 de 5" Eres increíble, se nota que te gusta lo retro.`;
  } else document.querySelector(".resultadoTexto").textContent = `ERROR`;
});
