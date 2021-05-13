import styled from "@emotion/styled"

import logo from "./logo.svg"
import chocorango from "./chocorango.svg"
import background from "./background.svg"
import albumBtnBackground from "./albumBtn.svg"
import stickersBtnBackground from "./stickersBtn.svg"
import { useHistory } from "react-router"

function InitialPage() {
  const Background = styled.div`
    height: 100%;
    min-height: 480px;
    min-width: 320px;
    background-color: #fff9d9;
    background-image: url(${background});
    background-size: contain;
    display: grid;
    grid-template-areas: "logo" "char" "buttons";
    grid-template-rows: 10% 70% auto;
  `
  const Logo = styled.img`
    width: 90%;
    max-width: 482px;
    margin-top: 5vh;
    margin-right: auto;
    margin-left: auto;
    grid-area: logo;
  `
  const Character = styled.img`
    width: 70%;
    max-width: 467px;
    display: block;
    margin: auto;
    grid-area: char;
  `
  const Button = styled.button`
    height: 40%;
    width: 90%;
    max-width: 720px;
    margin-right: auto;
    margin-left: auto;
    border-style: none;
    grid-area: buttons;
    background: none;
    background-size: contain;
    background-repeat: no-repeat;
  `
  const AlbumButton = styled(Button)`
    margin-bottom: auto;
    background-image: url(${albumBtnBackground});
  `
  const StickersButton = styled(Button)`
    margin-top: auto;
    margin-bottom: 15px;
    background-image: url(${stickersBtnBackground});
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
