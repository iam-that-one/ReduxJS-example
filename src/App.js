import {  useState } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import './App.css';

import { actions } from './store';
function App() {
  const dispatch = useDispatch();
  const list = useSelector((state)=> state.list);
  const [name,setName] = useState('')
  const addToList = () =>{
    dispatch(actions.addToList(name))
  }
  const deleteItem = ()=>{
    dispatch(actions.deleteItem(name))
  }
  const handelName = (value) =>{
    setName(value.target.value)
  }
  return (
    <div className="App">
      {
        list.map((item,index)=> (
        <li style={{ listStyleType: "square",margin:10}} key={index}>
          {item}
        </li>
        ))
      }
        <div className="App" >
          <textarea
            onChange={handelName}
            value={name}
            style={{margin:10}}
          />
        </div>
        <button style={{height:30,marginLeft:10}} onClick={addToList}>Add To List</button>
        <button style={{height:30}} onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default App;
