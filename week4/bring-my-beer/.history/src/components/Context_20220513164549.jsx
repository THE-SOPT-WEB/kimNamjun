import React, { useReducer, createContext } from 'react';


const initialItems = [
  {
    id: 1,
    text: '어쩔맥주',
    adress: '당곡 6길 65',
    contact: '01045807180'
  },
  {
    id: 2,
    text: '저쩔맥주',
    adress: '당곡 6길 65',
    contact: '01045807180'
  },
  {
    id: 3,
    text: '킹받는맥주',
    adress: '당곡 6길 65',
    dcontact: '01045807180'
  },
  {
    id: 4,
    text: '네네맥주',
    adress: '당곡 6길 65',
    dcontact: '01045807180'
  }
];

function Reducer(state, action) {
    switch (action.type) {
        case 'SEARCH':
            return state.concat(action.beer);
        default: 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const StateContext = createContext();
const DispatchContext = createContext();

export function Provider({ children }) {
    const [state, dispatch] = useReducer(Reducer, initialItems);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}