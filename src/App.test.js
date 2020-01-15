import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Homepage from './Homepage/Homepage';
import MajorScalesAndKeySignaturesQuiz from './Quiz/MajorScalesAndKeySignaturesQuiz';
import PitchQuiz from './Quiz/PitchQuiz';
import Quizzes from './Quizzes/Quizzes';
import Pitch from './Topic/Pitch';
import Topics from './Topics/Topics';


describe ('Topics component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Topics /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe ('Homepage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Homepage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe ('MajorScalesAndKeySignaturesQuestions component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><MajorScalesAndKeySignaturesQuiz  /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe ('MajorScalesAndKeySignaturesQuestions component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><PitchQuiz  /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe ('MajorScalesAndKeySignaturesQuestions component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Quizzes  /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe ('MajorScalesAndKeySignaturesQuestions component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Pitch  /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe ('MajorScalesAndKeySignaturesQuestions component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Topics  /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
