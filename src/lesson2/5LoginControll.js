import React from 'react'
import Greeting from "./3ConditionRender"
function LoginButton(props) {
    console.log(" LoginButton")
    // onClick = { props.onClick } ={this.handleLogout} 
    return <button onClick={props.onClick}>
        Login
    </button>
}

function LogoutButton(props) {
    console.log(" LogoutButton")
    return <button onClick={props.onClick}>
        Loginout
    </button>
}

class LoginControll extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.state = { isLoggedIn: false }
    }
    handleLogout() {
        console.log(" handleLogout")
        this.setState({
            isLoggedIn: false
        })
    }
    handleLogin() {
        console.log(" handleLogin")
        this.setState({
            isLoggedIn: true
        })
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn
        //if else写法
        // let button
        // if (isLoggedIn) {
        //     button = <LoginButton onClick={this.handleLogout} />
        // } else {
        //     button = <LogoutButton onClick={this.handleLogin} />
        // }
        return <>
            <Greeting isLoggedIn={isLoggedIn} />
            {/* {button} */}
            {/* 三目运算符 */}
            {isLoggedIn ?
                <LoginButton onClick={this.handleLogout} /> :
                <LogoutButton onClick={this.handleLogin} />
            }

        </>

    }
}
export default LoginControll