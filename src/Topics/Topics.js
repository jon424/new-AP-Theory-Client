import React from 'react';
import { Link } from 'react-router-dom';

class Topics extends React.Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
      <div className="topic-page">
      <h1>Topics</h1>
      <Link className="link-tag" to="/pitch" >Pitch</Link>
      <br></br><br></br>
      <Link className="link-tag" to="/major-scales-and-key-signatures" >Major Scales and Key Signatures</Link>
      <br></br><br></br>
      <p><i>More AP Music Theory topics coming soon!</i></p>
      </div>

      <div className="home-link">
        <Link to="/">Home</Link>
        </div>
    

      </React.Fragment>
     );
  }
}
 
export default Topics;