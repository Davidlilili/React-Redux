import React from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            childData: null
        }
    }

    render(){
        return (
            <div>
                <h1>父亲: {this.state.childData}</h1>
                <ChildCom setChildData={this.setChildData} />
            </div>
        )
    }

    setChildData = (data) => {
        this.setState({
            childData: data
        })
    }
}

class ChildCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg: 'helloworld'
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.sendData}>传递helloworld给父亲</button>
                <button onClick={() => {this.props.setChildData('cool')}}>直接传</button>
            </div>
        )
    }

    sendData = () => {
        console.log(this.state.msg)
        this.props.setChildData(this.state.msg)
    }
}

ReactDOM.render(
    <ParentCom />,
    document.querySelector('#root')
)