import styled from "@emotion/styled"

import logo from "./logo.svg"
import chocorango from "./chocorango.svg"
import background from "./background.svg"
import buttonBackground from "./buttonBackground.png"
import { useHistory } from "react-router"

function InitialPage() {
  const Background = styled.div`
    height: 100%;
    background-color: #fff9d9;
    background-image: url(${background});
    background-size: contain;
    display: grid;
    grid-template-areas: "logo" "char" "buttons";
    grid-template-rows: 10% 70% auto;
  `
  const Logo = styled.img`
    width: 90%;
    margin-top: 5vh;
    margin-right: auto;
    margin-left: auto;
    grid-area: logo;
  `
  const Character = styled.img`
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    grid-area: char;
  `
  const Button = styled.button`
    height: 40%;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    background-image: url(${buttonBackground});
    background-size: 100% 100%;
    grid-area: buttons;
  `
  const AlbumButton = styled(Button)`
    margin-bottom: auto;
  `
  const StickersButton = styled(Button)`
    margin-top: auto;
    margin-bottom: 15px;
  `

  const history = useHistory()

  return (
    <>
      <Background>
        <Logo src={logo} />
        <Character src={chocorango} />
        <AlbumButton onClick={() => history.push("/album")}>Album</AlbumButton>
        <StickersButton>Stickers</StickersButton>
      </Background>
    </>
  )
}

export default InitialPage
