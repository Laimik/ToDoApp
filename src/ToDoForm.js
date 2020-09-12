import React from 'react'
import useInputState from './useInputState'
import TextField from '@material-ui/core/TextField'
import './input.css'

const ToDoForm = ({ saveToDo }) => {  
    const { value, onChange, reset } = useInputState('')
    return (
        <form
        onSubmit={event => {
            event.preventDefault()
            saveToDo(value)
            reset()
        }} 
        >
            <TextField             
             variant="filled"                                                                   
             placeholder="Add your plans"
             margin="normal"
             onChange={onChange}
             value={value}
             />
        </form>        
    )
}

export default ToDoForm;