import React, { useReducer, createContext } from 'react';


const initialItems = [
  {
    id: 1,
    text: '어쩔맥주',
    done: true
  },
  {
    id: 2,
    text: '저쩔맥주',
    done: true
  },
  {
    id: 3,
    text: '킹받는맥주',
    done: false
  },
  {
    id: 4,
    text: '네네맥주',
    done: false
  }
];

function Reducer(state, action) {
    switch (action.type) {
        case 'SEARCH':
            return state.concat(action.todo);
        default: 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export function Provider({ children }) {
    const [state, dispatch] = useReducer(Reducer, initialItems);
    return children;
}