import React from 'react';
import ContactsList from './ContactsList';

let contacts = [{
  phone: '123 213',
  name: 'Iustin'
},
{
  phone: '33123 213',
  name: 'gigi'
},
{
  phone: '13323 213',
  name: 'Mike'
},
{
  phone: '1221 3 213',
  name: 'Maria'
}];

class App extends React.Component {
	render() {
		return (
        <div>
          <h1>Contacts List</h1>
          <ContactsList contacts={contacts}/>
        </div>
      )
	}
}

export default App;