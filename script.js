
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
      "question": "6.2A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.2A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.2A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.2A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.2A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.2A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.2A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.2A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.2A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.2A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.2A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.2A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.2A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.2A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.2A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.2A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.2A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.2A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.2A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.2A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.2B": [
    {
      "question": "6.2B Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.2B Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.2B Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.2B Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.2B Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.2B Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.2B Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.2B Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.2B Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.2B Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.2B Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.2B Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.2B Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.2B Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.2B Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.2B Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.2B Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.2B Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.2B Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.2B Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.2C": [
    {
      "question": "6.2C Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.2C Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.2C Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.2C Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.2C Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.2C Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.2C Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.2C Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.2C Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.2C Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.2C Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.2C Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.2C Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.2C Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.2C Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.2C Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.2C Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.2C Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.2C Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.2C Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.2D": [
    {
      "question": "6.2D Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.2D Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.2D Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.2D Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.2D Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.2D Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.2D Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.2D Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.2D Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.2D Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.2D Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.2D Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.2D Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.2D Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.2D Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.2D Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.2D Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.2D Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.2D Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.2D Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.3A": [
    {
      "question": "6.3A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.3A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.3A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.3A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.3A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.3A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.3A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.3A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.3A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.3A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.3A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.3A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.3A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.3A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.3A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.3A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.3A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.3A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.3A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.3A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.3B": [
    {
      "question": "6.3B Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.3B Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.3B Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.3B Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.3B Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.3B Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.3B Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.3B Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.3B Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.3B Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.3B Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.3B Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.3B Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.3B Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.3B Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.3B Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.3B Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.3B Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.3B Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.3B Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.3C": [
    {
      "question": "6.3C Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.3C Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.3C Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.3C Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.3C Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.3C Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.3C Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.3C Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.3C Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.3C Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.3C Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.3C Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.3C Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.3C Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.3C Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.3C Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.3C Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.3C Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.3C Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.3C Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.3D": [
    {
      "question": "6.3D Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.3D Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.3D Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.3D Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.3D Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.3D Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.3D Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.3D Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.3D Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.3D Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.3D Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.3D Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.3D Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.3D Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.3D Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.3D Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.3D Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.3D Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.3D Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.3D Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.4A": [
    {
      "question": "6.4A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.4A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.4A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.4A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.4A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.4A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.4A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.4A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.4A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.4A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.4A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.4A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.4A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.4A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.4A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.4A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.4A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.4A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.4A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.4A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.4B": [
    {
      "question": "6.4B Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.4B Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.4B Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.4B Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.4B Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.4B Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.4B Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.4B Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.4B Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.4B Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.4B Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.4B Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.4B Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.4B Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.4B Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.4B Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.4B Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.4B Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.4B Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.4B Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.4C": [
    {
      "question": "6.4C Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.4C Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.4C Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.4C Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.4C Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.4C Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.4C Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.4C Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.4C Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.4C Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.4C Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.4C Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.4C Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.4C Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.4C Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.4C Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.4C Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.4C Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.4C Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.4C Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.4D": [
    {
      "question": "6.4D Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.4D Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.4D Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.4D Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.4D Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.4D Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.4D Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.4D Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.4D Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.4D Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.4D Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.4D Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.4D Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.4D Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.4D Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.4D Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.4D Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.4D Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.4D Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.4D Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.5A": [
    {
      "question": "6.5A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.5A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.5A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.5A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.5A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.5A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.5A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.5A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.5A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.5A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.5A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.5A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.5A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.5A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.5A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.5A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.5A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.5A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.5A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.5A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.5B": [
    {
      "question": "6.5B Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.5B Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.5B Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.5B Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.5B Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.5B Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.5B Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.5B Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.5B Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.5B Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.5B Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.5B Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.5B Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.5B Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.5B Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.5B Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.5B Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.5B Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.5B Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.5B Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.5C": [
    {
      "question": "6.5C Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.5C Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.5C Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.5C Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.5C Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.5C Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.5C Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.5C Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.5C Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.5C Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.5C Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.5C Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.5C Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.5C Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.5C Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.5C Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.5C Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.5C Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.5C Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.5C Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.5D": [
    {
      "question": "6.5D Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.5D Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.5D Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.5D Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.5D Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.5D Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.5D Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.5D Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.5D Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.5D Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.5D Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.5D Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.5D Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.5D Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.5D Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.5D Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.5D Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.5D Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.5D Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.5D Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.6A": [
    {
      "question": "6.6A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.6A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.6A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.6A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.6A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.6A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.6A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.6A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.6A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.6A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.6A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.6A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.6A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.6A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.6A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.6A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.6A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.6A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.6A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.6A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.6B": [
    {
      "question": "6.6B Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.6B Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.6B Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.6B Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.6B Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.6B Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.6B Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.6B Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.6B Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.6B Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.6B Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.6B Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.6B Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.6B Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.6B Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.6B Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.6B Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.6B Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.6B Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.6B Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.6C": [
    {
      "question": "6.6C Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.6C Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.6C Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.6C Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.6C Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.6C Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.6C Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.6C Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.6C Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.6C Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.6C Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.6C Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.6C Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.6C Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.6C Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.6C Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.6C Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.6C Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.6C Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.6C Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.6D": [
    {
      "question": "6.6D Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.6D Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.6D Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.6D Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.6D Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.6D Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.6D Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.6D Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.6D Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.6D Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.6D Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.6D Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.6D Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.6D Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.6D Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.6D Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.6D Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.6D Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.6D Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.6D Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.7A": [
    {
      "question": "6.7A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.7A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.7A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.7A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.7A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.7A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.7A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.7A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.7A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.7A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.7A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.7A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.7A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.7A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.7A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.7A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.7A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.7A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.7A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.7A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.8A": [
    {
      "question": "6.8A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.8A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.8A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.8A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.8A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.8A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.8A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.8A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.8A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.8A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.8A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.8A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.8A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.8A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.8A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.8A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.8A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.8A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.8A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.8A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.8B": [
    {
      "question": "6.8B Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.8B Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.8B Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.8B Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.8B Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.8B Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.8B Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.8B Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.8B Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.8B Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.8B Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.8B Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.8B Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.8B Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.8B Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.8B Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.8B Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.8B Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.8B Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.8B Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.8C": [
    {
      "question": "6.8C Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.8C Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.8C Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.8C Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.8C Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.8C Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.8C Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.8C Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.8C Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.8C Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.8C Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.8C Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.8C Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.8C Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.8C Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.8C Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.8C Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.8C Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.8C Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.8C Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.9A": [
    {
      "question": "6.9A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.9A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.9A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.9A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.9A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.9A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.9A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.9A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.9A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.9A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.9A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.9A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.9A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.9A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.9A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.9A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.9A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.9A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.9A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.9A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.9B": [
    {
      "question": "6.9B Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.9B Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.9B Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.9B Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.9B Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.9B Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.9B Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.9B Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.9B Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.9B Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.9B Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.9B Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.9B Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.9B Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.9B Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.9B Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.9B Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.9B Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.9B Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.9B Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.10A": [
    {
      "question": "6.10A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.10A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.10A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.10A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.10A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.10A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.10A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.10A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.10A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.10A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.10A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.10A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.10A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.10A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.10A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.10A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.10A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.10A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.10A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.10A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.10B": [
    {
      "question": "6.10B Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.10B Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.10B Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.10B Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.10B Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.10B Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.10B Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.10B Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.10B Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.10B Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.10B Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.10B Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.10B Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.10B Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.10B Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.10B Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.10B Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.10B Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.10B Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.10B Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.11A": [
    {
      "question": "6.11A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.11A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.11A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.11A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.11A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.11A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.11A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.11A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.11A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.11A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.11A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.11A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.11A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.11A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.11A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.11A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.11A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.11A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.11A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.11A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.11B": [
    {
      "question": "6.11B Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.11B Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.11B Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.11B Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.11B Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.11B Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.11B Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.11B Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.11B Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.11B Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.11B Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.11B Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.11B Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.11B Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.11B Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.11B Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.11B Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.11B Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.11B Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.11B Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.12A": [
    {
      "question": "6.12A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.12A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.12A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.12A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.12A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.12A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.12A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.12A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.12A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.12A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.12A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.12A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.12A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.12A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.12A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.12A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.12A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.12A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.12A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.12A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.12B": [
    {
      "question": "6.12B Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.12B Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.12B Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.12B Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.12B Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.12B Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.12B Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.12B Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.12B Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.12B Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.12B Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.12B Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.12B Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.12B Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.12B Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.12B Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.12B Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.12B Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.12B Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.12B Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.12C": [
    {
      "question": "6.12C Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.12C Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.12C Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.12C Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.12C Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.12C Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.12C Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.12C Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.12C Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.12C Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.12C Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.12C Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.12C Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.12C Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.12C Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.12C Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.12C Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.12C Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.12C Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.12C Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.13A": [
    {
      "question": "6.13A Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.13A Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.13A Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.13A Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.13A Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.13A Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.13A Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.13A Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.13A Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.13A Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.13A Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.13A Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.13A Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.13A Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.13A Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.13A Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.13A Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.13A Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.13A Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.13A Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.13B": [
    {
      "question": "6.13B Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.13B Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.13B Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.13B Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.13B Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.13B Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.13B Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.13B Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.13B Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.13B Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.13B Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.13B Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.13B Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.13B Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.13B Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.13B Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.13B Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.13B Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.13B Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.13B Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
    }
  ],
  "6.13C": [
    {
      "question": "6.13C Q1: A school has 5 boxes of pencils. Each box contains 2 pencils. How many pencils are there in total?",
      "answer": "10"
    },
    {
      "question": "6.13C Q2: A school has 6 boxes of pencils. Each box contains 3 pencils. How many pencils are there in total?",
      "answer": "18"
    },
    {
      "question": "6.13C Q3: A school has 7 boxes of pencils. Each box contains 4 pencils. How many pencils are there in total?",
      "answer": "28"
    },
    {
      "question": "6.13C Q4: A school has 8 boxes of pencils. Each box contains 5 pencils. How many pencils are there in total?",
      "answer": "40"
    },
    {
      "question": "6.13C Q5: A school has 9 boxes of pencils. Each box contains 6 pencils. How many pencils are there in total?",
      "answer": "54"
    },
    {
      "question": "6.13C Q6: What is the area of a rectangle with length 3 units and width 4 units?",
      "answer": "12"
    },
    {
      "question": "6.13C Q7: What is the area of a rectangle with length 4 units and width 5 units?",
      "answer": "20"
    },
    {
      "question": "6.13C Q8: What is the area of a rectangle with length 5 units and width 6 units?",
      "answer": "30"
    },
    {
      "question": "6.13C Q9: What is the area of a rectangle with length 6 units and width 7 units?",
      "answer": "42"
    },
    {
      "question": "6.13C Q10: What is the area of a rectangle with length 7 units and width 8 units?",
      "answer": "56"
    },
    {
      "question": "6.13C Q11: A student answered 10 out of 15 questions correctly. What percent did they get right?",
      "answer": "67"
    },
    {
      "question": "6.13C Q12: A student answered 11 out of 16 questions correctly. What percent did they get right?",
      "answer": "69"
    },
    {
      "question": "6.13C Q13: A student answered 12 out of 17 questions correctly. What percent did they get right?",
      "answer": "71"
    },
    {
      "question": "6.13C Q14: A student answered 13 out of 18 questions correctly. What percent did they get right?",
      "answer": "72"
    },
    {
      "question": "6.13C Q15: A student answered 14 out of 19 questions correctly. What percent did they get right?",
      "answer": "74"
    },
    {
      "question": "6.13C Q16: Which value is equivalent to 0.25 as a fraction?",
      "answer": "1/4"
    },
    {
      "question": "6.13C Q17: Which value is equivalent to 0.5 as a fraction?",
      "answer": "2/4"
    },
    {
      "question": "6.13C Q18: Which value is equivalent to 0.75 as a fraction?",
      "answer": "3/4"
    },
    {
      "question": "6.13C Q19: Which value is equivalent to 1.0 as a fraction?",
      "answer": "4/4"
    },
    {
      "question": "6.13C Q20: Which value is equivalent to 1.25 as a fraction?",
      "answer": "5/4"
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
