import React from 'react'
function WarningBanner(props) {
    //props.warn={this.state.showWarning}
    if (!props.warn) {
        return null
    }
    return <div>
        warning!!!
    </div>
}
class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showWarning: false
        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }))
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggle}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}
export default Page;