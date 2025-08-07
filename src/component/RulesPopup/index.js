import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  PopupContainer,
  TriggerButton,
  PopupContent,
  CloseButton,
  RulesImage,
} from './styledComponent'

const RulesPopup = () => (
  <PopupContainer>
    <Popup modal trigger={<TriggerButton>RULES</TriggerButton>}>
      {close => (
        <PopupContent>
          <CloseButton
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <RiCloseLine size={20} />
          </CloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopupContent>
      )}
    </Popup>
  </PopupContainer>
)

export default RulesPopup
