import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Comments from '../Comments';
import './TopicAttachments/alto-clef-lines-spaces-audio.mp3';
import altoClefLinesAndSpaces from './TopicAttachments/altoClefLinesAndSpaces.png';
import staffLinesAndSpaces from './TopicAttachments/staffLinesAndSpaces.png';
import threeDifferentClefs from './TopicAttachments/threeDifferentClefs.png';
import trebleClefLinesAndSpaces from './TopicAttachments/trebleClefLinesAndSpaces.png';
import bassClefLinesAndSpaces from './TopicAttachments/bassClefLinesAndSpaces.png';
import altoClefAudio from './TopicAttachments/alto-clef-lines-spaces-audio.mp3';
import trebleClefAudio from './TopicAttachments/treble-clef-lines-spaces-audio.mp3';
import bassClefAudio from './TopicAttachments/bass-clef-lines-spaces-audio.mp3';
class Pitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: 'filler topic',
      error: false,

    }
  }


  render() {
    return (
      <React.Fragment>
    <div className="topic-page">
        <h1>Pitch</h1>
        <div className="main-content-type">
          In physics, sound is a longitudinal wave that travels through a medium (such as air) that may be perceived by the hearing mechanism in the ear. We measure a sound according to its <strong>frequency</strong>, or rate of vibration. Frequency is measured according to vibrations per second, or <strong>Hertz (Hz)</strong>. You may know that musicians in a symphony orchestra  tune to an A 440 before performing a concert. This specific pitch has a frequency of 440 vibrations per second, or 440 Hz.
        
      <br></br><br></br>
      <h2>Pitch is FREQUENCY!</h2>
          In music, <strong>pitch</strong> refers to a tone vibrating at a specific frequency. A pitch vibrating at 1000 Hz is vibrating faster than a pitch vibrating at 300 Hz. We say that a pitch vibrating at a faster frequency is <i>higher</i> than a pitch vibrating at a slower frequency.
      <br></br><br></br>
      <h2>The Musical Staff</h2>
          Music can be written on a <strong>staff</strong>, which is simply five lines and four spaces. When referring to more than one staff, use the plural word  <strong>staves</strong>. Lines and spaces are numbered like this:
          <br></br><br></br>
          <div className="img">
      <img className="staff-lines-and-spaces" src={staffLinesAndSpaces} alt="staff-lines-and-space-names" width="25%"/>
          </div>
          <br></br><br></br>
          Each line or space has a letter name from the alphabet. The “musical alphabet” only has seven different letters - much simpler than the English alphabet! The musical alphabet goes like this:
      <br></br><br></br>
          <span><strong>A &ensp; B &ensp; C &ensp; D &ensp; E &ensp; F &ensp; G</strong></span>
          <br></br><br></br>
          Each musical pitch will be named after one of these letters. So, where is “A” on the staff? This depends on which clef is being used. A <strong>clef</strong> is a symbol that shows you where a specific pitch is located on the staff. Here are three commonly used clefs:
      <br></br><br></br>
      <div className="img">
          <img src={threeDifferentClefs} alt="three-different-clefs" height="250" />
      </div>    
          <br></br><br></br>
          <h2>G, C, and F Clefs</h2>
          You will notice that the <strong>G clef</strong> curls around the second line of the staff. This is where the pitch G is located. Similarly, the two dots in the <strong>F clef</strong> surround the fourth line of the staff. This tells us that F is located on the fourth line when this clef is used. The <strong>C clef</strong> shows us where <strong>middle C</strong> is located (the third line, in the above image). These clefs can be moved to different positions on the staff, and the pitches outlined by the shape of the clefs will then be located on different lines (or spaces). If the G clef curled around the fourth line instead of the second, the fourth line is where the pitch G would be located. The G and F clefs hardly ever move around. The G clef usually curls around the second line of the staff, and the two dots in the F clef usually surround the fourth line of the staff. When placed in these positions, the G clef is known as the <strong>treble clef</strong> and the F clef is known as the <strong>bass clef</strong>.
      <br></br><br></br>
          Here are the notes on the lines and spaces of the treble clef:
          <br></br><br></br>
          <div className="img">
          <img src={trebleClefLinesAndSpaces} alt="three-different-clefs" width="40%" />
          </div>
          <div className="audio">
          Here is what these pitches sound like:
          <br></br><br></br>
          <audio ref="audio_tag" src={trebleClefAudio} controls />
          </div>
          <br></br><br></br>
          Here are the notes on the lines and spaces of the bass clef:
          <br></br><br></br>
          <div className="img">
          <img src={bassClefLinesAndSpaces} alt="bass-clef-lines-and-space-names" width="40%" />
          </div>
          <div className="audio">
          Here is what these pitches sound like:
          <br></br><br></br>
          <audio ref="audio_tag" src={bassClefAudio} controls />
          </div>
          <br></br><br></br>
          When the C clef is shown to display C on the third line, it is known as the <strong>alto clef</strong>. Here are the notes on the lines and spaces of the alto clef:
          <br></br><br></br>
          <div className="img">
          <img src={altoClefLinesAndSpaces} alt="alto-clef-lines-and-space-names" width="40%" />
          </div>
          <div className="audio">
          Here is what these pitches sound like:
          <br></br><br></br>
          <audio ref="audio_tag" src={altoClefAudio} controls />
          </div>
          
          <br></br><br></br>
    </div>      
          <div className="quiz-link-section">
          <h2>Take the Pitch Quiz!</h2>
          <i><strong>Time to test what you have learned!</strong></i>
          <Link className="link-to-quiz" to="/pitch-quiz"><i><strong> Click here to take the Pitch Quiz.</strong></i></Link>
          </div>
        </div>
        <br></br>
        <div className="comments-section-intro">
          Have questions/comments about this material, or anything regarding AP Music Theory in general? Leave your name and a comment below!
        </div>
  


        <div>
          {!this.state.error && <Comments topic={'pitch'} />}
        </div>


        <Link to="/">Home</Link>


      </React.Fragment>
    )
  }
}

export default Pitch;