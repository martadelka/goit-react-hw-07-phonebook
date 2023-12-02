import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-actions';
import {
  FilterLabel,
  FilterInput,
  FilterWrapper,
} from './FilterStyles';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const handleFilterContacts = e => {
    return dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <FilterWrapper>
    <FilterLabel>
    Find contacts by name:
    </FilterLabel>
    <FilterInput
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterContacts}
    />
    </FilterWrapper>
  );
}

export default Filter;
