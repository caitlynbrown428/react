import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class App extends React.Component {
  render() {
    return (
      <h1>This is a heading</h1>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"))