import React from 'react'

//comps
import Item from './SingleItem'

const ListItem = ({ expenses, handleDelete, handleEdit, handleClearExpenses }) => {
    return (
        <div>
            <ul>
                {
                    expenses.map(i => {
                        return <Item deleted={ () => handleDelete( i.id )} edited={ () => handleEdit( i.id ) } key={ i.id } expense={ i }/>
                    })
                }
            </ul>
            
            {
                expenses.length ? <button onClick={ handleClearExpenses } style={{ margin: '20px 0', padding: '10px'}}>CLEAR ALL</button> : null
            }
        </div>
    )
}

export default ListItem
