import styled from "@emotion/styled"

import pageBackground from "./initialPageBackground.svg"
import buttonBackground from "./buttonBackground.png"
import { useHistory } from "react-router"

function InitialPage() {
  const Background = styled.div`
    height: 100%;
    background-color: #fff9d9;
    display: grid;
    grid-template-areas: "char" "buttons";
    grid-template-rows: 80% auto;
  `
  const Character = styled.img`
    overflow-y: hidden;
    height: 100%;
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
        <Character src={pageBackground} />
        <AlbumButton onClick={() => history.push("/album")}>Album</AlbumButton>
        <StickersButton>Stickers</StickersButton>
      </Background>
    </>
  )
}

export default InitialPage
