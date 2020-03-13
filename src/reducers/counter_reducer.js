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

export default counterReducer;