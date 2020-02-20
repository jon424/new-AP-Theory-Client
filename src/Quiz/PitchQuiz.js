import React from 'react';
import QuestionTemp from './QuestionTemp';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Quiz from 'react-quiz-component';
import { PitchQuizQuestions } from '../Questions/PitchQuizQuestions';
import Homepage from '../Homepage/Homepage';

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


//need to get obj from database.  obj is all of the JSON values needed...

const onCompleteAction = (obj) => {
  return (
    <React.Fragment>
      {obj.questions}
    </React.Fragment>
  )
}


const renderCustomResultPage = (obj) => {
  //returns an array of all question text...
  const questionText = obj.questions.map(a => a.question);

  console.log(questionText);


  return (
    <React.Fragment>

      <div>
        <div className="questionWrapper">
          <div className="card-body">
            <h2>You have completed the Pitch Quiz! You got {obj.numberOfCorrectAnswers} correct answers out of {obj.numberOfQuestions} questions!</h2>

            <h2>Your Score: {Math.ceil((obj.correctPoints / obj.totalPoints) * 100)} % </h2>

            <QuestionTemp
              question={obj.questions[0].question}
              btnOne="answerBtn btn correct"
              imgOne={a1_1}
              imgTwo={a1_2}
              imgThree={a1_3}
              imgFour={a1_4}
              btnTwo={(obj.userInput[0] === 2) ? "answerBtn incorrect" : "answerBtn btn"}
              btnThree={(obj.userInput[0] === 3) ? "answerBtn  incorrect" : "answerBtn btn"}
              btnFour={(obj.userInput[0] === 4) ? "answerBtn  incorrect" : "answerBtn btn "}
              explanation={obj.questions[0].explanation}
            />

            <QuestionTemp
              question={obj.questions[1].question}
              btnOne={(obj.userInput[1] === 1) ? "answerBtn incorrect" : "answerBtn btn"}
              btnTwo={(obj.userInput[1] === 2) ? "answerBtn incorrect" : "answerBtn btn"}
              btnThree="answerBtn btn correct"
              btnFour={(obj.userInput[1] === 4) ? "answerBtn incorrect" : "answerBtn btn"}
              imgOne={a2_1}
              imgTwo={a2_2}
              imgThree={a2_3}
              imgFour={a2_4}
              explanation={obj.questions[1].explanation}
            />

            <QuestionTemp
              question={obj.questions[2].question}
              btnOne={(obj.userInput[2] === 1) ? "answerBtn incorrect" : "answerBtn btn"}
              btnTwo="answerBtn btn correct"
              btnThree={(obj.userInput[2] === 3) ? "answerBtn incorrect" : "answerBtn btn"}
              btnFour={(obj.userInput[2] === 4) ? "answerBtn incorrect" : "answerBtn btn"}
              imgOne={a3_1}
              imgTwo={a3_2}
              imgThree={a3_3}
              imgFour={a3_4}
              explanation={obj.questions[2].explanation}
            />

            <QuestionTemp
              question={obj.questions[3].question}
              btnOne={(obj.userInput[3] === 1) ? "answerBtn incorrect" : "answerBtn btn"}
              btnTwo={(obj.userInput[3] === 2) ? "answerBtn incorrect" : "answerBtn btn"}
              btnThree={(obj.userInput[3] === 3) ? "answerBtn incorrect" : "answerBtn btn"}
              btnFour="answerBtn btn correct"
              imgOne={a4_1}
              imgTwo={a4_2}
              imgThree={a4_3}
              imgFour={a4_4}
              explanation={obj.questions[3].explanation}
            />

            <QuestionTemp
              question={obj.questions[4].question}
              btnOne={(obj.userInput[4] === 1) ? "answerBtn incorrect" : "answerBtn btn"}
              btnTwo="answerBtn btn correct"
              btnThree={(obj.userInput[4] === 3) ? "answerBtn incorrect" : "answerBtn btn"}
              btnFour={(obj.userInput[4] === 4) ? "answerBtn incorrect" : "answerBtn btn"}
              imgOne={a5_1}
              imgTwo={a5_2}
              imgThree={a5_3}
              imgFour={a5_4}
              explanation={obj.questions[4].explanation}
            />

            <QuestionTemp
              question={obj.questions[5].question}
              btnOne={(obj.userInput[5] === 1) ? "answerBtn incorrect" : "answerBtn btn"}
              btnTwo={(obj.userInput[5] === 2) ? "answerBtn incorrect" : "answerBtn btn"}
              btnThree="answerBtn btn correct"
              btnFour={(obj.userInput[5] === 4) ? "answerBtn incorrect" : "answerBtn btn"}
              imgOne={a6_1}
              imgTwo={a6_2}
              imgThree={a6_3}
              imgFour={a6_4}
              explanation={obj.questions[5].explanation}
            />

            <QuestionTemp
              question={obj.questions[6].question}
              btnOne="answerBtn btn correct"
              btnTwo={(obj.userInput[6] === 2) ? "answerBtn incorrect" : "answerBtn btn"}
              btnThree={(obj.userInput[6] === 3) ? "answerBtn incorrect" : "answerBtn btn"}
              btnFour={(obj.userInput[6] === 4) ? "answerBtn incorrect" : "answerBtn btn"}
              imgOne={a7_1}
              imgTwo={a7_2}
              imgThree={a7_3}
              imgFour={a7_4}
              explanation={obj.questions[6].explanation}
            />

            <QuestionTemp
              question={obj.questions[7].question}
              btnOne={(obj.userInput[7] === 1) ? "answerBtn incorrect" : "answerBtn btn"}
              btnTwo={(obj.userInput[7] === 2) ? "answerBtn incorrect" : "answerBtn btn"}
              btnThree={(obj.userInput[7] === 3) ? "answerBtn incorrect" : "answerBtn btn"}
              btnFour="answerBtn btn correct"
              imgOne={a8_1}
              imgTwo={a8_2}
              imgThree={a8_3}
              imgFour={a8_4}
              explanation={obj.questions[7].explanation}
            />

            <div>
              <Link to="/">Home</Link>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

function PitchQuiz() {
  return (
    <React.Fragment>
      <br></br><br></br><br></br><br></br>

      <Quiz quiz={PitchQuizQuestions} showInstantFeedback={true} continueTillCorrect={true} showDefaultResult={false} customResultPage={renderCustomResultPage} onCompleteAction={onCompleteAction} />

    </React.Fragment>
  );
}

export default PitchQuiz;
