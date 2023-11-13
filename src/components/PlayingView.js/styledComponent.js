import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
  justify-content: space-between;
`
export const ChoiceContainer = styled.ul`
  width: 95%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const ResultContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const ResultantChoice = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Choice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  margin-bottom: 30px;
  margin-right: 30px;
  padding: 12px;
  font-size: 28px;
  border: none;
  border-radius: 12px;
  font-family: 'bree Serif';
  color: #223a5f;
`

export const ChoiceButton = styled.button`
  background-color: transparent;
  border: none;
  width: 50%;
  cursor: pointer;
  outline: none;
`
export const SelectedButton = styled(ChoiceButton)`
  width: 100%;
`

export const ChoiceImage = styled.img`
  width: 100%;
`

export const RulesButton = styled(PlayAgainButton)`
  align-self: flex-end;
`
export const RulesPopup = styled.img`
  width: 100%;
`
export const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  align-self: flex-end;
  border: none;
  margin-bottom: 20px;
`
export const Text = styled.p`
  font-family: 'Roboto';
  color: white;
  font-weight: bold;
  font-size: 32px;
`
export const ResultText = styled(Text)`
  font-size: 38px;
`
