import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux';
import { removeAllUsers } from '../store/slices/UserSlice';

const DeleteAllUsers = () => {
    const dispatch = useDispatch();
  const deleteUsers = () => {
    dispatch(removeAllUsers());
  }
  return (
    <Wrapper>
    <button className='clear-btn' onClick={deleteUsers}>Delete All Users</button>
    </Wrapper>
    
  )
}

const Wrapper = styled.section`
    .clear-btn {
        text-transform: capitalize;
        background-color: #db338a;
        margin-top: 2rem;
    }
`

export default DeleteAllUsers