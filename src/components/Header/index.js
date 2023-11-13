import {
  NavContainer,
  HeaderContainer,
  ListItemContainer,
  Heading,
  ScoreContainer,
  ScoreText,
  ScoreValue,
} from './styledComponent'

const Header = props => {
  const {initialScore} = props

  return (
    <NavContainer>
      <HeaderContainer>
        <ListItemContainer>
          <Heading>ROCK PAPER SCISSORS</Heading>
        </ListItemContainer>
        <ScoreContainer>
          <ScoreText>Score</ScoreText>
          <ScoreValue>{initialScore}</ScoreValue>
        </ScoreContainer>
      </HeaderContainer>
    </NavContainer>
  )
}

export default Header
