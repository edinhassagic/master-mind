import React from 'react';
import { render } from 'react-dom';
import { Rules } from './rules';
import { Game } from './game';
import './style.css';


class Mastermind extends React.Component {
  render() {
    return (
    <div>
      <h2 className='title'> MasterMind </h2>
      <Rules />
      <Game />      
    </div>
    );
  }
}

render(
  <Mastermind />,
  document.getElementById('root'));
