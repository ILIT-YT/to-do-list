import React, { useState } from 'react';
import ListItem from '../ListItem/ListItem';

const ToDoList = () => {
    const [item, setItem] = useState('do homework');
    const [itemList, setItemList] = useState([]);
    const [itemsAdded, setItemsAdded] = useState(0);

    const onChangeInput = (event) => {
        setItem(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setItemsAdded(itemsAdded + 1);
        setItemList([...itemList, {
            item: item,
            id: itemsAdded
        }]);
        setItem('');
    }

    const deleteHandler = (id) => {
        setItemList(itemList.filter(item => id !== item.id));
    }

    const getListItems = itemList.map(item => <ListItem item={item.item} delete={deleteHandler} id={item.id} key={item.id} />)

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" value={item} onChange={onChangeInput}/>
            <button type='submit' >Submit</button>
        </form>
        {getListItems}
    </div>
  )
}

export default ToDoList