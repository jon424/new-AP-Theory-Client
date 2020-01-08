import React from 'react';
import { Link } from 'react-router-dom';

class Topics extends React.Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>

      <h1>Topics</h1>
      <Link to="/pitch" >Pitch</Link>
      <br></br>
      <Link to="/major-scales-and-key-signatures" >Major Scales and Key Signatures</Link>

    

      </React.Fragment>
     );
  }
}
 
export default Topics;