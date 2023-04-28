import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="count-container">
        <h1 className="heading">
          The Button has been Clicked{''}{' '}
          <span className="spanItem">{count} </span>
          times
        </h1>
        <p className="paragraph">click the button to Increase the count.</p>
        <button onClick={this.onIncrement} className="button" type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
