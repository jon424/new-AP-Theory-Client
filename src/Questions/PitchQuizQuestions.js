import React from 'react';

import q1 from '../Quiz/QuizPics/pitch_quiz_q1.png';
import q2 from '../Quiz/QuizPics/pitch_quiz_q2.png';
import q3 from '../Quiz/QuizPics/pitch_quiz_q3.png';
import q4 from '../Quiz/QuizPics/pitch_quiz_q4.png';
import q5 from '../Quiz/QuizPics/pitch_quiz_q5.png';
import q6 from '../Quiz/QuizPics/pitch_quiz_q6.png';
import q7 from '../Quiz/QuizPics/pitch_quiz_q7.png';
import q8 from '../Quiz/QuizPics/pitch_quiz_q8.png';

export const PitchQuizQuestions =  {
  "quizTitle": "Pitch Quiz",
  "quizSynopsis": "Test your knowledge on reading musical pitch, as covered on the AP Music Theory Exam.",
  "questions": [
    {//`<img src=${q1} alt='question_1' />`
    //"https://images.unsplash.com/photo-1554079501-a254f876fc77?ixlib=rb-1.2.1&w=1000&q=80"
    "question": "this is question",
    "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
    "questionType": "text",
    "answerSelectionType": "single",
    "answers": [
      "this.getState()",
      "this.prototype.stateValue",
      "this.state",
      "this.values"
    ],
    "correctAnswer": "3",
    "messageForCorrectAnswer": "Correct answer. Good job.",
    "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
    "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "point": "20"
    },
    {
      "question": "<img src={q1} alt='question_1' />",
      "questionType": "text",
      //"answerSelectionType": "single",
      "answers": [
        "F",
        "E",
        "G",
        "D"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "The pitch is notated on the second line in the treble clef. This is where 'G' is located.",
      "point": "20"
    },
    {
      "question": "<img src={q1} alt='question_1' />",
      "questionType": "text",
      //"answerSelectionType": "single",
      "answers": [
        "A",
        "B",
        "E",
        "D"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "The pitch is notated on the fifth line in the bass clef. This is where 'A' is located.",
      "point": "20"
    },
    {
      "question": "<img src={q1} alt='question_1' />",
      "questionType": "text",
      //"answerSelectionType": "single",
      "answers": [
        "G",
        "A",
        "C",
        "E"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "The pitch is notated on the third space in the bass clef. This is where 'E' is located.",
      "point": "20"
    },
    {
      "question": "<img src={q1} alt='question_1' />",
      "questionType": "text",
      //"answerSelectionType": "single",
      "answers": [
        "B",
        "D",
        "G",
        "A"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "The pitch is notated on the second line in the bass clef. This is where 'B' is located.",
      "point": "20"
    },
    {
      "question": "<img src={q1} alt='question_1' />",
      "questionType": "text",
      //"answerSelectionType": "single",
      "answers": [
        "D",
        "A",
        "C",
        "E"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "The pitch is notated on the third line in the alto clef. This is where 'C' is located.",
      "point": "20"
    },
    {
      "question": "<img src={q1} alt='question_1' />",
      "questionType": "text",
      //"answerSelectionType": "single",
      "answers": [
        "F",
        "B",
        "A",
        "G"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "The pitch is notated on the second space in the alto clef. This is where 'B' is located.",
      "point": "20"
    },
    {
      "question": "<img src={q1} alt='question_1' />",
      "questionType": "text",
      //"answerSelectionType": "single",
      "answers": [
        "F",
        "B",
        "A",
        "E"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "The pitch is notated on the first line in the treble clef. This is where 'F' is located.",
      "point": "20"
    }
  ]
} 
