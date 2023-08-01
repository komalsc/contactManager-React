import React from 'react';
import ContactCard from './ContactCard';
import user from "../Images/user.png"
import './style.css'
export default function ContactList (props)  {
    const renderList=props.contacts.map((contact)=>{
        return(
            <div className='container'>
            <img className='img' src={user} alt='user'/>
            <ContactCard className='contact' contact={contact}/>
            </div>
        )
    })
  return (
    <div>
   <h2>ContactList</h2>
   {renderList}
    </div>
  )
}
