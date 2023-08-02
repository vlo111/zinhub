import React from 'react';

interface PaginationProps {
  limit: number;
  pageSize: number;
  totalCount: number;
  onChangePage: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ limit, pageSize, totalCount, onChangePage }) => {
  const handlePreviousClick = () => {
    if (limit > 1) {
      onChangePage(limit - 1);
    }
  };

  const handleNextClick = () => {
    if (limit < Math.ceil(totalCount / pageSize)) {
      onChangePage(limit + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onChangePage(page);
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(totalCount / pageSize);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          style={{
            padding: '5px',
            margin: '2px',
            cursor: 'pointer',
            fontWeight: limit === i ? 'bold' : 'normal',
          }}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <span>
        Showing {pageSize} of {totalCount} results
      </span>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button disabled={limit <= 1} onClick={handlePreviousClick}>
          Previous
        </button>
        {renderPageNumbers()}
        <button disabled={limit >= Math.ceil(totalCount / pageSize)} onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
