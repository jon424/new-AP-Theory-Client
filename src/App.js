import React from 'react';
import './App.css';
import './index.css';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Topics from './Topics/Topics';
import Quizzes from './Quizzes/Quizzes';
import PitchQuiz from './Quiz/PitchQuiz';
import MajorScalesAndKeySignaturesQuiz from './Quiz/MajorScalesAndKeySignaturesQuiz';
import Pitch from './Topic/Pitch';
import MajorScalesAndKeySignatures from './Topic/MajorScalesAndKeySignatures';


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="header">
          <a href="/" className="logo">AP Theory <i className="fas fa-music"></i></a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li><a href="/topics" className="links" to="/topics">Topics</a></li>
            <li><a href="/quizzes" className="links" to="/quizzes">Quizzes</a></li>
          </ul>
        </header>

        <Route exact path='/' component={Homepage}>
        </Route>

        <Route path='/topics' component={Topics} >
        </Route>

        <Route path='/pitch' component={Pitch} >
        </Route>

        <Route path='/major-scales-and-key-signatures' component={MajorScalesAndKeySignatures} >
        </Route>

        <Route path='/quizzes' component={Quizzes} >
        </Route>

        <Route exact path="/pitch-quiz" component={PitchQuiz}>
        </Route>

        <Route exact path="/major-scales-and-key-signatures-quiz" component={MajorScalesAndKeySignaturesQuiz}>
        </Route>
      </div>
    )
  };
}


export default App;
