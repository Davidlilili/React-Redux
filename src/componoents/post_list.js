import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadPostsAction } from '../actions/post_action'

class PostList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    componentDidMount() { //componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里
        this.props.dispatch(loadPostsAction); //加载远程数据
    }

    render() {
        const { list } = this.props.post;
        const Posts = list.map(post => (<li key = {post.id}>{post.title}</li>)//{
        //     return (<li key = {post.id}>{post.title}</li>)
        // })
        )
        console.log(Posts)
        return (
            <div>
                <ul>{ Posts }</ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.post
    }
}

// 通过connect连接组件和redux数据
export default connect(mapStateToProps)(PostList);
