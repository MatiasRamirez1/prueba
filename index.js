function laCajaDePandora(numero) {
  function convertirABinario(num) {
    let binario = "";
    while (num > 0) {
      binario = (num % 2) + binario;
      num = Math.floor(num / 2);
    }
    return binario || "0";
  }
  if (numero % 2 == 0) {
    return convertirABinario(numero);
  } else {
    function convertirAHexadecimal(num) {
      const hexDigitos = "0123456789ABCDEF";
      let hexadecimal = "";
      while (num > 0) {
        hexadecimal = hexDigitos[num % 16] + hexadecimal;
        num = Math.floor(num / 16);
      }
      return hexadecimal || "0";
    }
  }
}

console.log(laCajaDePandora(2));
console.log(laCajaDePandora(9));

function miNombre() {
  return {
    nombre: "Juan",
    edad: 19,
    nacionalidad: "Argentino",
  };
}

console.log(miNombre());
