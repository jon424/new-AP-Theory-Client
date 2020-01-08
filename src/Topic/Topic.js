import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Comments from '../Comments';
import './TopicAttachments/alto-clef-lines-spaces-audio.mp3';
import altoClefLinesAndSpaces from './TopicAttachments/altoClefLinesAndSpaces.png';
import altoClefAudio from './TopicAttachments/alto-clef-lines-spaces-audio.mp3';

class Topic extends React.Component {
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
  <h1>Pitch</h1>
    <div id="topic-page">
      In physics, sound is a longitudinal wave that travels through a medium (such as air) that may be perceived by the hearing mechanism in the ear. We measure a sound according to its frequency, or rate of vibration. This frequency is measured according to vibrations per second, or Hertz (Hz). You may know that musicians in a symphony orchestra  tune to an A 440 before performing a concert. This specific pitch has a frequency of 440 vibrations per second, or 440 Hz.
      <br></br><br></br>
      In music, pitch refers to a tone vibrating at a specific frequency. A pitch vibrating at 1000 Hz is vibrating faster than a pitch vibrating at 300 Hz. We say that a pitch vibrating at a faster frequency is higher than a pitch vibrating at a slower frequency.
      <br></br><br></br>
      Music can be written on a staff, which is simply five lines and four spaces. When referring to more than one staff, use the plural staves. Lines and spaces are numbered like this:
      [placeholder for staffLinesAndSpaces graphic]
      <br></br><br></br>
      Each line or space has a letter name from the alphabet. The “musical alphabet” only has seven different letters - much simpler than the English alphabet! The musical alphabet goes like this:
      <br></br><br></br>
      A B C D E F G
      <br></br><br></br>
      Each musical pitch will be named after one of these letters. So, where is “A” on the staff? This depends on which clef is being used. A clef is a symbol that shows you where a specific pitch is located on the staff. Here are three commonly used clefs:
      <br></br><br></br>
      [placeholder for threeDifferentClefs graphic]
      <br></br><br></br>
      You will notice that the G clef curls around the second line of the staff. This is where the pitch G is located. Similarly, the two dots in the F clef surround the fourth line of the staff. This tells us that F is located on the fourth line when this clef is used. The C clef shows us where middle C is located (the third line, in the above image). These clefs can be moved to different positions on the staff, and the pitches outlined by the shape of the clefs will then be located on different lines (or spaces). If the G clef curled around the fourth line instead of the second, the fourth line is where the pitch G would be located. The G and F clefs hardly ever move around. The G clef usually curls around the second line of the staff, and the two dots in the F clef usually surround the fourth line of the staff. When placed in these positions, the G clef is known as the treble clef and the F clef is known as the bass clef.
      <br></br><br></br>
      Here are the notes on the lines and spaces of the treble clef:
      Placeholder for trebleClefLinesAndSpaces
      <br></br><br></br>
      Here is what these pitches sound like:
      Placeholder for treble-clef-lines-spaces-audio.mp3
      <br></br><br></br>
      Here are the notes on the lines and spaces of the bass clef:
      Placeholder for bassClefLinesAndSpaces
      <br></br><br></br>
      Here is what these pitches sound like:
      Placeholder for bass-clef-lines-spaces-audio.mp3
      <br></br><br></br>
      When the C clef is shown to display C on the third line, it is known as the alto clef. Here are the notes on the lines and spaces of the alto clef:
      <img src={altoClefLinesAndSpaces} alt="alto-clef-lines-and-space-names" width="40%" />
      <br></br><br></br>
      Here is what these pitches sound like:
      <audio ref="audio_tag" src={altoClefAudio} controls  />
      <br></br><br></br>
      Time to test what you have learned! Click here to take the Pitch Quiz.
          
    </div>


    <div>
    {!this.state.error && <Comments topic={'pitch'} />}
    </div>



    <Link to="/">Home</Link>


</React.Fragment>
    )
  }
}
//commentlj;ljlj
//another comment line 3:33pm 

export default Topic;