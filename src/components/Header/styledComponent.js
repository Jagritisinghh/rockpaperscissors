import styled from 'styled-components'

export const NavContainer = styled.div`
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 95%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`
export const ListItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-family: 'Bree serif';
  color: #ffffff;
  width: 30%;
  font-size: 36px;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
export const ScoreText = styled.p`
  font-family: 'Bree serif';
  color: #223a5f;
  width: 30%;
  font-size: 36px;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  border: none;
  width: 40%;
  height: 100%;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 20%;
  }
`

export const ScoreValue = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-weight: bold;
  font-size: 36px;
`
