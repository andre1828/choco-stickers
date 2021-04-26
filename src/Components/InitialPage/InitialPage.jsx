import styled from "@emotion/styled"

import pageBackground from "./initialPageBackground.png"
import buttonBackground from "./buttonBackground.png"

function InitialPage() {
  const Background = styled.div`
    height: 100%;
    background-image: url(${pageBackground});
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `
  const Button = styled.button`
    height: 10%;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    background-image: url(${buttonBackground});
    background-size: 100% 100%;
  `
  return (
    <>
      <Background>
        <Button>Album</Button>
        <Button>Stickers</Button>
      </Background>
    </>
  )
}

export default InitialPage
