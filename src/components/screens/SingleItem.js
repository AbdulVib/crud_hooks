import React from 'react'

const SingleItem = ( {expense, deleted, edited }) => {
    // console.log(charge, ' sing;e')
    const { charge, amount } = expense
    // console.log(amount, ' amount')
    return (
        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', border: '', width: '60%', margin: '0 auto', padding: '10px 0'}}>
            <span>{ charge } - </span>
            <strong>Rs.{ amount }</strong>
            <button onClick={ edited }>EDIT</button>
            <button onClick={ deleted }>DELETE</button>
        </li>
    )
}

export default SingleItem
