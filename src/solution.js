import React from 'react';

export const Solution = (props) => {
  let solutionPegs = []
  let solutionClass = ''
  const isHidden = (props.state.defeat && !props.state.victory) ? '' : ' hidden'
  const playAgain = (!props.state.defeat && props.state.victory) ? '' : ' hidden' 
  const playA = (props.state.defeat && !props.state.victory) ? '' : ' hidden'
  for (let i = 0; i < props.state.trueRow.length; i++) {
    solutionClass = props.state.trueRow[i]
    solutionPegs.push(
      <div
        className={'color-holder ' + solutionClass}
        key={'s_' + i}>
      </div>)
  }
  return (
    <div className='solution colors'>
      <div className={isHidden}>
        <p>Solution:</p>
        {solutionPegs}
      </div>
      <div className={playAgain}>
      <a href="/#"  onClick={props.newGame}> Play Again?</a>
       
      </div>

      <div className={playA}>
      <a href="/#"  onClick={props.newGame}> Play Again?</a>
       
      </div>
    </div>
  )
}