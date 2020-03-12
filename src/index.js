import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { get } from 'axios';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux: action reducer state(store)
const counterReducer = function(state = { count: 1 }, action) {
    switch(action.type) {
        case 'COUNT_ADD':
            // state = {count: state.count + 1}
            // return state
            return {
                ...state, count: state.count + 1 // 就是 state = {count: state.count + 1}
            }
        case 'COUNT_REDUCE':
            return {
                ...state, count: state.count - 1
            }
        default:
            return state
    }
    // console.log(action)
    // return state
}

const postReducer = function(state = { list: [ {title: 'Hello!'} ] }, action) {
    switch(action.type) {
        case 'LOAD_POSTS':
            return {
                ...state, list: action.payload
            }
        default:
            return state
    }
}

// 通过combineReducers把多个reducer进行合并
const rootReducers = combineReducers({
    counter: counterReducer,
    post: postReducer
})

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(...[thunk]), // 需要使用的中间件数组
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    ) // 用reducer创建一个store

console.log(store) // store里有dispatch， getstore等方法
console.log(store.getState())

// 改变state， 用dispatch 派发 actoin
// action 有两个参数，一是type，二是payload：传递的数据
store.dispatch({
    type: 'COUNT_ADD',
    payload: {},
})

console.log(store) // store里有dispatch， getstore等方法
console.log(store.getState())

store.dispatch({
    type: 'LOAD_POSTS',
    payload: [{title: 'Nice!'}],
})

console.log(store) // store里有dispatch， getstore等方法
console.log(store.getState())

const getPostsRequest = () => {
    return get('https://jsonplaceholder.typicode.com/posts')
}

store.dispatch(async function(dispatch){
    const res = await getPostsRequest()
    console.log(res.data)
    dispatch({
        type: 'LOAD_POSTS',
        payload: res.data
    })
})



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
