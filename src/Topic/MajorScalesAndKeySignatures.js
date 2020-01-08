import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Comments from '../Comments';


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
  <h1>Major Scales and Key Signatures</h1>
    <div id="topic-page">
      
      <br></br><br></br>
      Time to test what you have learned! Click here to take the Major Scales And Key Signatures Quiz.
          
    </div>


    <div>
    {!this.state.error && <Comments topic={'major-scales-and-key-signatures'} />}
    </div>



    <Link to="/">Home</Link>


</React.Fragment>
    )
  }
}

export default MajorScalesAndKeySignatures;