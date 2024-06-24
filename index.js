function laCajaDePandora(numero) {
  if (numero % 2 === 0) return numero.toString(2);
  return numero.toString(16);
}

function mati() {
  return {
    nombre: "Matias",
    edad: 23,
    nacionalidad: "Argentina",
  };
}
