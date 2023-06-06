const bottonZodical = document.getElementById("botton-zodical");
let dia = parseInt(document.getElementById("dia").value);
let mes = parseInt(document.getElementById("mes").value);

bottonZodical.addEventListener("click", calcularSignoZodiacal)

function calcularSignoZodiacal() {
    if(dia > 31 || mes > 12) {
        document.getElementById("signo").textContent = "Iluminati";
        return;
    }else {
        calculo()
    }    

}

function calculo() {
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      document.getElementById("signo").textContent = "Acuario";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
      document.getElementById("signo").textContent = "Piscis";
    } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
      document.getElementById("signo").textContent = "Aries";
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
      document.getElementById("signo").textContent = "Tauro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
      document.getElementById("signo").textContent = "Géminis";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
      document.getElementById("signo").textContent = "Cáncer";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
      document.getElementById("signo").textContent = "Leo";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
      document.getElementById("signo").textContent = "Virgo";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
      document.getElementById("signo").textContent = "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
      document.getElementById("signo").textContent = "Escorpio";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
      document.getElementById("signo").textContent = "Sagitario";
    } else {
      document.getElementById("signo").textContent = "Capricornio";
    }
}