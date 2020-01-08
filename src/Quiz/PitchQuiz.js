import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Quiz from 'react-quiz-component';
import { PitchQuizQuestions } from '../Questions/PitchQuizQuestions';
import Homepage from '../Homepage/Homepage';


//need to get obj from database.  obj is all of the JSON values needed...

const onCompleteAction = (obj) => {
  return (
    <React.Fragment>
      {obj.questions}
    </React.Fragment>
  )
  console.log(obj);
}


const renderCustomResultPage = (obj) => {
  //returns an array of all question text...
  const questionText = obj.questions.map(a => a.question);

  console.log(questionText);


  return (
    <React.Fragment>
      <div className="react-quiz-container">
        <div className="questionWrapper">
          <div className="card-body">
            <h2>You have completed the Pitch Quiz! You got {obj.numberOfCorrectAnswers} correct answers out of {obj.numberOfQuestions} questions!</h2>

            <h2>Your Score: {Math.ceil((obj.correctPoints / obj.totalPoints) * 100)} % </h2>

            <div className="quiz-result-filter">
              <select>
                <option value="all">All</option>
                <option value="correct">Correct</option>
                <option value="incorrect">Incorrect</option>
              </select>
            </div>

            <div className="result-answer-wrapper">
              <h3>
                {/*<p>{obj.questions[0].question}</p>*/}
                <p>{questionText}</p>
              </h3>

              <div className="result-answer">
                <div>
                  <button disabled className="answerBtn btn">
                    <span>true</span>
                  </button>
                </div>
                <div>
                  <button disabled className="answerBtn btn correct ">
                    <span>false</span>
                  </button>
                </div>
              </div>

              <div className="explaination">
                {obj.questions[0].explanation}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>

    </React.Fragment>

  )

}

function PitchQuiz() {
  return (
    <React.Fragment>

      <Quiz quiz={PitchQuizQuestions} showInstantFeedback={true} continueTillCorrect={true} showDefaultResult={false} customResultPage={renderCustomResultPage} onCompleteAction={onCompleteAction} />



    </React.Fragment>
  );
  
}

export default PitchQuiz;
