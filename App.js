import React from 'react';
import ContactsList from './ContactsList';

let contacts = {
  phone: '123 213',
  name: 'Iustin'
};

class App extends React.Component {
	render() {
		return (
        <div>
          <h1>Contacts List</h1>
          <ContactsList phone={contacts.phone} name={contacts.name}/>
        </div>
      )
	}
}

export default App;