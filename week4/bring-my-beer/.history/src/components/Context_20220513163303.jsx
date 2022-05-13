import React, { useReducer } from 'react';

const initialItems = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

function Reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
            todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        default: 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export function Provider({ children }) {
    const [state, dispatch] = useReducer(Reducer, initialItems);
    return children;
}