import { setFilter } from 'redux/contactFilter/contactFilter';

import { useDispatch } from 'react-redux';
import { FilterContainer, Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };
  return (
    <FilterContainer>
      <Label>Find contacts by name</Label>
      <Input type="text" name="filter" onChange={changeFilter} required />
    </FilterContainer>
  );
};

export default Filter;
