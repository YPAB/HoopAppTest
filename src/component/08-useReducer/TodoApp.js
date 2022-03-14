import React,{useEffect, useReducer}from 'react';
import './styles.css'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {

    const init = () => {


        //si hay todos traelos o sino retorna un arreglo vacio
        return JSON.parse(localStorage.getItem('todos')) || [];


        /* return [{
            id: new Date().getTime(),
            desc:'Aprender React',
            done: false
        }]; */


    }

    /* const initialState = [ {
        id: new Date().getTime(),
        desc:'Aprender React',
        done: false
    }]; */

        //el dispath es una funcion que le mandamos una accion y ya va a saber a que reducer es el que hay que mandar.
    const [ todos,dispatch ] = useReducer( todoReducer,[], init );
    

    //console.log(todos);

    useEffect ( () => {
        localStorage.setItem('todos',JSON.stringify( todos ))

    },[todos]);

    const handleToggle = (todoId) => {

        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action);

    }

    const handleAddTask = ( newTodo ) => {
        dispatch ( {
            type:'create',
            payload:newTodo
        });
    }


    const handleDelete = ( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId

        }

        dispatch(action);
    }
 
    return (
        <div>
            <h1>Tareas App: { todos.length }</h1>
            <hr/>

           <div className='row'>
               <div className='col-7'>
                   <TodoList 
                        todos = {todos} 
                        handleDelete= {handleDelete} 
                        handleToggle= { handleToggle} 
                    />
               </div>

               <div className='col-5'>
                  <TodoAdd
                    handleAddTask = { handleAddTask }
                  />

               </div>

           </div>

        </div>
    )
}