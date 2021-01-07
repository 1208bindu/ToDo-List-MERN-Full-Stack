import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState={
    todos:[],
    error:null,
    isLoading:true
       
}

export const GlobalContext=createContext(initialState);

export const GlobalProvider = ({children}) =>{ 
    const [state,dispatch] =useReducer(AppReducer,initialState)


async function getTodos(){
    try{
        const res=await axios.get('/api/v1/todos');
        dispatch({
            type:"GET_TODO",
            payload:res.data.data
        });
    }
    catch(err){
        dispatch({
            type:"TODO_ERROR",
            payload:err.response.data.error
        });

    }
}
async function deleteTodos(id){
    try{
        await axios.delete(`/api/v1/todos/${id}`);
    dispatch({
    type:"DELETE_TODO",
    payload:id
    });
}
catch(err){
    dispatch({
        type:"TODO_ERROR",
        payload:err.response.data.error
     });
}
}    

async function addTodos(todo){

     const config={
    headers: {
        accept: 'application/json',
      },
      data: {},
    };

        const res=await axios.post('/api/v1/todos',todo,config);
        
        try{
        dispatch({
            type:"ADD_TODO",
            payload: res.data.data
        });
    }
    catch(err){
            dispatch({
                type:"TODO_ERROR",
                payload:err.response.data.error
            });
    }

    
}
    return( 
    
    <GlobalContext.Provider value={{
         todos:state.todos,
         error:state.error,
         isLoading:state.isLoading,
         getTodos,
        deleteTodos,
        addTodos }}>

        {children}

    </GlobalContext.Provider>

    );

}
