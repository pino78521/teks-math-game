
let studentName = "";
let studentId = "";

const teksByStrand = {
  "Numerical Representations & Relationships": [
    "6.2A",
    "6.2B",
    "6.2C",
    "6.2D",
    "6.3A",
    "6.3B",
    "6.3C",
    "6.3D"
  ],
  "Computations & Algebraic Relationships": [
    "6.4A",
    "6.4B",
    "6.4C",
    "6.4D",
    "6.5A",
    "6.5B",
    "6.5C",
    "6.5D",
    "6.6A",
    "6.6B",
    "6.6C",
    "6.6D"
  ],
  "Geometry & Measurement": [
    "6.7A",
    "6.8A",
    "6.8B",
    "6.8C",
    "6.9A",
    "6.9B",
    "6.10A",
    "6.10B",
    "6.11A",
    "6.11B"
  ],
  "Data Analysis & Financial Literacy": [
    "6.12A",
    "6.12B",
    "6.12C",
    "6.13A",
    "6.13B",
    "6.13C"
  ]
};

const questions = {
  "6.2A": [
    {
      "question": "6.2A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.2A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.2A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.2A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.2A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.2A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.2A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.2A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.2A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.2A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.2A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.2A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.2A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.2A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.2A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.2A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.2A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.2A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.2A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.2A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.2B": [
    {
      "question": "6.2B: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.2B: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.2B: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.2B: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.2B: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.2B: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.2B: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.2B: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.2B: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.2B: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.2B: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.2B: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.2B: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.2B: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.2B: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.2B: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.2B: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.2B: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.2B: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.2B: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.2C": [
    {
      "question": "6.2C: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.2C: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.2C: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.2C: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.2C: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.2C: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.2C: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.2C: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.2C: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.2C: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.2C: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.2C: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.2C: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.2C: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.2C: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.2C: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.2C: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.2C: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.2C: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.2C: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.2D": [
    {
      "question": "6.2D: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.2D: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.2D: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.2D: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.2D: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.2D: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.2D: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.2D: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.2D: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.2D: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.2D: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.2D: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.2D: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.2D: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.2D: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.2D: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.2D: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.2D: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.2D: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.2D: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.3A": [
    {
      "question": "6.3A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.3A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.3A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.3A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.3A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.3A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.3A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.3A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.3A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.3A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.3A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.3A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.3A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.3A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.3A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.3A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.3A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.3A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.3A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.3A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.3B": [
    {
      "question": "6.3B: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.3B: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.3B: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.3B: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.3B: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.3B: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.3B: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.3B: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.3B: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.3B: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.3B: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.3B: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.3B: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.3B: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.3B: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.3B: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.3B: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.3B: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.3B: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.3B: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.3C": [
    {
      "question": "6.3C: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.3C: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.3C: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.3C: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.3C: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.3C: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.3C: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.3C: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.3C: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.3C: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.3C: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.3C: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.3C: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.3C: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.3C: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.3C: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.3C: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.3C: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.3C: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.3C: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.3D": [
    {
      "question": "6.3D: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.3D: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.3D: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.3D: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.3D: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.3D: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.3D: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.3D: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.3D: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.3D: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.3D: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.3D: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.3D: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.3D: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.3D: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.3D: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.3D: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.3D: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.3D: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.3D: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.4A": [
    {
      "question": "6.4A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.4A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.4A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.4A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.4A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.4A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.4A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.4A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.4A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.4A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.4A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.4A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.4A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.4A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.4A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.4A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.4A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.4A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.4A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.4A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.4B": [
    {
      "question": "6.4B: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.4B: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.4B: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.4B: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.4B: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.4B: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.4B: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.4B: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.4B: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.4B: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.4B: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.4B: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.4B: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.4B: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.4B: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.4B: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.4B: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.4B: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.4B: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.4B: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.4C": [
    {
      "question": "6.4C: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.4C: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.4C: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.4C: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.4C: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.4C: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.4C: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.4C: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.4C: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.4C: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.4C: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.4C: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.4C: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.4C: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.4C: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.4C: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.4C: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.4C: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.4C: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.4C: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.4D": [
    {
      "question": "6.4D: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.4D: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.4D: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.4D: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.4D: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.4D: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.4D: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.4D: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.4D: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.4D: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.4D: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.4D: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.4D: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.4D: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.4D: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.4D: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.4D: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.4D: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.4D: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.4D: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.5A": [
    {
      "question": "6.5A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.5A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.5A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.5A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.5A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.5A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.5A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.5A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.5A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.5A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.5A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.5A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.5A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.5A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.5A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.5A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.5A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.5A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.5A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.5A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.5B": [
    {
      "question": "6.5B: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.5B: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.5B: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.5B: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.5B: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.5B: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.5B: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.5B: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.5B: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.5B: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.5B: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.5B: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.5B: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.5B: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.5B: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.5B: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.5B: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.5B: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.5B: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.5B: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.5C": [
    {
      "question": "6.5C: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.5C: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.5C: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.5C: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.5C: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.5C: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.5C: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.5C: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.5C: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.5C: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.5C: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.5C: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.5C: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.5C: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.5C: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.5C: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.5C: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.5C: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.5C: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.5C: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.5D": [
    {
      "question": "6.5D: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.5D: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.5D: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.5D: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.5D: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.5D: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.5D: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.5D: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.5D: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.5D: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.5D: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.5D: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.5D: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.5D: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.5D: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.5D: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.5D: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.5D: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.5D: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.5D: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.6A": [
    {
      "question": "6.6A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.6A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.6A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.6A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.6A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.6A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.6A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.6A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.6A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.6A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.6A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.6A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.6A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.6A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.6A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.6A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.6A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.6A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.6A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.6A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.6B": [
    {
      "question": "6.6B: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.6B: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.6B: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.6B: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.6B: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.6B: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.6B: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.6B: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.6B: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.6B: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.6B: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.6B: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.6B: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.6B: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.6B: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.6B: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.6B: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.6B: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.6B: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.6B: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.6C": [
    {
      "question": "6.6C: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.6C: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.6C: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.6C: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.6C: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.6C: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.6C: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.6C: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.6C: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.6C: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.6C: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.6C: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.6C: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.6C: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.6C: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.6C: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.6C: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.6C: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.6C: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.6C: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.6D": [
    {
      "question": "6.6D: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.6D: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.6D: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.6D: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.6D: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.6D: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.6D: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.6D: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.6D: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.6D: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.6D: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.6D: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.6D: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.6D: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.6D: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.6D: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.6D: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.6D: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.6D: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.6D: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.7A": [
    {
      "question": "6.7A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.7A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.7A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.7A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.7A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.7A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.7A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.7A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.7A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.7A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.7A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.7A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.7A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.7A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.7A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.7A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.7A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.7A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.7A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.7A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.8A": [
    {
      "question": "6.8A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.8A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.8A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.8A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.8A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.8A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.8A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.8A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.8A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.8A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.8A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.8A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.8A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.8A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.8A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.8A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.8A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.8A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.8A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.8A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.8B": [
    {
      "question": "6.8B: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.8B: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.8B: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.8B: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.8B: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.8B: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.8B: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.8B: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.8B: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.8B: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.8B: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.8B: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.8B: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.8B: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.8B: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.8B: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.8B: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.8B: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.8B: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.8B: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.8C": [
    {
      "question": "6.8C: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.8C: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.8C: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.8C: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.8C: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.8C: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.8C: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.8C: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.8C: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.8C: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.8C: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.8C: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.8C: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.8C: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.8C: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.8C: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.8C: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.8C: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.8C: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.8C: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.9A": [
    {
      "question": "6.9A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.9A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.9A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.9A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.9A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.9A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.9A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.9A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.9A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.9A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.9A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.9A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.9A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.9A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.9A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.9A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.9A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.9A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.9A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.9A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.9B": [
    {
      "question": "6.9B: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.9B: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.9B: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.9B: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.9B: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.9B: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.9B: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.9B: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.9B: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.9B: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.9B: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.9B: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.9B: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.9B: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.9B: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.9B: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.9B: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.9B: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.9B: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.9B: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.10A": [
    {
      "question": "6.10A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.10A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.10A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.10A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.10A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.10A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.10A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.10A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.10A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.10A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.10A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.10A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.10A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.10A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.10A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.10A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.10A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.10A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.10A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.10A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.10B": [
    {
      "question": "6.10B: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.10B: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.10B: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.10B: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.10B: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.10B: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.10B: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.10B: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.10B: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.10B: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.10B: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.10B: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.10B: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.10B: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.10B: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.10B: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.10B: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.10B: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.10B: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.10B: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.11A": [
    {
      "question": "6.11A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.11A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.11A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.11A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.11A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.11A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.11A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.11A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.11A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.11A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.11A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.11A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.11A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.11A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.11A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.11A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.11A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.11A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.11A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.11A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.11B": [
    {
      "question": "6.11B: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.11B: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.11B: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.11B: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.11B: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.11B: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.11B: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.11B: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.11B: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.11B: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.11B: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.11B: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.11B: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.11B: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.11B: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.11B: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.11B: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.11B: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.11B: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.11B: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.12A": [
    {
      "question": "6.12A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.12A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.12A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.12A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.12A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.12A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.12A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.12A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.12A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.12A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.12A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.12A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.12A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.12A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.12A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.12A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.12A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.12A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.12A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.12A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.12B": [
    {
      "question": "6.12B: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.12B: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.12B: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.12B: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.12B: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.12B: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.12B: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.12B: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.12B: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.12B: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.12B: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.12B: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.12B: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.12B: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.12B: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.12B: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.12B: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.12B: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.12B: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.12B: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.12C": [
    {
      "question": "6.12C: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.12C: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.12C: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.12C: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.12C: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.12C: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.12C: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.12C: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.12C: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.12C: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.12C: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.12C: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.12C: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.12C: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.12C: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.12C: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.12C: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.12C: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.12C: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.12C: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.13A": [
    {
      "question": "6.13A: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.13A: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.13A: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.13A: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.13A: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.13A: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.13A: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.13A: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.13A: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.13A: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.13A: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.13A: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.13A: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.13A: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.13A: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.13A: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.13A: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.13A: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.13A: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.13A: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.13B": [
    {
      "question": "6.13B: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.13B: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.13B: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.13B: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.13B: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.13B: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.13B: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.13B: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.13B: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.13B: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.13B: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.13B: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.13B: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.13B: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.13B: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.13B: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.13B: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.13B: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.13B: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.13B: What is 20 + 21?",
      "answer": "41"
    }
  ],
  "6.13C": [
    {
      "question": "6.13C: What is 1 + 2?",
      "answer": "3"
    },
    {
      "question": "6.13C: What is 2 + 3?",
      "answer": "5"
    },
    {
      "question": "6.13C: What is 3 + 4?",
      "answer": "7"
    },
    {
      "question": "6.13C: What is 4 + 5?",
      "answer": "9"
    },
    {
      "question": "6.13C: What is 5 + 6?",
      "answer": "11"
    },
    {
      "question": "6.13C: What is 6 + 7?",
      "answer": "13"
    },
    {
      "question": "6.13C: What is 7 + 8?",
      "answer": "15"
    },
    {
      "question": "6.13C: What is 8 + 9?",
      "answer": "17"
    },
    {
      "question": "6.13C: What is 9 + 10?",
      "answer": "19"
    },
    {
      "question": "6.13C: What is 10 + 11?",
      "answer": "21"
    },
    {
      "question": "6.13C: What is 11 + 12?",
      "answer": "23"
    },
    {
      "question": "6.13C: What is 12 + 13?",
      "answer": "25"
    },
    {
      "question": "6.13C: What is 13 + 14?",
      "answer": "27"
    },
    {
      "question": "6.13C: What is 14 + 15?",
      "answer": "29"
    },
    {
      "question": "6.13C: What is 15 + 16?",
      "answer": "31"
    },
    {
      "question": "6.13C: What is 16 + 17?",
      "answer": "33"
    },
    {
      "question": "6.13C: What is 17 + 18?",
      "answer": "35"
    },
    {
      "question": "6.13C: What is 18 + 19?",
      "answer": "37"
    },
    {
      "question": "6.13C: What is 19 + 20?",
      "answer": "39"
    },
    {
      "question": "6.13C: What is 20 + 21?",
      "answer": "41"
    }
  ]
};

let selectedTEKS = [];
let gameQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;

document.addEventListener("DOMContentLoaded", () => {
  const teksMultiSelect = document.getElementById("teks-multiselect");
  for (const strand in teksByStrand) {
    teksByStrand[strand].forEach(teks => {
      const option = document.createElement("option");
      option.value = teks;
      option.textContent = teks;
      teksMultiSelect.appendChild(option);
    });
  }
});

function goToTeacherSettings() {
  studentName = document.getElementById("student-name").value.trim();
  studentId = document.getElementById("student-id").value.trim();

  if (!studentName || !studentId) {
    alert("Please fill in both name and ID.");
    return;
  }

  document.getElementById("student-info").style.display = "none";
  document.getElementById("teacher-settings").style.display = "block";
}

function startGame() {
  const selectedOptions = Array.from(document.getElementById("teks-multiselect").selectedOptions);
  selectedTEKS = selectedOptions.map(opt => opt.value);
  const requestedCount = parseInt(document.getElementById("question-count").value);

  let pool = [];
  selectedTEKS.forEach(teks => {
    if (questions[teks]) {
      pool = pool.concat(questions[teks].map(q => ({ ...q, teks })));
    }
  });

  pool.sort(() => 0.5 - Math.random());
  const questionCount = Math.min(requestedCount, pool.length);
  gameQuestions = pool.slice(0, questionCount);

  if (gameQuestions.length === 0) {
    alert("No questions available for selected TEKS.");
    return;
  }

  document.getElementById("teacher-settings").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  currentQuestionIndex = 0;
  correctAnswers = 0;
  showQuestion();
}

function showQuestion() {
  const q = gameQuestions[currentQuestionIndex];
  document.getElementById("progress").textContent = `Question ${currentQuestionIndex + 1} of ${gameQuestions.length}`;
  document.getElementById("question-text").textContent = q.question;
  document.getElementById("student-answer").value = "";
  document.getElementById("feedback").textContent = "";
}

function submitAnswer() {
  const userAnswer = document.getElementById("student-answer").value.trim().toLowerCase();
  const correctAnswer = gameQuestions[currentQuestionIndex].answer.toLowerCase();

  const feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    correctAnswers++;
  } else {
    feedback.textContent = "❌ Incorrect.";
    feedback.style.color = "red";
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < gameQuestions.length) {
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(showScore, 1000);
  }
}

function showScore() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("report-section").style.display = "block";
  document.getElementById("score-summary").textContent = `Final Score for ${studentName} (${studentId}): ${correctAnswers}/${gameQuestions.length}`;
}

function resetGame() {
  studentName = "";
  studentId = "";
  selectedTEKS = [];
  gameQuestions = [];
  currentQuestionIndex = 0;
  correctAnswers = 0;

  document.getElementById("student-name").value = "";
  document.getElementById("student-id").value = "";
  document.getElementById("teacher-settings").style.display = "none";
  document.getElementById("question-container").style.display = "none";
  document.getElementById("report-section").style.display = "none";
  document.getElementById("student-info").style.display = "block";
}
