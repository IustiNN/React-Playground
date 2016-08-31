import React from 'react';
class ContactsList extends React.Component {
  render() {
    return (
        <ul>
          <li>{this.props.name} - {this.props.phone}</li>
        </ul>
      )
  }
}

export default ContactsList;