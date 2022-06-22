import { Divider, Input } from 'antd';
import React from 'react';
import { useState } from 'react';

const Search = ({findFood}) => {
  const [searchQuery, setSearchQuery] = useState(``);

  function handleChange(query) {
    setSearchQuery(query);
    findFood(query);
  }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchQuery} type="text" onChange={(event) => {handleChange(event.target.value)}} />
    </>
  );
};


export default Search;