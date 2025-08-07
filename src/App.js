import {Component} from 'react'
import GameView from './component/GameView'
import GameResultView from './component/GameResultView'
import RulesPopup from './component/RulesPopup'
import './app.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isGameInProgress: true,
    playerChoice: null,
    opponentChoice: null,
    result: '',
  }

  getGameResult = (playerId, opponentId) => {
    if (playerId === opponentId) {
      return 'IT IS DRAW'
    }

    if (
      (playerId === 'ROCK' && opponentId === 'SCISSORS') ||
      (playerId === 'PAPER' && opponentId === 'ROCK') ||
      (playerId === 'SCISSORS' && opponentId === 'PAPER')
    ) {
      return 'YOU WON'
    }

    return 'YOU LOSE'
  }

  onClickChoice = id => {
    const playerChoice = choicesList.find(choice => choice.id === id)
    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    const result = this.getGameResult(playerChoice.id, opponentChoice.id)

    this.setState(prevState => {
      let updatedScore = prevState.score
      if (result === 'YOU WON') updatedScore += 1
      else if (result === 'YOU LOSE') updatedScore -= 1

      return {
        score: updatedScore,
        playerChoice,
        opponentChoice,
        result,
        isGameInProgress: false,
      }
    })
  }

  onPlayAgain = () => {
    this.setState({isGameInProgress: true})
  }

  render() {
    const {
      score,
      isGameInProgress,
      playerChoice,
      opponentChoice,
      result,
    } = this.state

    return (
      <div className="app-container">
        <div className="score-board">
          <h1 className="game-title">
            Rock <br /> Paper <br /> Scissors
          </h1>
          <div className="socre-container">
            <p className="score">Score</p>
            <p className="score_num">{score}</p>
          </div>
        </div>

        {isGameInProgress ? (
          <GameView
            choicesList={choicesList}
            onClickChoice={this.onClickChoice}
          />
        ) : (
          <GameResultView
            playerChoice={playerChoice}
            opponentChoice={opponentChoice}
            result={result}
            onPlayAgain={this.onPlayAgain}
          />
        )}

        <RulesPopup />
      </div>
    )
  }
}

export default App
