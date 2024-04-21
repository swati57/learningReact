import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {MdDeleteForever} from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {

  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
}
  return (
    <div>
        {
            data.map((user,id) => {
                return <li key={id}>
                {user}
                <button className='btn btn-delete'>
                    <MdDeleteForever className='delete-icon' onClick={() => deleteUser(id)}/>
                </button>
                </li>
            })
        }
    </div>
  )
}

export default DisplayUsers