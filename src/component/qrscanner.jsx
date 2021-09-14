import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import './qr.css'
class Test extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div className = "container">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          className = "qr"
        />
        <p className = "result">
          <a className = "link" href = {this.state.result}>
            {this.state.result}
          </a>
        </p>
      </div>
    )
  }
}

export default Test