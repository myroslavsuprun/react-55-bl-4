import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/sliceFilter';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return <input onChange={changeFilter} />;
};
