import React from "react";
import { BsSearch } from "react-icons/bs";

import { FormControl, Form, InputGroup } from "react-bootstrap";
import { connect } from "mongoose";
import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
  const onEmailInputChange = () => {};

  return (
    <Form noValidate>
        <Form.Control
          type="email"
          placeholder="Search here.."
          required
          onChange={onEmailInputChange}
        />
        <FiSearch />
    </Form>
  );
};

const mapStateToProps = (state) => ({});


export default SearchBar;
