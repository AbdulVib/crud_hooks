import React, { useState, useEffect } from 'react'

import styles from './App.css'

import ListItem from './screens/ListItem'
import Form from './screens/Form'
import Alert from './partials/Alert'
// import uuid from 'uuid/v5'
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  { id: uuidv4(), charge: 'rent', amount: 1000},
  { id: uuidv4(), charge: 'food', amount: 2000},
  { id: uuidv4(), charge: 'shop', amount: 3000}
]

export default function App() {

  // useEffect(() => {

  // }, [ expenses])

  const [ expenses, setExpenses ] = useState(initialExpenses)

  //func
  const [ charge, setCharge ] = useState('')
  const [ amount, setAmount ] = useState('')

  //edit
  const [ edit, setEdit ] = useState(false)
  const [ id, setId ] = useState(0)

  //
  const handleCharge = e => {
    setCharge(e.target.value)
  }
  const handleAmount = e => {
    setAmount(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if( charge.length && amount > 0){
      if(edit){
        let editedExpenses = expenses.map(i => {
          return i.id === id ? { ...i, charge, amount } : i
        })
        setEdit(false)
        setId(0)
        setCharge('')
        setAmount('')
        setExpenses(editedExpenses)
      }
      else{
        setExpenses([...expenses, { id: uuidv4(), charge, amount}])
        setCharge('')
        setAmount('')
      }
    }
  }

  const handleDelete = id => {
    const filterExpenses = expenses.filter(i => i.id !== id)
    setExpenses(filterExpenses)
    // console.log(id, ' deleted')
  }
  const handleEdit = id => {
    const findExpense = expenses.find(i => i.id === id)
    const { charge, amount } = findExpense
    setCharge(charge)
    setAmount(amount)

    setEdit(true)
    setId(id)
    // setExpenses(filterExpenses)
    console.log(findExpense, ' edit')
  }

  const handleClearExpenses = _ => {
    setExpenses([])
  }

  // console.log(expenses, ' items ')
  return (
    <div>
      <Alert 
        charge={ charge }
        amount={ amount }
        />
      <h1>Track </h1>
      <main>
        <Form 
          charge={ charge }
          amount={ amount }
          handleCharge={ handleCharge }
          handleAmount={ handleAmount }
          handleSubmit={ handleSubmit }
          edit={ edit }
          />
        <ListItem 
          expenses={ expenses }
          handleDelete={ handleDelete }
          handleEdit= { handleEdit }
          handleClearExpenses={ handleClearExpenses } />
      </main>
      <h2>
        total Spending :  Rs. {
          expenses.reduce((s, n) => {
            return s + parseInt(n.amount )
          }, 0).toFixed(2)
        }
      </h2>
    </div>
  )
}
