/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { createContext } from 'react'
import { food_list } from '../assets/assets'

export const  StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const contextValue = {
        food_list
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
