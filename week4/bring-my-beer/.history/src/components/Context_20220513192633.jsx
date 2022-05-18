import React, { useReducer, createContext, useContext, useRef } from 'react';
import axios from 'axios';

const initialState = {
    locations: {
        loading : false,
        data: null,
        error: null
    },
    location: {
        loading : false,
        data: null,
        error: null
    }
}

const loadingState = {
    loading: true,
    data: null,
    error: null
};

const success = data => ({
    loading: false,
    data,
    error: null
});

const error = error => ({
    loading: false,
    data: null,
    error: error
  });

function LocationsReducer(state, action) {
    switch (action.type) {
        case 'GET_LOCATIONS':
        return {
            ...state,
            users: loadingState
        };
        case 'GET_LOCATIONS_SUCCESS':
        return {
            ...state,
            users: success(action.data)
        };
        case 'GET_LOCATIONS_ERROR':
        return {
            ...state,
            users: error(action.error)
        };
        default:
        throw new Error(`Unhanded action type: ${action.type}`);
    }
}

const LocationsStateContext = createContext(null);
const LocationsDispatchContext = createContext(null);
const LocationsNextIdContext = createContext();


export function LocationsProvider({ children }) {
    const [state, dispatch] = useReducer(LocationsReducer, initialState);
    const nextId = useRef(0);

    return (
        <LocationsStateContext.Provider value={state}>
            <LocationsDispatchContext.Provider value={dispatch}>
                <LocationsNextIdContext.Provider value={nextId}>
                    {children}
                </LocationsNextIdContext.Provider>
            </LocationsDispatchContext.Provider>
        </LocationsStateContext.Provider>
    );
}

export function useLocationState() {
    const state = useContext(LocationsStateContext);
    if (!state) {
        throw new Error('Cannot find LocationProvider');
    }
    return state;
}

export function useLocationDispatch() {
    const dispatch = useContext(LocationsDispatchContext);
    if (!dispatch) {
        throw new Error('Cannot find LocationProvider');
    }
    return dispatch;
}

export function useLocationNextId() {
    const context = useContext(LocationsNextIdContext);
    if (!context) {
        throw new Error('Cannot find LocationProvider');
    }
    return context;
} 