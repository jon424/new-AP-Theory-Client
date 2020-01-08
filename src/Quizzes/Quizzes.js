import React from 'react';
import { Link } from 'react-router-dom';

class Quizzes extends React.Component {
  state = {}
  render() {
    return (
      <React.Fragment>

        <h1>AP Music Theory Quizzes</h1>
        <p>Click on a link below to take a quiz on the given topic:</p>

        <Link to="/pitch-quiz">Pitch Quiz</Link>
        <br></br>
        <Link to="/major-scales-and-key-signatures-quiz">Major Scales and Key Signatures Quiz</Link>



      </React.Fragment>
    );
  }
}

export default Quizzes;