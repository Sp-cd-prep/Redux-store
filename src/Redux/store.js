import {configureStore} from '@reduxjs/toolkit'
import blogReducer from './Slice'

export const store = configureStore({
    reducer:{
        blog:blogReducer,
    }
})