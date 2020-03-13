import React from 'react';
import ReactDOM from 'react-dom';

function UserGreet(props) {
    return (<h1>You have loginned!</h1>)
}

function UserLogin(props) {
    return (<h1>Please login first!</h1>)
}

class LoginCom extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return this.props.isLogin?<UserGreet />:<UserLogin />
    }
}

class LoginButtonCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin: false
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.setState({isLogin: true})}}>Login</button>
                <LoginCom isLogin={this.state.isLogin} />
            </div>
        )
    }
}

ReactDOM.render(
    <LoginButtonCom />,
    document.querySelector('#root')
)