import { Component } from 'react';

class ContactsForm extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({
      name: e.target.value,
    })
  }
  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state.name);
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const {name} = this.state;

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
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
