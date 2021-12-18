import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeSearchField } from "../actions/actionCreators";
import Items from "./Items";

export default function Skills() {
  const { search } = useSelector(state => state.skills);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const { value } = event.target;
    dispatch(changeSearchField(value));
  };

  return (
    <>
      <div><input type="search" value={search} onChange={handleSearch} /></div>
      <Items />
    </>
  )
}
