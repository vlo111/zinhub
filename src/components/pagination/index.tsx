import React from 'react';
import { default as LeftArrowSVG } from '@/components/icons/left-arrow.svg';
import { default as RightArrowSVG } from '@/components/icons/right-arrow.svg';

interface PaginationProps {
  offset: number;
  count: number;
  onPageChange: (newOffset: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ offset, count, onPageChange }) => {
  const totalPages = Math.ceil(count / 10);

  const handlePreviousClick = () => {
    if (offset > 0) {
      onPageChange(offset - 10);
    }
  };

  const handleNextClick = () => {
    if (offset < count - 10) {
      onPageChange(offset + 10);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    const newOffset = (pageNumber - 1) * 10;
    onPageChange(newOffset);
  };

  const renderPageNumbers = () => {
    const currentPage = Math.floor(offset / 10) + 1;
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={`border w-[1.5rem] rounded-[0.125rem] ${
            currentPage === i ? 'text-primary-blue border-b-primary-blue' : 'text-dark-gray border-white'
          } cursor-pointer flex justify-center items-center`}
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
      <div className="flex justify-center h-[1.5rem]">
        <button
          className="flex justify-center items-center w-[1.5rem]"
          disabled={offset <= 0}
          onClick={handlePreviousClick}
        >
          <LeftArrowSVG fillOpacity={offset <= 0 ? '0.3' : '1'} />
        </button>
        {renderPageNumbers()}

        <button
          className="flex justify-center items-center w-[1.5rem]"
          disabled={offset >= count - 10}
          onClick={handleNextClick}
        >
          <RightArrowSVG fillOpacity={offset >= count - 10 ? '0.3' : '1'} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
