import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  FormStyles,
  LabelStyles,
  InputStyles,
  ButtonAdd,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
  addContacts: PropTypes.func.isRequired,
};

  handleInput = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  addContacts = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.addContacts(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormStyles onSubmit={this.addContacts}>
        <LabelStyles>
          Name
          <InputStyles
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Ivan"
            value={name}
            onChange={this.handleInput}
          />
        </LabelStyles>
        <LabelStyles>
          Number
          <InputStyles
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="111-11-11"
            value={number}
            onChange={this.handleInput}
          />
        </LabelStyles>
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </FormStyles>
    );
  }
}
