import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/Todo/todoslice'
export const Store  = configureStore({
    reducer : todoReducer
})