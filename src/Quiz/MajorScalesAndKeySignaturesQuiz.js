import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Quiz from 'react-quiz-component';
import QuestionTemp from './QuestionTemp';
import { MajorScalesAndKeySignaturesQuestions } from '../Questions/MajorScalesAndKeySignaturesQuestions';
import Homepage from '../Homepage/Homepage';

import b1_1 from '../Quiz/QuizPics/b1_1.png';
import b1_2 from '../Quiz/QuizPics/b1_2.png';
import b1_3 from '../Quiz/QuizPics/b1_3.png';
import b1_4 from '../Quiz/QuizPics/b1_4.png';

import b2_1 from '../Quiz/QuizPics/b2_1.png';
import b2_2 from '../Quiz/QuizPics/b2_2.png';
import b2_3 from '../Quiz/QuizPics/b2_3.png';
import b2_4 from '../Quiz/QuizPics/b2_4.png';

import b3_1 from '../Quiz/QuizPics/b3_1.png';
import b3_2 from '../Quiz/QuizPics/b3_2.png';
import b3_3 from '../Quiz/QuizPics/b3_3.png';
import b3_4 from '../Quiz/QuizPics/b3_4.png';

import b4_1 from '../Quiz/QuizPics/b4_1.png';
import b4_2 from '../Quiz/QuizPics/b4_2.png';
import b4_3 from '../Quiz/QuizPics/b4_3.png';
import b4_4 from '../Quiz/QuizPics/b4_4.png';

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
            <h2>You have completed the Major Scales and Key Signatures Quiz! You got {obj.numberOfCorrectAnswers} correct answers out of {obj.numberOfQuestions} questions!</h2>

            <h2>Your Score: {Math.ceil((obj.correctPoints / obj.totalPoints) * 100)} % </h2>

            <QuestionTemp
              question={obj.questions[0].question}
              btnOne={(obj.userInput[0] === 1) ? "answerBtn  incorrect" : "answerBtn btn"}
              imgOne={b1_1}
              imgTwo={b1_2}
              imgThree={b1_3}
              imgFour={b1_4}
              btnTwo="answerBtn btn correct"
              btnThree={(obj.userInput[0] === 3) ? "answerBtn  incorrect" : "answerBtn btn"}
              btnFour={(obj.userInput[0] === 4) ? "answerBtn  incorrect" : "answerBtn btn "}
              explanation={obj.questions[0].explanation}
            />

            <QuestionTemp
              question={obj.questions[1].question}
              imgOne={b2_1}
              imgTwo={b2_2}
              imgThree={b2_3}
              imgFour={b2_4}
              btnOne="answerBtn btn correct"
              btnTwo={(obj.userInput[1] === 2) ? "answerBtn  incorrect" : "answerBtn btn"}
              btnThree={(obj.userInput[1] === 3) ? "answerBtn  incorrect" : "answerBtn btn"}
              btnFour={(obj.userInput[1] === 4) ? "answerBtn  incorrect" : "answerBtn btn "}
              explanation={obj.questions[1].explanation}
            />

            <QuestionTemp
              question={obj.questions[2].question}
              imgOne={b3_1}
              imgTwo={b3_2}
              imgThree={b3_3}
              imgFour={b3_4}
              btnOne={(obj.userInput[2] === 1) ? "answerBtn  incorrect" : "answerBtn btn"}
              btnTwo={(obj.userInput[2] === 2) ? "answerBtn  incorrect" : "answerBtn btn"}
              btnThree="answerBtn btn correct"
              btnFour={(obj.userInput[2] === 4) ? "answerBtn  incorrect" : "answerBtn btn "}
              explanation={obj.questions[2].explanation}
            />

            <QuestionTemp
              question={obj.questions[3].question}
              imgOne={b4_1}
              imgTwo={b4_2}
              imgThree={b4_3}
              imgFour={b4_4}
              btnOne={(obj.userInput[3] === 1) ? "answerBtn  incorrect" : "answerBtn btn"}
              btnTwo={(obj.userInput[3] === 2) ? "answerBtn  incorrect" : "answerBtn btn"}
              btnThree={(obj.userInput[3] === 3) ? "answerBtn  incorrect" : "answerBtn btn"}
              btnFour="answerBtn btn correct"
              explanation={obj.questions[2].explanation}
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

function MajorScalesAndKeySignaturesQuiz() {
  return (
    <React.Fragment>
      <br></br><br></br><br></br><br></br>

      <Quiz quiz={MajorScalesAndKeySignaturesQuestions} showInstantFeedback={true} continueTillCorrect={true} showDefaultResult={false} customResultPage={renderCustomResultPage} onCompleteAction={onCompleteAction} />

    </React.Fragment>
  );
}

export default MajorScalesAndKeySignaturesQuiz;
