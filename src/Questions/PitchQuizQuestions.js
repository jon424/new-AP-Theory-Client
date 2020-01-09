import React from 'react';

import a1_1 from '../Quiz/QuizPics/a1_1.png';
import a1_2 from '../Quiz/QuizPics/a1_2.png';
import a1_3 from '../Quiz/QuizPics/a1_3.png';
import a1_4 from '../Quiz/QuizPics/a1_4.png';

import a2_1 from '../Quiz/QuizPics/a2_1.png';
import a2_2 from '../Quiz/QuizPics/a2_2.png';
import a2_3 from '../Quiz/QuizPics/a2_3.png';
import a2_4 from '../Quiz/QuizPics/a2_4.png';

import a3_1 from '../Quiz/QuizPics/a3_1.png';
import a3_2 from '../Quiz/QuizPics/a3_2.png';
import a3_3 from '../Quiz/QuizPics/a3_3.png';
import a3_4 from '../Quiz/QuizPics/a3_4.png';

import a4_1 from '../Quiz/QuizPics/a4_1.png';
import a4_2 from '../Quiz/QuizPics/a4_2.png';
import a4_3 from '../Quiz/QuizPics/a4_3.png';
import a4_4 from '../Quiz/QuizPics/a4_4.png';

import a5_1 from '../Quiz/QuizPics/a5_1.png';
import a5_2 from '../Quiz/QuizPics/a5_2.png';
import a5_3 from '../Quiz/QuizPics/a5_3.png';
import a5_4 from '../Quiz/QuizPics/a5_4.png';

import a6_1 from '../Quiz/QuizPics/a6_1.png';
import a6_2 from '../Quiz/QuizPics/a6_2.png';
import a6_3 from '../Quiz/QuizPics/a6_3.png';
import a6_4 from '../Quiz/QuizPics/a6_4.png';

import a7_1 from '../Quiz/QuizPics/a7_1.png';
import a7_2 from '../Quiz/QuizPics/a7_2.png';
import a7_3 from '../Quiz/QuizPics/a7_3.png';
import a7_4 from '../Quiz/QuizPics/a7_4.png';

import a8_1 from '../Quiz/QuizPics/a8_1.png';
import a8_2 from '../Quiz/QuizPics/a8_2.png';
import a8_3 from '../Quiz/QuizPics/a8_3.png';
import a8_4 from '../Quiz/QuizPics/a8_4.png';


export const PitchQuizQuestions =  {
  "quizTitle": "Pitch Quiz",
  "quizSynopsis": "Test your knowledge on reading musical pitch, as covered on the AP Music Theory Exam.",
  "questions": [
    {//`<img src={'../Quiz/QuizPics/pitch_quiz_q1.png'} alt='question_1' />`
    //"https://images.unsplash.com/photo-1554079501-a254f876fc77?ixlib=rb-1.2.1&w=1000&q=80"
    //question 1
    "question": "Which pitch is 'A'?",
    "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
    "questionType": "photo",
    "answerSelectionType": "single",
    "answers": [
      `${a1_1}`,
      `${a1_2}`,
      `${a1_3}`,
      `${a1_4}`
    ],
    "correctAnswer": "1",
    "messageForCorrectAnswer": "Correct answer. Good job.",
    "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
    "explanation": "'A' is notated on the second space of the treble clef.",
    "point": "20"
    },
    {//question 2
      "question": "Which pitch is 'C'?",
      "questionType": "photo",
      //"answerSelectionType": "single",
      "answers": [
      `${a2_1}`,
      `${a2_2}`,
      `${a2_3}`,
      `${a2_4}`
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "'C' is notated on the second space of the bass clef.",
      "point": "20"
    },
    {//question 3
      "question": "Which pitch is 'F'?",
      "questionType": "photo",
      //"answerSelectionType": "single",
      "answers": [
        `${a3_1}`,
        `${a3_2}`,
        `${a3_3}`,
        `${a3_4}`
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "'F' is notated on the fourth line of the bass clef.",
      "point": "20"
    },
    {//question 4
      "question": "Which pitch is 'G'?",
      "questionType": "photo",
      //"answerSelectionType": "single",
      "answers": [
        `${a4_1}`,
        `${a4_2}`,
        `${a4_3}`,
        `${a4_4}`
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "'G' is notated on the second line of the treble clef.",
      "point": "20"
    },
    {//question 5
      "question": "Which pitch is 'B'?",
      "questionType": "photo",
      //"answerSelectionType": "single",
      "answers": [
        `${a5_1}`,
        `${a5_2}`,
        `${a5_3}`,
        `${a5_4}`
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "'B' is notated on the third line of the treble clef.",
      "point": "20"
    },
    {//question 6
      "question": "Which pitch is 'E'?",
      "questionType": "photo",
      //"answerSelectionType": "single",
      "answers": [
        `${a6_1}`,
        `${a6_2}`,
        `${a6_3}`,
        `${a6_4}`
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "'E' is notated on the fourth line of the alto clef.",
      "point": "20"
    },
    {//question 7
      "question": "Which pitch is 'D'?",
      "questionType": "photo",
      //"answerSelectionType": "single",
      "answers": [
        `${a7_1}`,
        `${a7_2}`,
        `${a7_3}`,
        `${a7_4}`
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "'D' is notated on the third line of the bass clef.",
      "point": "20"
    },
    {//question 8
      "question": "Which pitch is 'F'?",
      "questionType": "photo",
      //"answerSelectionType": "single",
      "answers": [
        `${a8_1}`,
        `${a8_2}`,
        `${a8_3}`,
        `${a8_4}`
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "'F' is notated on the fifth line of the treble clef.",
      "point": "20"
    }
  ]
} 
