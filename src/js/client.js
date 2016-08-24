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
    case ('COMPLETE_TODO'):
      let r = [...state.todos];
      r[action.payload] = {
        ...state.todos[action.payload],
        completed: !state.todos[]
      }
      r[action.payload].completed = !r[action.payload].completed;
    case ('SET_FILTER'):
      return state;
    default:
      return state;


  }
}