import expect from 'expect';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

//import '../sass/style.scss'
// Javascript the good parts



const todo = (state = {todos:[], filter:'ALL'}, action) => {
  switch(action.type){
    case ('ADD_TODO'):
      return { 
        ...state,
        todos:[
          ...state.todos,
          {
            id : state.todos.length,
            text: action.payload,
            completed: false
          }
        ]
      }
    case ('TOGGLE_TODO'):
      let todos = [...state.todos];
      todos[action.payload] = {
        ...todos[action.payload],
        completed: !todos[action.payload].completed;
      }
      return (
        ...state,
        todos
      )
    case ('SET_FILTER'):
      return (
        ...state,
        filter : action.payload;
      )
    default:
      return state;


  }
}