import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Comments from '../Comments';
//TopicAttachments...
import CircleOfFifths from './TopicAttachments/Circle-of-Fifths-Simple-1024x1024.png';
import Keyboard from './TopicAttachments/keyboard-image.jpg';
import ChromaticScaleSharps from './TopicAttachments/chromatic-scale-sharps.png';
import ChromaticScaleFlats from './TopicAttachments/chromatic-scale-flats.png';
import FMajorKeyPic from './TopicAttachments/FMajorKeySignaturePic.png';
import SharpKeys from './TopicAttachments/SharpKeySignaturesPic.png';
import FlatKeys from './TopicAttachments/FlatKeySignaturesPic.png';
import Circle from './TopicAttachments/Circle-of-Fifths-Simple-1024x1024.png';
import ChromaticSharps from './TopicAttachments/chromatic-scale-sharps-audio.mp3';
import ChromaticFlats from './TopicAttachments/chromatic-scale-flats-audio.mp3';
import '../index.css';

class MajorScalesAndKeySignatures extends React.Component {
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
      <br></br><br></br><br></br><br></br><br></br>
      <div className="topic-page">
        <h1>Major Scales and Key Signatures</h1>
<div className="main-content-type">
  <h2>Major Scales and Key Signatures</h2>
  A <strong>scale</strong> is simply a collection of pitches in whole and half-step patterns. There are many different kinds of scales based on the patterns of whole and half-steps that they contain. This section will focus on one of these types of scales: the <i>major scale</i>.
  <br></br><br></br>
  In order to understand any kind of scale, it helps to first understand the <strong>chromatic scale.</strong> The chromatic scale is a scale with all pitches spaced a half-step apart. If you look at a piano keyboard, play a key with your finger, and then move to the next closest key on the keyboard - which may be a black or a white key depending on which pitch you started with - and continue in this way, you are playing a chromatic scale. The piano keyboard is set up in such a way that each key is a half-step apart from the key closest to it - above (higher in pitch) or below (lower in pitch).
  <br></br><br></br>
  <img className="keyboard-image" src={Keyboard} alt="piano-keyboard" width="25%"/>
  <br></br><br></br>
  
  <h2>Sharps and Flats</h2>
  
  You may notice that the black keys of the piano keyboard have two different names based on the symbol used to describe the letter. A <strong>sharp</strong> is a symbol that looks like a hashtag: <strong>#</strong>. A sharp represents a pitch from the musical alphabet (<i>remember:</i> <strong>A B C D E F G</strong>) that has been <i>raised</i> a half-step. So, “C#” is the name of the pitch located a half-step higher than C. A <strong>flat</strong> is a symbol that looks like a lowercase letter “b.” A flat represents a pitch from the musical alphabet that has been <i>lowered</i> a half-step. So, “Db” is the name of the pitch located a half-step lower than D. 
  <h2>Enharmonic Equivalents</h2>
  It is important to understand that each black key can have two different names for the same sound. C# and Db both sound exactly the same, they just have different names. Sometimes, the sound represented in musical notation  is written as C#, other times it is written as Db. Understand that these spellings represent the same exact sound, regardless of the spelling of the name of the pitch. Two pitches that have the same sound, but different names are called <strong>enharmonic equivalents,</strong> an important vocabulary term to know for the AP Music Theory Exam.
  <br></br><br></br>
  When the chromatic scale is written in <i>ascending pitch</i> (from low to higher pitches), it is written with sharps, like this:
  <br></br><br></br>
  <img className="chromatic-scale-sharps" src={ChromaticScaleSharps} alt="chromatic-scale-sharps"/>
  <br></br><br></br>
  <div className="listen-centered">
  Listen:
  </div>
  <br></br>
  <audio className="audio" ref="audio_tag" src={ChromaticSharps} controls />
  <br></br><br></br>
  <h2>Sharps and Flats in the Chromatic Scale</h2>
  When the chromatic scale is written in <i>descending pitch</i> (from high to lower pitches), it is written with flats, like this:
  <br></br><br></br>
  <img className="chromatic-scale-flats" src={ChromaticScaleFlats} alt="chromatic-scale-flats"/>
  <br></br><br></br>
  <div className="listen-centered">
  Listen:
  </div>
  <br></br>
  <audio className="audio" ref="audio_tag" src={ChromaticFlats} controls />
  <br></br><br></br>
  
