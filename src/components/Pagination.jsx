import React from 'react';
import * as S from './Pagination.styles';

const Pagination = ({ currentPage, onChangePage, totalItems, itemsPerPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages <= 1) return null;

  return (
    <S.List>
      {pageNumbers.map((number) => (
        <li key={number}>
          <S.PageButton 
            $active={currentPage === number}
            onClick={() => {
              onChangePage(number);
              document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {number}
          </S.PageButton>
        </li>
      ))}
    </S.List>
  );
};

export default Pagination;