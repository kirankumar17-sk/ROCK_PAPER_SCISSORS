import styled from 'styled-components'

export const PopupContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`

export const TriggerButton = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  color: #223a5f;
  font-weight: bold;
  cursor: pointer;
`

export const PopupContent = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const RulesImage = styled.img`
  width: 100%;
  max-width: 500px;
`
