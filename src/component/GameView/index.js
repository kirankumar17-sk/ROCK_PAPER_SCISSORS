import {ChoiceButton, GameButtonsContainer, GameImage} from './styledComponent'

const GameView = ({choicesList, onClickChoice}) => (
  <GameButtonsContainer>
    {choicesList.map(choice => (
      <ChoiceButton
        key={choice.id}
        data-testid={`${choice.id.toLowerCase()}Button`}
        onClick={() => onClickChoice(choice.id)}
      >
        <GameImage src={choice.imageUrl} alt={choice.id} />
      </ChoiceButton>
    ))}
  </GameButtonsContainer>
)

export default GameView
