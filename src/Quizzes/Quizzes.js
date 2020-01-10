import React from 'react';
import { Link } from 'react-router-dom';

class Quizzes extends React.Component {
  state = {}
  render() {
    return (
      <React.Fragment>
<br></br><br></br><br></br><br></br><br></br>
<div className="topic-page">
        <h1>AP Music Theory Quizzes</h1>
        <p>Click on a link below to take a quiz on the given topic:</p>

        <Link className="link-tag" to="/pitch-quiz">Pitch Quiz</Link>
        <br></br><br></br>
        <Link className="link-tag" to="/major-scales-and-key-signatures-quiz">Major Scales and Key Signatures Quiz</Link>
        <br></br>
        <p><i>More AP Music Theory quizzes coming soon!</i></p>
        </div>

        <div className="home-link">
        <Link to="/">Home</Link>
        </div>



      </React.Fragment>
    );
  }
}

export default Quizzes;