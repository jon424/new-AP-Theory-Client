import React from 'react';
import './App.css';
import './index.css';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Topics from './Topics/Topics';
import Quizzes from './Quizzes/Quizzes';
import PitchQuiz from './Quiz/PitchQuiz';
import MajorScalesAndKeySignaturesQuiz from './Quiz/MajorScalesAndKeySignaturesQuiz';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Pitch from './Topic/Pitch';
import MajorScalesAndKeySignatures from './Topic/MajorScalesAndKeySignatures';


class App extends React.Component {

  render() {
    return (
      <div className="App">
      <div class="topnav" id="myTopnav">
      <Link to="/">AP Theory <i class="fas fa-music"></i></Link>
      
  <div class="dropdown">
    <button class="dropbtn">Topics  
      <i class="fa fa-caret-down"></i>&emsp;&emsp;&emsp;&emsp;&emsp; |
    </button>
    <div class="dropdown-content">
    <Link to="/pitch">Pitch</Link>
    <Link to="/major-scales-and-key-signatures" >Major Scales and Key Signatures</Link>
    </div>
  </div> 
  <div class="dropdown">
    <button class="dropbtn">Quizzes 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <Link to="/pitch-quiz">Pitch Quiz</Link>
    <Link to="/major-scales-and-key-signatures-quiz">Major Scales and Key Signatures Quiz</Link>
    </div>
  </div> 
  <a href="javascript:void(0);" style={{"font-size": "15px;"}} class="icon" onclick="myFunction()">&#9776;</a>
</div>

      
{function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}}


       {/* <header className="App-header">
          <ul>
            <li><Link to="/login" >Login / </Link>
              <Link to="/signup" >Sign Up</Link></li>
            <li><Link to="/topics" >Topics</Link></li>
            <li><Link to="/quizzes" >Quizzes</Link></li>
          </ul></header>

       */}  





        <Route exact path='/' component={Homepage}>
        </Route>

        <Route path='/login' component={Login}>
        </Route>

        <Route path='/signup' component={Signup}>
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

