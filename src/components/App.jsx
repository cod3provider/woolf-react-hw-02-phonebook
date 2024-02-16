import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  createContact = ({ name, number }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts] };
    });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  }

  getFilteredContacts = () => {
    const { contacts, name, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  render() {
    console.log(this.state);
    const { createContact, handleFilterChange } = this;
    const { contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <ContactsForm onSubmit={createContact} />
        <ContactsList contacts={filteredContacts} />
        <input type='text' value={this.state.filter} onChange={handleFilterChange} placeholder='Search...' />
      </>
    );
  }
}

export default App;
