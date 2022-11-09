import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import { ListContacts } from './ContactList.styled';

export const ContactList = ({ visible, onDeleteContact }) => {
  return (
    <ListContacts>
      {visible.map(({ id, name, number }) => {
        return (
          <ContactListItem
            onDeleteContact={onDeleteContact}
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
    </ListContacts>
  );
};

ContactList.propTypes = {
  visible: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
