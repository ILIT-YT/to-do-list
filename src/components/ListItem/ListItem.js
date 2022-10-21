import React from 'react'

const ListItem = (props) => {
  return (
    <div>
        <p>{props.item}</p><button onClick={() => props.delete(props.id)}>Delete</button>
    </div> 
  )
}

export default ListItem