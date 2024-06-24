function laCajaDePandora(numero) {
  if (numero % 0) {
    return numero.toString(2);
  } else {
    return numero.toString(16);
  }
}
