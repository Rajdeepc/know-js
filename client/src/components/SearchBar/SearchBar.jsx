import React, { useState,useEffect } from "react";

import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { FiSearch } from "react-icons/fi";
import {searchAction} from '../../views/Categories/category.action';
import { useDebounce } from "use-debounce";


const SearchBar = (props) => {

  const [searchValue, setSearchValue] = useState('');

  const debouncingInput = useDebounce(searchValue, 500);


  useEffect(() => {
    if(debouncingInput && searchValue){
      // call action to re render UI based on Search value
      props.searchAction(searchValue)
    }
  }, [debouncingInput])

  const onSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Form noValidate>
        <Form.Control
          type="email"
          placeholder="Search here.."
          required
          onChange={onSearchInputChange}
        />
        <FiSearch />
    </Form>
  );
};

const mapStateToProps = (state) => ({});

const SearchBarComponent = connect(mapStateToProps,{
  searchAction
})(SearchBar)

export default SearchBarComponent;
