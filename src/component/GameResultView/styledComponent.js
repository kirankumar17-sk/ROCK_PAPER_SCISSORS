import styled from 'styled-components'

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`

export const ResultColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`

export const ResultImage = styled.img`
  width: 100px;
  height: 100px;
`

export const ResultText = styled.p`
  color: white;
  font-size: 22px;
  font-weight: bold;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: #223a5f;
  font-weight: bold;
  cursor: pointer;
`
