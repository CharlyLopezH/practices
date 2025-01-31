interface Caracter {
  simbolo: string;
  matriz: string[];
}

//Arreglo de Objetos de símbolos, define la matriz que representa a cada letra
const caracteres: Caracter[] = [
    {
      simbolo: "A",
      matriz: [
        "00100",
        "01010",
        "10001",
        "11111",
        "10001",
        "10001",
        "10001",
      ],
    },
    {
      simbolo: "B",
      matriz: [
        "11110",
        "10001",
        "10001",
        "11110",
        "10001",
        "10001",
        "11110",
      ],
    },
    {
      simbolo: "C",
      matriz: [
        "01111",
        "10000",
        "10000",
        "10000",
        "10000",
        "10000",
        "01111",
      ],
    },

    {
      simbolo: "D",
      matriz: [
        "01111",
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "01111",
      ],
    },

    {
      simbolo: "E",
      matriz: [
        "11111",
        "10000",
        "10000",
        "11111",
        "10000",
        "10000",
        "11111",
      ],
    },


    {
      simbolo: "Espacio",
      matriz: [
        "00000",
        "00000",
        "00000",
        "00000",
        "00000",
        "00000",
        "00000",
      ],
    },
  ];
export default caracteres;