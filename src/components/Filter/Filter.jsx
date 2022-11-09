import PropTypes from 'prop-types';
import {FilterLabelStyles, FilterInputStyles} from './Filter.styled'

export const Filter = ({ valueFilter, onChangeFilter }) => {
  return (
    <FilterLabelStyles>
      Find contacts by name
      <FilterInputStyles
        type="text"
        value={valueFilter}
        onChange={onChangeFilter}
        placeholder="Name..."
      />
    </FilterLabelStyles>
  );
};

Filter.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
