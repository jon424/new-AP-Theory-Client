import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Homepage from './Homepage/Homepage';
import MajorScalesAndKeySignaturesQuestions from './Questions/MajorScalesAndKeySignaturesQuestions';
import PitchQuizQuestions from './Questions/PitchQuizQuestions';
import MajorScalesAndKeySignaturesQuiz from './Quiz/MajorScalesAndKeySignaturesQuiz';
import PitchQuiz from './Quiz/PitchQuiz';
import Quizzes from './Quizzes/Quizzes';
import MajorScalesAndKeySignatures from './Topic/MajorScalesAndKeySignatures';
import Pitch from './Topic/Pitch';
import Topics from './Topics/Topics';


describe ('Topics component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Topics />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
