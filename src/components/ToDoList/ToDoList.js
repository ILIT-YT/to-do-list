import React, { useState, useReducer } from 'react';
import ListItem from '../ListItem/ListItem';

function itemListReducer(state, action){
    switch (action.type){
        case "ADD_ITEM":
            
            return {
                item: "",
                itemList: [...state.itemList, {item: state.item, id: state.itemsAdded+1}],
                itemsAdded: state.itemsAdded + 1
            }
        case "CHANGE_ITEM":
            return {
                item: action.item,
                itemList: state.itemList,
                itemsAdded: state.itemsAdded
            }
        case "DELETE_ITEM":
            return {
                item: state.item,
                itemList: state.itemList.filter(item => action.id !== item.id),
                itemsAdded: state.itemsAdded
            }
    }
}

const getInitItemState = () => {
    return {
        item: 'wash dishes',
        itemList: [],
        itemsAdded: 0
    }
}

const ToDoList = () => {
    const [state, dispatch] = useReducer(itemListReducer,{}, getInitItemState)
    // const [item, setItem] = useState('do homework');
    // const [itemList, setItemList] = useState([]);
    // const [itemsAdded, setItemsAdded] = useState(0);

    const onChangeInput = (event) => {
        // setItem(event.target.value);
        dispatch({type:"CHANGE_ITEM", item: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // setItemsAdded(itemsAdded + 1);
        // setItemList([...itemList, {
        //     item: item,
        //     id: itemsAdded
        // }]);
        // setItem('');
        dispatch({type:"ADD_ITEM"})
    }

    const deleteHandler = (id) => {
        // setItemList(itemList.filter(item => id !== item.id));
        dispatch({type:"DELETE_ITEM", id: id})
    }

    const getListItems = state.itemList.map(item => <ListItem item={item.item} delete={deleteHandler} id={item.id} key={item.id} />)

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" value={state.item} onChange={onChangeInput}/>
            <button type='submit' >Submit</button>
        </form>
        {getListItems}
    </div>
  )
}

export default ToDoList