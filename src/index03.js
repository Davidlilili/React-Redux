import React from 'react';
import ReactDOM from 'react-dom';
import './test03.css'

class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isActive: true
        }
        this.changeShow = this.changeShow.bind(this)
    }

    render() {
        return (
            <div>
                <button onClick={this.changeShow}>父亲改变状态</button>  {/* 注意onClick的函数不能加括号，否则会报错 */}
                <Child isActive={this.state.isActive}/>     {/* 注意如果要传值给子，一定要把值写进attr里*/}
            </div>
        )
    }

    changeShow(){
        this.setState({
            isActive: !this.state.isActive
        }
    )
    }
}

class Child extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        let strs = null
        if(this.props.isActive == true){
            strs = ' active'
        } else {
            strs = ''
        }
        return (
            <div>
                <h1>子元素</h1>
                <div className={'content' + strs}>
                    <h1>隐藏内容</h1>
                </div>
            </div>
        )
    }

    // setActive = () => {
    //     let strs = null
    //     if(this.isActive == true){
    //         this.strs = ' active'
    //     } else {
    //         this.strs = ''
    //     }
    // }
}

ReactDOM.render(
    <Parent />,
    document.querySelector('#root')
)