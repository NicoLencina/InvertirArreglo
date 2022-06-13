function invertirVector(v: number[]) {
  let cantidad: number = v.length;
  let vectorInvertido: number[] = new Array(cantidad);
  let indice: number = 0;

  for (
    let indiceInvertido: number = cantidad - 1;
    indiceInvertido >= 0;
    indiceInvertido--
  ) {
    vectorInvertido[indice] = v[indiceInvertido];
    indice++;
  }
  console.log("El arreglo invertido es: " + vectorInvertido);
}

let cadena: string = "Hola como estas";
invertirVector([cadena]);
console.log(cadena);
