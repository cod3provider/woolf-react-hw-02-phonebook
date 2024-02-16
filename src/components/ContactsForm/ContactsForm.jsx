import { Component } from 'react';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const {name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, number } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor='contactName'>Name</label>
        <input
          onChange={handleChange}
          id='contactName'
          type='text'
          name='name'
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor='contactNumber'>Number</label>
        <input
          onChange={handleChange}
          id='contactNumber'
          type='tel'
          name='number'
          value={number}
          pattern='\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
