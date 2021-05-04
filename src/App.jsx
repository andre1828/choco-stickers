/** @jsxImportSource @emotion/react */
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import InitialPage from "./Components/InitialPage/InitialPage"
import Album from "./Components/Album/Album"

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/album">
          <Album />
        </Route>
        <Route path="/duplicate-stickers">
          <InitialPage />
        </Route>
        <Route path="/">
          <InitialPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
