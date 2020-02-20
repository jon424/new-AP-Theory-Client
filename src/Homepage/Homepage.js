import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import cover from '../Topic/TopicAttachments/cover-photo.jpg';
import '../index.css';
class Homepage extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="landing-page">
        <br></br><br></br><br></br><br></br>
          <h1>AP Theory <i className="fas fa-music"></i></h1>
          <div className="main-content-type">
            <h2>A guide for Advanced Placement Music Theory class!</h2>

            <h3>Contains <Link to="/topics">Topic Overviews</Link> and graded practice <Link to="/quizzes">Quizzes</Link> to help you succeed on the <strong>AP Music Theory Exam.</strong></h3>
            <br></br>
            <h2>How To Use This Site</h2>
            <h3>Click on Topics in the main menu (above) to learn about key topics on the AP Music Theory Exam. Take Quizzes over any and all topics in the Quizzes section.</h3>
            <br></br>

            <img className="cover-photo" src={cover} alt="keyboard-with-four-part-harmony-notation"/>


          </div>
        </div>



      </React.Fragment>
    );
  }
}

export default Homepage;