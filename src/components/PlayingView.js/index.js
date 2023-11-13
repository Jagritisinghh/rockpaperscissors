import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import Header from '../Header'
import {
  AppContainer,
  ChoiceButton,
  ChoiceContainer,
  ChoiceImage,
  RulesButton,
  RulesPopup,
  CloseButton,
  ResultContainer,
  PlayAgainButton,
  ResultantChoice,
  Choice,
  Text,
  ResultText,
  SelectedButton,
} from './styledComponent'

const opponentId = Math.floor(Math.random() * 3)

class PlayingView extends Component {
  state = {initialScore: 0, isSelected: false, playersChoice: '', currentId: ''}

  resultStatus = () => {
    const {choicesList} = this.props
    const {currentId} = this.state
    if (currentId === choicesList[opponentId].id) {
      return 'IT IS DRAW'
    }
    if (
      (currentId === 'ROCK' && choicesList[opponentId].id === 'PAPER') ||
      (currentId === 'PAPER' && choicesList[opponentId].id === 'SCISSORS') ||
      (currentId === 'SCISSORS' && choicesList[opponentId].id === 'ROCK')
    ) {
      return 'YOU LOSE'
    }

    return 'YOU WON'
  }

  onClickPlayAgain = () => {
    this.setState({isSelected: false})
  }

  onSelectRock = () => {
    const {isSelected} = this.state
    const {choicesList} = this.props
    this.setState({
      isSelected: !isSelected,
      playersChoice: choicesList[0].imageUrl,
      currentId: choicesList[0].id,
    })
  }

  onSelectPaper = () => {
    const {isSelected} = this.state
    const {choicesList} = this.props

    this.setState({
      isSelected: !isSelected,
      playersChoice: choicesList[1].imageUrl,
      currentId: choicesList[1].id,
    })
  }

  onSelectScissors = () => {
    const {isSelected} = this.state
    const {choicesList} = this.props

    this.setState({
      isSelected: !isSelected,
      playersChoice: choicesList[2].imageUrl,
      currentId: choicesList[2].id,
    })
  }

  playView = () => {
    const {choicesList} = this.props
    return (
      <ChoiceContainer>
        <ChoiceButton
          data-testid="rockButton"
          type="button"
          onClick={this.onSelectRock}
        >
          <ChoiceImage alt={choicesList[0].id} src={choicesList[0].imageUrl} />
        </ChoiceButton>
        <ChoiceButton
          data-testid="scissorsButton"
          type="button"
          onClick={this.onSelectPaper}
        >
          <ChoiceImage alt={choicesList[1].id} src={choicesList[1].imageUrl} />
        </ChoiceButton>
        <ChoiceButton
          data-testid="paperButton"
          type="button"
          onClick={this.onSelectScissors}
        >
          <ChoiceImage alt={choicesList[2].id} src={choicesList[2].imageUrl} />
        </ChoiceButton>
      </ChoiceContainer>
    )
  }

  renderGameResults = () => {
    const {choicesList} = this.props
    const {playersChoice} = this.state
    const opponentChoice = choicesList[opponentId]
    return (
      <ResultContainer>
        <ResultantChoice>
          <Choice>
            <Text>You</Text>
            <SelectedButton type="button">
              <ChoiceImage alt="your choice" src={playersChoice} />
            </SelectedButton>
          </Choice>

          <Choice>
            <Text>Opponent</Text>
            <SelectedButton type="button">
              <ChoiceImage
                alt="opponent choice"
                src={opponentChoice.imageUrl}
              />
            </SelectedButton>
          </Choice>
        </ResultantChoice>

        <ResultText>{this.resultStatus()}</ResultText>
        <PlayAgainButton onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultContainer>
    )
  }

  renderModal = () => (
    <Popup
      modal
      trigger={<RulesButton type="button"> RULES</RulesButton>}
      position="center"
    >
      {close => (
        <>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine size={30} />
          </CloseButton>
          <div>
            <RulesPopup
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </div>
        </>
      )}
    </Popup>
  )

  scoreResult = () => {
    const {initialScore} = this.state
    const gameResult = this.resultStatus()
    let newScore = initialScore

    if (gameResult === 'YOU LOSE') {
      newScore = initialScore - 1
    } else if (gameResult === 'YOU WON') {
      newScore = initialScore + 1
    } else {
      newScore = initialScore
    }

    this.setState({initialScore: newScore})
  }

  render() {
    const {isSelected, initialScore} = this.state

    console.log(initialScore)

    return (
      <AppContainer>
        <Header initialScore={initialScore} />
        {isSelected ? this.renderGameResults() : this.playView()}
        {this.renderModal()}
      </AppContainer>
    )
  }
}

export default PlayingView
