import React from 'react'

const Form = ({ charge, amount, handleCharge, handleAmount, handleSubmit, edit }) => {
    return (
        <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '', width: '70%', margin: '10px auto'}} onSubmit={ handleSubmit }>
            <input style={{ padding: '10px'}} type="text" name="charge" placeholder="CHARGE" id="charge" onChange={ handleCharge } value={ charge }/>
            <input style={{ padding: '10px'}} type="number" name="amount" placeholder="AMOUNT" id="amount" onChange={ handleAmount } value={ amount }/>
            <button style={{ padding: '10px'}} type="submit">{ edit ? 'EDIT' : 'SUBMIT' }</button>
        </form>
    )
}

export default Form
