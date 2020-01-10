import React from 'react';
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

            {/*  <div className="quiz-result-filter">
              <select>
                <option value="all">All</option>
                <option value="correct">Correct</option>
                <option value="incorrect">Incorrect</option>
              </select>
               </div> */}


            {/********************* question 1 results */}
            <div className="result-answer-wrapper">
              <h3>
                <p>{obj.questions[0].question}</p>
              </h3>

              <div className="result-answer">
                {/* */}
                <div>

                  <button disabled className="answerBtn btn correct">
                    <img src={a1_1} alt="answer-option-1"></img>
                  </button>
                </div>

                <div>
                  <button disabled className={(obj.userInput[0] === 2) ? "answerBtn btn incorrect" : "answerBtn btn"}>
                    <img src={a1_2} alt="answer-option-2"></img>
                  </button>
                </div>

                <div>
                  <button disabled className={(obj.userInput[0] === 3) ? "answerBtn btn incorrect" : "answerBtn btn"}>
                    <img src={a1_3} alt="answer-option-3"></img>
                  </button>
                </div>

                <div>
                  <button disabled className={(obj.userInput[0] === 4) ? "answerBtn btn incorrect " : "answerBtn btn"}>
                    <img src={a1_4} alt="answer-option-4"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="explaination">
            {obj.questions[0].explanation}

          </div>
          <br></br><br></br>
          {/******************* END OF result answer wrapper for question 1 */}




          {/********************* question 2 results */}
          <div className="result-answer-wrapper">
            <h3>
              <p>{obj.questions[1].question}</p>
            </h3>

            <div className="result-answer">
              {/* */}
              <div>
                <button disabled className={(obj.userInput[1] === 1) ? "answerBtn btn incorrect" : "answerBtn btn"}>
                  <img src={a2_1} alt="answer-option-1"></img>
                </button>
              </div>

              <div>
                <button disabled className={(obj.userInput[1] === 2) ? "answerBtn btn incorrect" : "answerBtn btn"}>
                  <img src={a2_2} alt="answer-option-2"></img>
                </button>
              </div>

              <div>
                <button disabled className="answerBtn btn correct">
                  <img src={a2_3} alt="answer-option-3"></img>
                </button>
              </div>

              <div>
                <button disabled className={(obj.userInput[1] === 4) ? "answerBtn btn incorrect" : "answerBtn btn"}>
                  <img src={a2_4} alt="answer-option-4"></img>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="explaination">
          {obj.questions[1].explanation}
        </div>
        <br></br><br></br>
        {/******************* END OF result answer wrapper for question 2 */}




        {/********************* question 3 results */}
        <div className="result-answer-wrapper">
          <h3>
            <p>{obj.questions[2].question}</p>
          </h3>

          <div className="result-answer">
            {/* */}
            <div>
              <button disabled className={(obj.userInput[2] === 1) ? "answerBtn btn incorrect" : "answerBtn btn"}>
                <img src={a3_1} alt="answer-option-1"></img>
              </button>
            </div>

            <div>
              <button disabled className="answerBtn btn correct">
                <img src={a3_2} alt="answer-option-2"></img>
              </button>
            </div>

            <div>
              <button disabled className={(obj.userInput[2] === 3) ? "answerBtn btn incorrect" : "answerBtn btn"}>
                <img src={a3_3} alt="answer-option-3"></img>
              </button>
            </div>

            <div>
              <button disabled className={(obj.userInput[2] === 4) ? "answerBtn btn incorrect" : "answerBtn btn"}>
                <img src={a3_4} alt="answer-option-4"></img>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="explaination">
        {obj.questions[2].explanation}
      </div>
      <br></br><br></br>
      {/******************* END OF result answer wrapper for question 3 */}







      {/********************* question 4 results */}
      <div className="result-answer-wrapper">
        <h3>
          <p>{obj.questions[3].question}</p>
        </h3>

        <div className="result-answer">
          {/* */}
          <div>
            <button disabled className={(obj.userInput[3] === 1) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a4_1} alt="answer-option-1"></img>
            </button>
          </div>

          <div>
            <button disabled className={(obj.userInput[3] === 2) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a4_2} alt="answer-option-2"></img>
            </button>
          </div>

          <div>
            <button disabled className={(obj.userInput[3] === 3) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a4_3} alt="answer-option-3"></img>
            </button>
          </div>

          <div>
            <button disabled className="answerBtn btn correct">
              <img src={a4_4} alt="answer-option-4"></img>
            </button>
          </div>
        </div>
      </div>

      <div className="explaination">
        {obj.questions[3].explanation}
      </div>
      <br></br><br></br>
      {/******************* END OF result answer wrapper for question 4 */}




      {/********************* question 5 results */}
      <div className="result-answer-wrapper">
        <h3>
          <p>{obj.questions[4].question}</p>
        </h3>

        <div className="result-answer">
          {/* */}
          <div>
            <button disabled className={(obj.userInput[4] === 1) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a5_1} alt="answer-option-1"></img>
            </button>
          </div>

          <div>
            <button disabled className="answerBtn btn correct">
              <img src={a5_2} alt="answer-option-2"></img>
            </button>
          </div>

          <div>
            <button disabled className={(obj.userInput[4] === 3) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a5_3} alt="answer-option-3"></img>
            </button>
          </div>

          <div>
            <button disabled className={(obj.userInput[4] === 4) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a5_4} alt="answer-option-4"></img>
            </button>
          </div>
        </div>
      </div>

      <div className="explaination">
        {obj.questions[4].explanation}
      </div>
      <br></br><br></br>
      {/******************* END OF result answer wrapper for question 5 */}




      {/********************* question 6 results */}
      <div className="result-answer-wrapper">
        <h3>
          <p>{obj.questions[5].question}</p>
        </h3>

        <div className="result-answer">
          {/* */}
          <div>
            <button disabled className={(obj.userInput[5] === 1) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a6_1} alt="answer-option-1"></img>
            </button>
          </div>

          <div>
            <button disabled className={(obj.userInput[5] === 2) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a6_2} alt="answer-option-2"></img>
            </button>
          </div>

          <div>
            <button disabled className="answerBtn btn correct">
              <img src={a6_3} alt="answer-option-3"></img>
            </button>
          </div>

          <div>
            <button disabled className={(obj.userInput[5] === 4) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a6_4} alt="answer-option-4"></img>
            </button>
          </div>
        </div>
      </div>

      <div className="explaination">
        {obj.questions[5].explanation}
      </div>
      <br></br><br></br>
      {/******************* END OF result answer wrapper for question 6 */}




      {/********************* question 7 results */}
      <div className="result-answer-wrapper">
        <h3>
          <p>{obj.questions[6].question}</p>
        </h3>

        <div className="result-answer">
          {/* */}
          <div>
            <button disabled className="answerBtn btn correct">
              <img src={a7_1} alt="answer-option-1"></img>
            </button>
          </div>

          <div>
            <button disabled className={(obj.userInput[6] === 2) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a7_2} alt="answer-option-2"></img>
            </button>
          </div>

          <div>
            <button disabled className={(obj.userInput[6] === 3) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a7_3} alt="answer-option-3"></img>
            </button>
          </div>

          <div>
            <button disabled className={(obj.userInput[6] === 4) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a7_4} alt="answer-option-4"></img>
            </button>
          </div>
        </div>
      </div>

      <div className="explaination">
        {obj.questions[6].explanation}
      </div>
      <br></br><br></br>
      {/******************* END OF result answer wrapper for question 7 */}




      {/********************* question 8 results */}
      <div className="result-answer-wrapper">
        <h3>
          <p>{obj.questions[7].question}</p>
        </h3>

        <div className="result-answer">
          {/* */}
          <div>
            <button disabled className={(obj.userInput[7] === 1) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a8_1} alt="answer-option-1"></img>
            </button>
          </div>

          <div>
            <button disabled className={(obj.userInput[7] === 2) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a8_2} alt="answer-option-2"></img>
            </button>
          </div>

          <div>
            <button disabled className={(obj.userInput[7] === 3) ? "answerBtn btn incorrect" : "answerBtn btn"}>
              <img src={a8_3} alt="answer-option-3"></img>
            </button>
          </div>

          <div>
            <button disabled className="answerBtn btn correct">
              <img src={a8_4} alt="answer-option-4"></img>
            </button>
          </div>
        </div>
      </div>

      <div className="explaination">
        {obj.questions[7].explanation}
      </div>
      <br></br><br></br>
      {/******************* END OF result answer wrapper for question 8 */}


      <div>
        <Link to="/">Home</Link>
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
