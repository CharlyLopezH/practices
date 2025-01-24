interface Caracter {
  nombre: string;
  matriz: string[];
}

const caracteres: Caracter[] = [
    {
      nombre: "A",
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
      nombre: "B",
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
      nombre: "C",
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
      nombre: "D",
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
      nombre: "Espacio",
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