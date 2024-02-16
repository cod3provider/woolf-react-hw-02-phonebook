import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

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
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  render() {
    console.log(this.state);
    const { createContact, handleFilterChange } = this;
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <ContactsForm onSubmit={createContact} />
        <ContactsList contacts={filteredContacts} />
        <Filter value={filter} handleChange={handleFilterChange} />
      </>
    );
  }
}

export default App;