  <h2>The Major Scale</h2>
  The <strong>major scale</strong> has a different pattern than the chromatic scale - it is arranged using both whole and half-steps. A <strong>whole step</strong> is made up of two half-steps. Just like in math, two halves equal one whole.
  <br></br><br></br>
  Imagine placing your finger on the pitch “C” on the piano (any C will do - take a look at the keyboard picture above if you don't have a keyboard in front of you). A whole step above "C" would be "D", since there are two half-steps between "C"and "D":
   {/* <div className="half-step-explained"> */}
      <ul>
        <li>C to C# = 1 half-step</li>
        <br></br>
        <li>C# to D = 1 half-step</li>
        <br></br>
        <li>Therefore, C to D = 1 whue-step</li>
      </ul>
   
<h2>Major Scale Pattern of Whole and Half-Steps</h2>
          All major scales have the same pattern. <i>It is extremely helpful to memorize this pattern:</i>
          <br></br><br></br>
          <div className="steps-centered">
          <strong>W-W-H-W-W-W-H</strong>
          </div>
          <br></br><br></br>
    
{/* <div className="naming-major-scales"> */}
      <h2>Naming Major Scales</h2>
          The name of a particular major scale starts with the name of the first pitch in the scale. Let’s “build” the F major scale.
          <br></br><br></br>
          Step 1:  Start on F and write the musical alphabet until you get to the same letter (“F”) once again:
          <br></br><br></br>
          <div className="f-major-notes">
          <span><strong>F &ensp; G &ensp; A &ensp; B &ensp; C &ensp; D &ensp; E &ensp; F</strong></span>
          </div>
          <br></br><br></br>
          Step 2: Use the pattern of whole and half-steps (W-W-H-W-W-W-H). Use <i>only</i> sharps <strong>OR</strong> flats - not both. The letters in the musical alphabet from step 1 determine if you should use sharps or flats, since you need one unique letter in between the first and last pitches (“F,” in this case).
          <br></br><br></br>
          <div className="f-major-notes-b-flat">
          <span><strong>F &emsp; G &emsp; A &emsp; Bb &emsp; C &emsp; D &emsp; E &emsp; F</strong></span>
          </div>
          <br></br><br></br>
          Notice that the two half-steps used in this scale are A to Bb, and E to F. We needed to write “Bb” - not “A#” - since we need <i>one unique letter</i> in between the first and last “F’s”.  The scale would <strong>NOT</strong> be called F major looking like this:
          <br></br><br></br>
          <div className="not-f-major">
          <span><strong>F &emsp; G &emsp; A &emsp; A# &emsp; C &emsp; D &emsp; E &emsp; F</strong></span>
          </div>
          <br></br><br></br>
          <h2>Accidentals</h2>
          A pitch with a sharp or flat in its name is called an <strong>accidental.</strong> We need only one accidental to make the F major scale: Bb. So, we say that the <i>key signature</i> for F major looks like this (shown in both treble and bass clefs):
          <br></br><br></br>
          <img className="F-major-key-signature" src={FMajorKeyPic} alt="F-major-key-signature"/>
          <br></br><br></br>
          Choose a different pitch to start on, and then build that major scale, using the <strong>W-W-H-W-W-W-H</strong> pattern. Notice that, when starting on C, there are no sharps or flats needed to create the pattern:
          <br></br><br></br>
          <div className="c-major">
          <span><strong>C &emsp; D &emsp; E &emsp; F &emsp; G &emsp; A &emsp; B &emsp; C</strong></span>
          </div>
          <br></br><br></br>
          Notice also that there is no black key inbetween E and F, or B and C. So, “E to F” and “B to C” are half-steps.
      
          
          <h2>Key Signatures</h2>
          
          Imagine if a particular piece of music was written in F major. The composer would have to write a flat symbol next to every single “B” in the music. It would be nicer to have a more efficient way of doing this! A <strong>key signature</strong> is just a shorthand method that allows us to notate scales without accidentals. The key signature tells us <i>which pitches on the staff are sharp or flat.</i> The key signature is displayed along with the clef at the beginning of a piece of music, and tells the performer which pitches are sharp or flat. So, if the key signature for F major was written at the beginning of a piece of music, the performer would interpret every notated “B” to <i>really</i> mean “Bb”.
          <br></br><br></br>
          Key signatures should be memorized so that you know the scale of the piece of music that you are reading. Sharps and flats, when placed in key signatures, are always shown in a specific order. The order of sharps is:
          <br></br><br></br>
          <div className="order-of-sharps">
          <span><strong>F &emsp; C &emsp; G &emsp; D &emsp; A &emsp; E &emsp;
B &emsp; F</strong></span>
          </div>
          <br></br><br></br>
          ...and the order of flats is:
<br></br><br></br>
          <div className="order-of-flats">
          <span><strong>B &emsp; E &emsp; A &emsp; D &emsp; G &emsp; C &emsp; F &emsp; F</strong></span>
          </div>
          <br></br><br></br>
          Some people like to remember the order of flats as the word “BEAD” followed by “GCF” - the math abbreviation for Greatest Common Factor. The order of sharps is simply the reverse of this: FCGDAEB.
          <br></br><br></br>
          Here are the ways that the major scale key signatures are notated, using both treble and bass clefs here:
          <br></br><br></br>
          <h2>Key Signatures With Sharps</h2>
          <img className="sharp-keys-pic" src={SharpKeys} alt="key-signatures-with-sharps"/>
          <br></br><br></br>
          <h2>Key Signatures With Flats</h2>
          <img className="flat-keys-pic" src={FlatKeys} alt="key-signatures-with-flats"/>
          <br></br><br></br>
          <h2>Circle of Fifths</h2>
          The <strong>Circle of Fifths</strong> is an image that helps to define the relationships between the key signatures and their <strong>tonal center</strong>, or starting pitch. You will notice that the C major scale is located at the top of the circle. It is displayed on the circle below with no sharps or flats in a key signature identified by a treble clef. Moving <i>counterclockwise</i> from C, we arrive at F major, which, as we have seen above, contains one flat: Bb. Moving <i>clockwise</i> around the circle will show all of the major scales which contain flats. Notice that the flats appear in the order described above: BEADGCF.
          <br></br><br></br>
          Moving clockwise from C major, we arrive at G major, which has one sharp: F#. Remember the order of sharps, from above? The circle is named the Circle of Fifths because each pitch in the circle - when looking clockwise around the circle - is the interval of a fifth from the previous pitch on the circle. Intervals will be covered in the Intervals section of this website, coming soon.
          <br></br><br></br>
          Memorizing the Circle of Fifths will help you identify the tonal center (starting pitch) of major scales. The pitches on the inside of the circle represent the names of the <i>minor scales</i> associated with the given key signature. These will be covered in a future <i>Minor Scales and Key Signatures</i> section of this website.
          <br></br><br></br>
          <img className="circle-of-fifths" src={Circle} alt="circle-of-fifths"/>
          <br></br><br></br>
          <div className="quiz-link-section">
          <h2>Take the Major Scales and Key Signatures Quiz!</h2>
          <i><strong>Time to test what you have learned!</strong></i>
          <Link className="link-to-quiz" to="/major-scales-and-key-signatures-quiz"><i><strong> Click here to take the Major Scales and Key Signatures Quiz.</strong></i></Link>
          </div>
        </div>
        <br></br><br></br>
        <div className="comments-section-intro">
          Have questions/comments about this material, or anything regarding AP Music Theory in general? Leave your name and a comment below!
        </div>
      </div>

        <div>
          {!this.state.error && <Comments topic={'major-scales-and-key-signatures'} />}
        </div>



        <div className="home-link">
        <Link to="/">Home</Link>
        </div>


      </React.Fragment>
    )
  }
}

export default MajorScalesAndKeySignatures;