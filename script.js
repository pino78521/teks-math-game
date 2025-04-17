
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
      "question": "6.2A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.2B": [
    {
      "question": "6.2B STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2B STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.2C": [
    {
      "question": "6.2C STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2C STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.2D": [
    {
      "question": "6.2D STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.2D STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.3A": [
    {
      "question": "6.3A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.3B": [
    {
      "question": "6.3B STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3B STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.3C": [
    {
      "question": "6.3C STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3C STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.3D": [
    {
      "question": "6.3D STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.3D STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.4A": [
    {
      "question": "6.4A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.4B": [
    {
      "question": "6.4B STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4B STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.4C": [
    {
      "question": "6.4C STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4C STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.4D": [
    {
      "question": "6.4D STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.4D STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.5A": [
    {
      "question": "6.5A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.5B": [
    {
      "question": "6.5B STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5B STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.5C": [
    {
      "question": "6.5C STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5C STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.5D": [
    {
      "question": "6.5D STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.5D STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.6A": [
    {
      "question": "6.6A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.6B": [
    {
      "question": "6.6B STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6B STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.6C": [
    {
      "question": "6.6C STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6C STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.6D": [
    {
      "question": "6.6D STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.6D STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.7A": [
    {
      "question": "6.7A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.7A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.8A": [
    {
      "question": "6.8A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.8B": [
    {
      "question": "6.8B STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8B STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.8C": [
    {
      "question": "6.8C STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.8C STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.9A": [
    {
      "question": "6.9A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.9B": [
    {
      "question": "6.9B STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.9B STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.10A": [
    {
      "question": "6.10A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.10B": [
    {
      "question": "6.10B STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.10B STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.11A": [
    {
      "question": "6.11A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.11B": [
    {
      "question": "6.11B STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.11B STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.12A": [
    {
      "question": "6.12A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.12B": [
    {
      "question": "6.12B STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12B STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.12C": [
    {
      "question": "6.12C STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.12C STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.13A": [
    {
      "question": "6.13A STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13A STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.13B": [
    {
      "question": "6.13B STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13B STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
    }
  ],
  "6.13C": [
    {
      "question": "6.13C STAAR-style question 1: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 2: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 3: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 4: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 5: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 6: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 7: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 8: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 9: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 10: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 11: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 12: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 13: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 14: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 15: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 16: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 17: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 18: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 19: Sample math content for assessment.",
      "answer": "sample"
    },
    {
      "question": "6.13C STAAR-style question 20: Sample math content for assessment.",
      "answer": "sample"
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
