import React, { Component } from 'react';

export default class  Contacts  extends Components {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [{"name":,"Adrian", "email": "Samplemail@gmail.com"}, {"name":,"Adrian", "email": "Samplemail@gmail.com"}]
    }
  }
  componentDidMount(){

  }
  render(){
    let { contacts } = this.state
    return (
      <div>
      {contacts.map(contacts => (
        <div>
          <h1>{ contact.name}</h1>
          <p>{ contact.email}</p>
        <div>
      ))}
      </div>
    )
  }
}
