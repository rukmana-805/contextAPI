import React from 'react'
import { useContext } from 'react';
import NoteContext from '../Context/notes/NoteContext';

export default function User() {

  const user = useContext(NoteContext);// Whenever u want to use any context the useContext(name of the context)
  //is used. That particulatr context provide some value and that is accessable everywhere.
  console.log(user);

  setTimeout(()=>{
    user.update();
  },1000)

  return (
    <div>
      <h2>Welcome to User Page</h2>
      <h3>User Info</h3>
      <p>Name of the User is : {user.state.name}</p>
      <p>User Study in the class : {user.state.class}</p>
    </div>
  )
}
