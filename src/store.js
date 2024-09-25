import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import stepReducer from './slices/stepSlice'
import hostelFormReducer from './slices/hostelFormSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    step:stepReducer,
    hostelForm:hostelFormReducer,
  },
})