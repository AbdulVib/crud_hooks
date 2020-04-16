import React from 'react'

const Alert = ({ charge, amount }) => {
    return (
        <div>
            {
                charge.length && amount > 0 ? null : <strong>Please fill all the input</strong> 
            }
        </div>
    )
}

export default Alert
