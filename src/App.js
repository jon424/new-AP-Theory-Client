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
      <header class="header">
      <a href="/" className="logo">AP Theory <i class="fas fa-music"></i></a>
    {/* <a href="" class="logo">Anthony</a> */}
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">

  <li><a href="/topics" className="links" to="/topics">Topics</a></li>
    {/*<li><a href="index.html" class="links">Home</a></li>*/}
    <li><a href="/quizzes" className="links" to="/quizzes">Quizzes</a></li>
   {/* <li><a href="about.html" class="links">About</a></li> */}
   {/* <li><a href="portfolio.html" class="links">Portfolio</a></li> */}
   {/* <li><a href="contact.html" class="links">Contact</a></li> */}
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
