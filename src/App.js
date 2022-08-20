import {  useState } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header';

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
  const deleteAll = ()=>{
    dispatch(actions.deleteAll())
  }
  const handelName = (value) =>{
    setName(value.target.value)
  }
  return (
    <div className="App">
      <Header title={"Redux"}/>
      {
        list.map((item,index)=> (
        <li className='list' key={index}>
          {item}
        </li>
        ))
      }
        <div className="App" >
          <textarea
            onChange={handelName}
            value={name}
            style={{margin:10,width:190}}
          />
        </div>
        <button className='add-button'  onClick={addToList}>Add To List</button>
        <button className='deleteItem-button' onClick={deleteItem}>Delete</button>
        <button className='deleteAll-button'  onClick={deleteAll}>Delete All</button>
    </div>
  );
}

export default App;
