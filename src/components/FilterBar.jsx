import React from 'react';
import { FiSearch } from 'react-icons/fi';
import * as S from './FilterBar.styles';

const FilterBar = ({ searchValue, setSearchValue, categoryId, setCategoryId }) => {
  const categories = ['Все', 'Rock', 'Pop', 'Indie', 'Electronic', 'Hip-Hop', 'Grunge'];

  return (
    <S.Wrapper>
      <S.CategoriesList>
        {categories.map((cat, index) => (
          <S.CategoryBtn 
            key={cat} 
            $active={categoryId === index}
            onClick={() => setCategoryId(index)}
          >
            {cat}
          </S.CategoryBtn>
        ))}
      </S.CategoriesList>

      <S.SearchBlock>
        <FiSearch />
        <S.Input 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Поиск винила..." 
        />
      </S.SearchBlock>
    </S.Wrapper>
  );
};

export default FilterBar;