import React from 'react'

const ContactCard = (props) => {
    const { name, email} = props.contact;
  return (
    <div>
      <div>{name} </div>          
      <div>{email} </div>          
        

    </div>
  )
}

export default ContactCard
