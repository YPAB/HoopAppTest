const tasks = [{
    id:1,
    todo:'Comprar Pan',
    done:false
}];

const todoReducer = ( state = tasks,action) => {

    if ( action?.type == 'create' ) {
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo:'Comprar Noot',
    done:false
}


const agregarTodoAction = {
    type:'create',
    payload: newTodo
}

todos = todoReducer( todos, agregarTodoAction );

console.log( todos );