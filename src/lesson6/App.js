import React from 'react'
import PropTypes from 'prop-types'

function Counter({ caption, initValue }) {
    return <div>Counter</div>
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number
}
class Counter2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    handleClick() {
        this.setState({ count: this.state.count + 1 })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count % 2 === 0
    }
    render() {
        return <div>
            {this.state.count}
            <button onClick={(e) => this.handleClick(e)}>Add</button>
        </div>
    }
}
export default Counter2