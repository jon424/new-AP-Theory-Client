import React from 'react';

function QuestionTemp(props) {
  return (
    <div>
      <div className="result-answer-wrapper">
        <h3>
          <p>{props.question}</p>
        </h3>

        <div className="result-answer">
          <div>

            <button disabled className={props.btnOne}>
              <img src={props.imgOne} alt="answer-option-1"></img>
            </button>
          </div>

          <div>
            <button disabled className={props.btnTwo}>
              <img src={props.imgTwo} alt="answer-option-2"></img>
            </button>
          </div>

          <div>
            <button disabled className={props.btnThree}>
              <img src={props.imgThree} alt="answer-option-3"></img>
            </button>
          </div>

          <div>
            <button disabled className={props.btnFour}>
              <img src={props.imgFour} alt="answer-option-4"></img>
            </button>
          </div>
        </div>
      </div>

      <div className="explaination">
        {props.explanation}
      </div>
      
      <br></br><br></br>
    </div>
  )
}

export default QuestionTemp;
