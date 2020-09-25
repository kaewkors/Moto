import React from "react"

class LandingPage extends React.Component {
  state = {
    show: false,
    userChoice: "wellington",
    date: null,
  }

  handleClick = () => {
    this.setState({
      show: true,
    })
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Click Me</button>
        {this.state.show && <h1>Hello World</h1>}
      </>
    )
  }
}

export default LandingPage
