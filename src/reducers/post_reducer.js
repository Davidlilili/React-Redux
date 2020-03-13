const postReducer = function(state = { list: [ {id: 1, title: 'Hello!'} ] }, action) {
    switch(action.type) {
        case 'LOAD_POSTS':
            return {
                ...state, list: action.payload
            }
        default:
            return state
    }
}

export default postReducer;