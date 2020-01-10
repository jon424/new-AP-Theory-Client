import React from 'react';

class Homepage extends React.Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className="landing-page">
          <h1>AP Theory <i class="fas fa-music"></i></h1>
          <div className="main-content-type">
          <h2>A guide for Advanced Placement Music Theory class!</h2> 
          <br></br>
          Contains Topic Overviews and graded practice Quizzes to help you succeed on the AP Music Theory Exam.
<br></br>
          How To Use This Site
Click on Topic Overviews from the main menu (above) to learn about key topics on the AP Music Theory Exam. Take Quizzes over any and all topics. Sign-in to track your progress on the quiz material!
    
Inside AP Theory
placeholder for screenshot of topic overview on fundamentals of Music
Interactive charts and personalized statistics to help you stay on track with your goals.


          </div>
        </div>



      </React.Fragment>
    );
  }
}

export default Homepage;