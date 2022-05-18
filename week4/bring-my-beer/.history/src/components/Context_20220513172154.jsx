import React, { useReducer, createContext, useContext, useRef } from 'react';


const initialLocation = [
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

function LocationReducer(state, action) {
    switch (action.type) {
        case 'SEARCH':
            return state.concat(action.beer);
        default: 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const LocationStateContext = createContext();
const LocationDispatchContext = createContext();
const LocationNextIdContext = createContext();


export function LocationProvider({ children }) {
    const [state, dispatch] = useReducer(LocationReducer, initialLocation);
    const nextId = useRef(5);

    return (
        <LocationStateContext.Provider value={state}>
            <LocationDispatchContext.Provider value={dispatch}>
                <LocationNextIdContext.Provider value={nextId}>
                    {children}
                </LocationNextIdContext.Provider>
            </LocationDispatchContext.Provider>
        </LocationStateContext.Provider>
    );
}

export function useLocationState() {
    const context = useContext(LocationStateContext);
    if (!context) {
      throw new Error('Cannot find LocationProvider');
    }
    return context;
}

export function useLocationDispatch() {
    const context = useContext(LocationDispatchContext);
    if (!context) {
      throw new Error('Cannot find LocationProvider');
    }
    return context;
}

export function useLocationNextId() {
    const context = useContext(LocationNextIdContext);
    if (!context) {
      throw new Error('Cannot find LocationProvider');
    }
    return context;
} 