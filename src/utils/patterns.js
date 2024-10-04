const patterns = {
  Block: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
  Blinker: [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  Toad: [
    [0, 1],
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
    [3, 2],
  ],
  Beacon: [
    [0, 0],
    [0, 1],
    [1, 0],
    [2, 3],
    [3, 2],
    [3, 3],
  ],
  Glider: [
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  LWSS: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
    [1, 0],
    [2, 0],
    [3, 1],
  ],
  Pulsar: [
    [0, 2],
    [0, 3],
    [0, 4],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 2],
    [5, 3],
    [5, 4],
    [4, 5],
    [3, 5],
    [2, 5],
    [4, 7],
    [3, 7],
    [2, 7],
    [0, 8],
    [0, 9],
    [0, 10],
    [5, 8],
    [5, 9],
    [5, 10],
    [4, 12],
    [3, 12],
    [2, 12],
    [7, 2],
    [7, 3],
    [7, 4],
    [7, 8],
    [7, 9],
    [7, 10],
    [8, 5],
    [9, 5],
    [10, 5],
    [8, 7],
    [9, 7],
    [10, 7],
    [8, 0],
    [9, 0],
    [10, 0],
    [8, 12],
    [9, 12],
    [10, 12],
    [12, 4],
    [12, 3],
    [12, 2],
    [12, 8],
    [12, 9],
    [12, 10],
  ],
  Pentadecathlon: [
    [1, 0],
    [1, 1],
    [0, 2],
    [2, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [0, 7],
    [2, 7],
    [1, 8],
    [1, 9],
  ],
  Diehard: [
    [1, 0],
    [1, 1],
    [2, 1],
    [2, 5],
    [2, 6],
    [2, 7],
    [0, 6],
  ],
  Boat: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
  ],
  Tub: [
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
  ],
  Loaf: [
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 3],
    [2, 1],
    [2, 3],
    [3, 2],
  ],
  Rpentomino: [
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  Herschel: [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
    [1, 2],
    [2, 2],
    [3, 2],
  ],
  Barge: [
    [0, 2],
    [1, 3],
    [1, 1],
    [2, 2],
    [2, 0],
    [3, 1],
  ],

  GosperGliderGun: [
    [0, 24],
    [1, 22],
    [1, 24],
    [2, 12],
    [2, 13],
    [2, 20],
    [2, 21],
    [2, 34],
    [2, 35],
    [3, 11],
    [3, 15],
    [3, 20],
    [3, 21],
    [3, 34],
    [3, 35],
    [4, 0],
    [4, 1],
    [4, 10],
    [4, 16],
    [4, 20],
    [4, 21],
    [5, 0],
    [5, 1],
    [5, 10],
    [5, 14],
    [5, 16],
    [5, 17],
    [5, 22],
    [5, 24],
    [6, 10],
    [6, 16],
    [6, 24],
    [7, 11],
    [7, 15],
    [8, 12],
    [8, 13],
  ],
  Acorn: [
    [0, 1],
    [1, 3],
    [2, 0],
    [2, 1],
    [2, 4],
    [2, 5],
    [2, 6],
  ],
  Thunderbolt: [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 2],
    [3, 2],
  ],
  SwitchEngine: [
    [1, 0],
    [0, 1],
    [2, 1],
    [0, 3],
    [3, 3],
    [3, 4],
    [3, 5],
    [2, 4],
  ],
  Caterpillar: [
    [1, 0],
    [2, 0],
    [3, 0],
    [2, 13],
    [1, 14],
    [2, 14],
    [3, 14],
    [1, 15],
    [0, 15],
    [3, 15],
    [4, 15],
  ],
  SchickEngine: [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [3, 1],
    [5, 1],
    [6, 0],
    [7, 0],
    [8, 0],
    [8, 1],
    [8, 2],
    [8, 3],
    [1, 4],
    [7, 4],
    [5, 4],
    [3, 4],
    [4, 6],
    [3, 7],
    [4, 7],
    [5, 7],
    [3, 8],
    [4, 8],
    [5, 8],
    [2, 12],
    [2, 13],
    [1, 14],
    [3, 14],
    [3, 15],
    [3, 16],
    [4, 15],
    [4, 16],
    [4, 17],
    [5, 14],
    [5, 15],
    [5, 16],
    [6, 12],
    [6, 13],
    [7, 14],
  ],
  FrenchKiss: [
    [0, 0],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 3],
    [3, 2],
    [4, 2],
    [5, 3],
    [5, 4],
    [3, 5],
    [3, 6],
    [4, 7],
    [5, 7],
    [6, 6],
    [7, 7],
    [7, 8],
    [7, 9],
    [8, 9],
  ],
};

export default patterns;
