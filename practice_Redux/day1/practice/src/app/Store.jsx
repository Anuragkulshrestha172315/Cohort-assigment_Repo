import {configureStore} from '@reduxjs/toolkit'
import count from '../feature/countSlice'
export const store = configureStore({
    reducer : {
        count : count.reducer
    }
})