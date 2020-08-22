import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const { Search: S } = Input;

const Search = styled(S)`
  && {
    outline: none;
    .ant-input {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 0.5px solid #707070;
      border-radius: 10px 0px 0px 10px;
      opacity: 1;
      padding: 0;
      padding-left: 20px;
      border-right: 0;
      height: 34px;
    }

    .ant-btn {
      color: white;
      background: #349af8 0% 0% no-repeat padding-box;
      border: 0.5px solid #707070;
      border-radius: 0px 10px 10px 0;
      opacity: 1;
      height: 34px;
      border-left: 0;
    }
  }
`;

const SearchBar = ({ onSubmit }) => {
  const onFormSubmit = value => {
    onSubmit(value);
  };

  return (
    <div style={{ maxWidth: '50%', paddingBottom: '20px' }}>
      <Search placeholder="Search movie titles" onSearch={onFormSubmit} enterButton />
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func
};

export default SearchBar;
