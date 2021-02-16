import React from 'react'

class Toggle extends React.Component {
  state = {
    on: false,
  }

  toggleState = () => {
    this.setState({ on: !this.state.on })
  }

  render() {
    const {} = this.state

    return (
      <button onClick={this.toggleState}>
        {' '}
        Toggle. Current: {this.state.on ? 'On' : 'Off'}{' '}
      </button>
    )
  }
}

export default Toggle
