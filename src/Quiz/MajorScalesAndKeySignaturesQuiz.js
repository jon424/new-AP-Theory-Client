import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Quiz from 'react-quiz-component';
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
              
                  <button disabled className={(obj.userInput[0] === 1) ? "answerBtn btn incorrect" : "answerBtn btn" }>
                  <img src={b1_1} alt="answer-option-1"></img>
                  </button>
                </div>

                <div>
                  <button disabled className="answerBtn btn correct">
                  <img src={b1_2} alt="answer-option-2"></img>
                  </button>
                </div>

                <div>
                  <button disabled className={(obj.userInput[0] === 3) ? "answerBtn btn incorrect" : "answerBtn btn"}>
                  <img src={b1_3} alt="answer-option-3"></img>
                  </button>
                </div>

                <div>
                  <button disabled className={(obj.userInput[0] === 4) ? "answerBtn btn incorrect " : "answerBtn btn"}>
                  <img src={b1_4} alt="answer-option-4"></img>
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
                <button disabled className="answerBtn btn correct">
                <img src={b2_1} alt="answer-option-1"></img>
                </button>
              </div>

              <div>
              <button disabled className={(obj.userInput[1] === 2) ? "answerBtn btn incorrect" : "answerBtn btn" }>
              <img src={b2_2} alt="answer-option-2"></img>
                </button>
              </div>

              <div>
              <button disabled className={(obj.userInput[1] === 3) ? "answerBtn btn incorrect" : "answerBtn btn" }>
              <img src={b2_3} alt="answer-option-3"></img>
                </button>
              </div>

              <div>
              <button disabled className={(obj.userInput[1] === 4) ? "answerBtn btn incorrect" : "answerBtn btn" }>
              <img src={b2_4} alt="answer-option-4"></img>
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
               <button disabled className={(obj.userInput[2] === 1) ? "answerBtn btn incorrect" : "answerBtn btn" }>
               <img src={b3_1} alt="answer-option-1"></img>
                 </button>
               </div>
 
               <div>
               <button disabled className={(obj.userInput[2] === 2) ? "answerBtn btn incorrect" : "answerBtn btn" }>
               <img src={b3_2} alt="answer-option-2"></img>
                 </button>
               </div>
 
               <div>
                 <button disabled className="answerBtn btn correct">
                 <img src={b3_3} alt="answer-option-3"></img>
                 </button>
               </div>
 
               <div>
               <button disabled className={(obj.userInput[2] === 4) ? "answerBtn btn incorrect" : "answerBtn btn" }>
               <img src={b3_4} alt="answer-option-4"></img>
                 </button>
               </div>
             </div>
             </div>
             </div>
 
             <div className="explaination">
               {obj.questions[1].explanation}
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
               <button disabled className={(obj.userInput[3] === 1) ? "answerBtn btn incorrect" : "answerBtn btn" }>
                 <img src={b4_1} alt="answer-option-1"></img>
                 </button>
               </div>
 
               <div>
               <button disabled className={(obj.userInput[3] === 2) ? "answerBtn btn incorrect" : "answerBtn btn" }>
                 <img src={b4_2} alt="answer-option-2"></img>
                 </button>
               </div>
 
               <div>
               <button disabled className={(obj.userInput[3] === 3) ? "answerBtn btn incorrect" : "answerBtn btn" }>
                 <img src={b4_3} alt="answer-option-3"></img>
                 </button>
               </div>
 
               <div>
                 <button disabled className="answerBtn btn correct">
                 <img src={b4_4} alt="answer-option-4"></img>
                 </button>
               </div>
             </div>
             </div>
 
             <div className="explaination">
               {obj.questions[1].explanation}
             </div>
             <br></br><br></br>
             {/******************* END OF result answer wrapper for question 4 */}




            
            
             

      <div>
        <Link to="/">Home</Link>
      </div>

    </React.Fragment>

  )

}

function MajorScalesAndKeySignaturesQuiz() {
  return (
    <React.Fragment>
    <br></br><br></br><br></br><br></br>

      <Quiz quiz={MajorScalesAndKeySignaturesQuestions} showInstantFeedback={true} continueTillCorrect={true} showDefaultResult={false} customResultPage={renderCustomResultPage} onCompleteAction={onCompleteAction}  />



    </React.Fragment>
  );
}

export default MajorScalesAndKeySignaturesQuiz;
