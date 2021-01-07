export default (state,action) => {
    switch(action.type){
        case "GET_TODO":
            return{
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case "TODO_ERROR":
            return{
                ...state,
                error: action.payload
            }    
        case "DELETE_TODO":
            return {
                ...state,
                todos:state.todos.filter(todo => todo._id!==action.payload)
            }
        case "ADD_TODO":
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }    
        default:
            return state;
    }
}