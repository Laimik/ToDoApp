import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ListOfToDo from './ListOfToDo'
import useDealsState from './useDealsState'
import './input.css'
import Typography from '@material-ui/core/Typography'

const App = () => {
  const { deals, addDeals, deleteDeals } = useDealsState([])

  return (
    <div className='App'>
      <Typography className='ToDos' component="h1" variant="h2">
      Todos
      </Typography> 
      <ToDoForm 
      saveToDo={todoText => {
        const trimmedText = todoText.trim()
        if (trimmedText.length > 0) {
          addDeals(trimmedText)
        }
      }
      }/>
      <ListOfToDo      
      deals={deals}
      deleteDeals={deleteDeals}      
      />
    </div>
  )
}

export default App;
