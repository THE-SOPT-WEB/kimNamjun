import React, { useReducer, createContext, useContext, useRef } from 'react';


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

const LocationStateContext = createContext();
const LocationDispatchContext = createContext();

export function Provider({ children }) {
    const [state, dispatch] = useReducer(Reducer, initialItems);
    const nextId = useRef(5);

    return (
        <LocationStateContext.Provider value={state}>
            <LocationDispatchContext.Provider value={dispatch}>
                {children}
            </LocationDispatchContext.Provider>
        </LocationStateContext.Provider>
    );
}

export function useLocationState() {
    return useContext(LocationStateContext);
  }
  
  export function useLocationDispatch() {
    return useContext(LocationDispatchContext);
  }