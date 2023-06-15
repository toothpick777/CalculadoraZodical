const bottonZodical = document.getElementById("botton-zodical");
const imagen = document.getElementById("imagenZodiacal");

bottonZodical.addEventListener("click", calculo);

function calculo() {
  const dia = parseInt(document.getElementById("dia").value);
  const mes = parseInt(document.getElementById("mes").value);

  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
    document.getElementById("signo").textContent = "Acuario";
    imagenesDelZodiaco("acuario");
  } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
    document.getElementById("signo").textContent = "Piscis";
    imagenesDelZodiaco("piscis");
  } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
    document.getElementById("signo").textContent = "Aries";
    imagenesDelZodiaco("aries");
  } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
    document.getElementById("signo").textContent = "Tauro";
    imagenesDelZodiaco("tauro");
  } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
    document.getElementById("signo").textContent = "Géminis";
    imagenesDelZodiaco("géminis");
  } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
    document.getElementById("signo").textContent = "Cáncer";
    imagenesDelZodiaco("cáncer");
  } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
    document.getElementById("signo").textContent = "Leo";
    imagenesDelZodiaco("leo");
  } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    document.getElementById("signo").textContent = "Virgo";
    imagenesDelZodiaco("virgo");
  } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    document.getElementById("signo").textContent = "Libra";
    imagenesDelZodiaco("libra");
  } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    document.getElementById("signo").textContent = "Escorpio";
    imagenesDelZodiaco("escorpio");
  } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    document.getElementById("signo").textContent = "Sagitario";
    imagenesDelZodiaco("sagitario");
  } else {
    document.getElementById("signo").textContent = "Capricornio";
    imagenesDelZodiaco("capricornio");
  }
}

function imagenesDelZodiaco(nombre) {
  imagen.className = ""; // Limpiar todas las clases

  switch (nombre) {
    case "acuario":
      imagen.classList.add("acuario");
      break;
    case "piscis":
      imagen.classList.add("piscis");
      break;
    case "aries":
      imagen.classList.add("aries");
      break;
    case "tauro":
      imagen.classList.add("tauro");
      break;
    case "géminis":
      imagen.classList.add("géminis");
      break;
      case "cáncer":
      imagen.classList.add("cáncer");
      break;
    case "leo":
      imagen.classList.add("leo");
      break;
    case "virgo":
      imagen.classList.add("virgo");
      break;
    case "libra":
      imagen.classList.add("libra");
      break;
    case "escorpio":
      imagen.classList.add("escorpio");
      break;
    case "sagitario":
      imagen.classList.add("sagitario");
      break;
    default:
      imagen.classList.add("capricornio");
      break;
  }
}