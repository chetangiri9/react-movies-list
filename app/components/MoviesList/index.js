import React from 'react';
import { Table, Popconfirm } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DeleteFilled } from '@ant-design/icons';

const StyledTable = styled(Table)`
  && {
    .ant-table.ant-table-bordered thead > tr > th,
    .ant-table.ant-table-bordered tbody > tr > td,
    .ant-table.ant-table-bordered tfoot > tr > th,
    .ant-table.ant-table-bordered tfoot > tr > td {
      border-right: 0;
    }

    .ant-table.ant-table-bordered .ant-table-container {
      border-right: 1px solid #f0f0f0;
    }

    .ant-pagination {
      display: none;
    }
  }
`;

const MoviesList = ({ movies = [], handleDelete }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Year',
      dataIndex: 'year',
      sorter: (a, b) => a.year - b.year,
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'imdbID',
      dataIndex: 'imdbId',
      sorter: (a, b) => a.imdbId - b.imdbId,
      sortDirections: ['descend', 'ascend']
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: (text, record) => {
        return (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.imdbId)}>
            <DeleteFilled />
          </Popconfirm>
        );
      }
    }
  ];

  if (movies && movies.length > 0) {
    return <StyledTable columns={columns} dataSource={movies} bordered showSorterTooltip={false} />;
  } else {
    return <>NO DATA</>;
  }
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  handleDelete: PropTypes.func
};

export default MoviesList;
