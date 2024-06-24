function laCajaDePandora(numero) {
  if (numero % 2 === 0) {
    return numero.toString(2);
  } else {
    return numero.toString(16);
  }
}

function nico() {
  return {
    name: "nico",
    age: 27,
    nationality: "Colombia",
  };
}
