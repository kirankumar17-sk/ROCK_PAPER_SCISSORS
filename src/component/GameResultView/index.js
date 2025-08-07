import {
  ResultContainer,
  ResultImage,
  ResultText,
  ResultColumn,
  PlayAgainButton,
} from './styledComponent'

const GameResultView = ({
  playerChoice,
  opponentChoice,
  result,
  onPlayAgain,
}) => (
  <ResultContainer>
    <ResultColumn>
      <p>YOU</p>
      <ResultImage src={playerChoice.imageUrl} alt="your choice" />
    </ResultColumn>
    <ResultColumn>
      <p>OPPONENT</p>
      <ResultImage src={opponentChoice.imageUrl} alt="opponent choice" />
    </ResultColumn>
    <ResultText>{result}</ResultText>
    <PlayAgainButton onClick={onPlayAgain}>PLAY AGAIN</PlayAgainButton>
  </ResultContainer>
)

export default GameResultView
