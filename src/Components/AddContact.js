import React from 'react';
import './style.css'

class AddContact extends React.Component  {
  state= {
    name:'',
    email:'',
  }

  add= (e)=>{
    e.preventDefault();
    if(this.state.name === '' && this.state.emil ===''){
      alert('all the fills are mandotory');
      return
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: '', email: ''});
  }
  render(){
  return (
    <div>
        <h2>Add Contact</h2>
        <form className='form' onSubmit={this.add}>
        <label>Name</label>
        <input type='text' placeholder='name' value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
        <label>Email</label>
        <input type='text' placeholder='email' value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>
        <button className='btn'>Add</button>
        </form>
    </div>
  )
  }
}

export default AddContact
