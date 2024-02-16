import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  createContact = name => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContact = {
        id: nanoid(),
        name,
      };

      return { contacts: [newContact, ...contacts] };
    });
  };

  render() {
    console.log(this.state);
    const { createContact } = this;
    const { contacts } = this.state;
    return (
      <>
        <ContactsForm onSubmit={createContact} />
        <ContactsList contacts={contacts} />
      </>
    );
  }
}

export default App;
